import {PATH} from "../../layout/AppRoutes/routes";

export const resetPasswordHTMLGeneration = () => {
  return `<body style="font-size: 1.25rem;font-family: 'Roboto', sans-serif;padding-left:20px;padding-right:20px;padding-top:20px;padding-bottom:20px; background-color: #FAFAFA; width: 75%; max-width: 1280px; min-width: 600px; margin-right: auto; margin-left: auto">
<table cellpadding="12" cellspacing="0" width="100%" bgcolor="#FAFAFA" style="border-collapse: collapse;margin: auto">
<thead>
    <tr>
        <td style="padding-left: 0; padding-right: 0">
<img src="https://uploads-ssl.webflow.com/5e96c040bda7162df0a5646d/5f91d2a4d4d57838829dcef4_image-blue%20waves%402x.png" style="width:80%; max-width:750px" />
</td>
</tr>

</thead>
<tbody>
<tr>
    <td style="padding: 50px; background-color: #fff; max-width: 660px">
<table width="100%" style="">
<tr>
<td style="text-align:center; padding-bottom: 20px">
<img src="https://static.tildacdn.com/tild3364-3938-4962-b634-303637346334/logo-big-blue.png" style="max-width: 250px; width: 30%;"/>
</td>
</tr>
<tr>
    <td style="text-align:center">
<h1 style="font-size: 30px; color: #202225; margin-top: 0;">Hello</h1>
<p style="font-size: 18px; margin-bottom: 30px; color: #202225; max-width: 60ch; margin-left: auto; margin-right: auto">A request has been received to change the password for your account</p>
<a href='https://cards-friday-project.vercel.app/${PATH.SET_PASSWORD}/$token$' style="background-color: #1755F5; color: #fff; padding: 8px 24px; border-radius: 4px; border-style: solid; border-color: #1755F5; font-size: 14px; text-decoration: none; cursor: pointer">Reset Password </a>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
<tfoot>
<tr>
    <td style="text-align: center; padding-top: 30px">
<table>
    <tr>
<td>
<td style="text-align: left;color:#B6B6B6; font-size: 18px; padding-left: 12px">If you didn’t request this, you can ignore this email or let us know. Your password won’t change until you create a new password.</td>
</td>
</tr>
</table>

</td>
</tr>
</tfoot>
</table>
</body>`;
};
