import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "681359121878-soqrndjm3aiqh3rlgebrv4orkqn7gvfo.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res: any) => {
        console.log("ĐĂNG NHẬP THÀNH CÔNG ! XIN CHÀO ", res.profileObj);
    };
    const onFailure = (res: any) => {
        console.log("ĐĂNG NHẬP THẤT BẠI ! LỖI: ", res);
    };

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Đăng nhập"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;
