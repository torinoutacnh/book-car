import React, { createContext, useState, useEffect } from "react";
import { gapi } from "gapi-script";
import { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { User } from "interface/authenticate";
// interface Con{
//     auth: any;
//     A:JSX.Element
// }

const AuthContext = createContext<any>(null);

// const onSuccess = (res: any) => {
//     console.log("ĐĂNG NHẬP THÀNH CÔNG ! XIN CHÀO ", res.profileObj);
// };
// const onFailure = (res: any) => {
//     console.log("ĐĂNG NHẬP THẤT BẠI ! LỖI: ", res);
// };

const clientId = process.env.REACT_APP_CLIENT_ID || "";

 function AuthProvider(props: { children: any }) {
    const [auth, setAuth] = useState();
    
    async function onSuccess(
        response: GoogleLoginResponse | GoogleLoginResponseOffline
    ): Promise<User> {
        const gbj = (response as GoogleLoginResponse).profileObj;
        const res = await fetch(process.env.REACT_APP_API + "/user/authenticate", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: "Bearer my-token" },
            body: JSON.stringify({
                userName: gbj.email,
                password: gbj.googleId,
            }),
        });
        if (res.status === 404) {
            const createUser = await fetch(process.env.REACT_APP_API + "/user/create", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: "Bearer my-token" },
                body: JSON.stringify({
                    name: gbj.name,
                    tel: "",
                    job: "",
                    currentAddress: "",
                    email: gbj.email,
                    passWord: gbj.googleId.substring(0, 20),
                    citizenIdentificationInfo: {
                        number: "",
                        address: "",
                        dateReceive: new Date(),
                    },
                    passportInfo: {
                        number: "",
                        address: "",
                        dateReceive: new Date(),
                    },
                    drivingLicenseInfo: {
                        number: "",
                        dateReceive: new Date(),
                    },
                }),
            });
            console.log(gbj);
        }
        const data = await res.json();
        console.log(res.status);
        console.log(data);
        return data;
    }

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: "",
            });
        };
        gapi.load("client:auth2", initClient);
    });

    return <AuthContext.Provider value={{ auth }}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;
export { AuthProvider };
