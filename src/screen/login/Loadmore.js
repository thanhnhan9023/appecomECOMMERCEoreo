import React, { Component } from 'react';
import { View, Text,FlatList, Image } from 'react-native';
import { create } from 'apisauce'
const api = create({
    baseURL: 'https://api.stackexchange.com/2.2/',
})
export default class Loadmore extends Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
        loading: false, // user list loading
            isRefreshing: false, //for pull to refresh
            data: [], //user list
            error: '',
            isSroll: false
    };
  }
async componentDidMount()
{
    this.fetchUser(this.page) // load data khi vua mo app

}
fetchUser(page) {
    const url = `users?page=${page}&order=desc&sort=reputation&site=stackoverflow`;
    this.setState({ loading: true })
    api.get(url)
        .then(res => {
           
            let listData = this.state.data;//data hiện tại của state []
            if (this.page == 1) {
                this.setState({ loading: false, data: [...res.data.items] })
            } else {
                this.setState({ loading: false, data: [...listData, ...res.data.items] })
            }
        })
        .catch(error => {
            this.setState({ loading: false, error: 'Something just went wrong' })
        });
}
handleLoadMore = () => {
    if (!this.state.loading) {
        this.page = this.page + 1; // increase page by 1
        this.fetchUser(this.page); // method for API call 
    }
};
  render() {
    const { loading, data } = this.state;
    return (
        
        <View style={{ flex: 1, backgroundColor: 'blue', }}>
        <FlatList
            contentContainerStyle={{ backgroundColor: 'red', }}
            data={data}
            // extraData={this.state}
            // onScroll={() => {
            //     this.setState({ isSroll: true })
            // }}
            refreshing={loading}
            onRefresh={() => this.fetchUser(1)}
            renderItem={({ item, index }) => {
                return <View style={{
                    flexDirection: 'row',
                    padding: 15,
                    alignItems: 'center',
                    backgroundColor: 'green',
                    minHeight: 100, margin: 1
                }}>
                    <Image source={{ uri: item.profile_image }}
                        style={{
                            height: 50,
                            width: 50,
                            marginRight: 10
                        }} />
                    <Text style={{
                        fontSize: 18,
                        alignItems: 'center',
                        color: '#65A7C5',
                    }}>{item.display_name}</Text>
                </View>
            }}
            keyExtractor={(item, index) => index.toString()}
            // ItemSeparatorComponent={this.renderSeparator}
            // ListFooterComponent={this.renderFooter(this)}
            onEndReachedThreshold={0.4}
            onEndReached={this.handleLoadMore}
        />
    </View>
);
  }
}
