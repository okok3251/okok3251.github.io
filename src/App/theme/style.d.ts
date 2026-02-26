import "styled-components";


declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: string;
            text: string;
            border: string;
        };
        shadows: {
            small: string;
            medium: string;
            large: string;
        };
        borderRadius: {
            small: string;
            medium: string;
            large: string;
        };
        fontSizes : {
            xsm : string;
            sm : string;
            md : string;
            lg : string;
            xl : string;
            xxl : string;
        };
        fontWeights : {
            extraBold : number;
            bold : number;
            semiBold : number;
            regular : number;
        };
    }
}
