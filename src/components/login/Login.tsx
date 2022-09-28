import { dateTimePickerTabsClasses } from "@mui/x-date-pickers";
import { User } from "interface/authenticate";
import React from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

function Login() {
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
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID || ""}
                buttonText="Đăng nhập"
                onSuccess={(res) => onSuccess(res)}
                onFailure={(err: any) => {}}
                cookiePolicy={"single_host_origin"}
                isSignedIn={false}
            />
        </div>
    );
}

export default Login;
