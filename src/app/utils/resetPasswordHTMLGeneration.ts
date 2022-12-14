import {PATH} from "../../layout/AppRoutes/routes";

export const resetPasswordHTMLGeneration = () => {

    return  `<div style="background-color: lime; padding: 15px">
              password recovery link:
                <a href='http://localhost:3000/${PATH.SET_PASSWORD}/$token$'>
                  password recovery link
                </a>
             </div>`
}