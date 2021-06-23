import { colors } from "./style";

export const LightTheme = {
    dark: false,
    colors: {
       primary: 'rgb(255, 45, 85)',
       background:colors.white,
       backgroundicon:colors.black,
       backgroundiconLogin:colors.grayLight,
       backgroundiconLoginSocail:colors.white,
       backgroundSreach:colors.colorGrayBgr,
       card: 'rgb(255, 255, 255)',
       text: colors.black,
       border: 'rgb(199, 199, 204)',
       notification: 'rgb(255, 69, 58)',
    }
 }
 
 export const DarkTheme = {
    dark: true,
    colors: {
       primary: 'rgb(255, 45, 85)',
       background:colors.black,
       backgroundicon:colors.white,
       backgroundiconLogin:colors.grayLight,
       backgroundiconLoginSocail:colors.white,
       backgroundSreach:colors.black_80,
       card: 'rgb(255, 255, 255)',
       text: colors.white,
       border: 'rgb(199, 199, 204)',
       notification: 'rgb(255, 69, 58)',
    },
 };
