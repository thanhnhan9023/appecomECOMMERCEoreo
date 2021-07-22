export const emailValidator = email => {
    const re = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) return 'Email cannot be empty.';
    if (!re.test(email)) return 'Ooops! We need a valid email address.';
    return true;
  };
  
  export const infoValidator = info => {
    if (!info || info.length <= 0) return 'Cannot be empty.';
    return true;
  };
  
  export const passwordValidator = password => {
    if (!password || password.length <= 0) return 'Password cannot be empty.';
    if (password.length <= 5) return 'Password must more 5 words';
  
    return true;
  };
  
  export const nameValidator = name => {
    if (!name || name.length <= 0) return 'UserName cannot be empty.';
    return true;
  };
  
  export const phoneValidator = phone => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  
    if (!phone || phone.length <= 0) return 'Phone cannot be empty';
    if (!regex.test(phone)) return 'Phone must is format XXX-XXX-XXXX';
  
    return true;
  };
  
  export const addressValidator = address => {
    if (!address || address.length <= 0) return 'Phone cannot be empty';
  
    return true;
  };
  
  export const codeValidator = code => {
    if (!code || code.length <= 0) return 'Code cannot be empty';
    if (code.length != 6) return 'Code must 6 words';
  
    return true;
  };