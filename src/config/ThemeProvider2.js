import React from "react";
import { LightTheme, DarkTheme } from './Themes'

export const Context = React.createContext();

export class ThemeProvider2 extends React.Component {
  state = {
    theme: LightTheme,
    updateTheme: (theme) => {
      this.setState({ theme: theme })
    }
  }
  render() {
    const { theme } = this.state
    return (
      <Context.Provider value={this.state}  theme={theme} >
        { this.props.children }
      </Context.Provider>
    )
  }
}

export default ThemeProvider2;