import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "681359121878-soqrndjm3aiqh3rlgebrv4orkqn7gvfo.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        console.log("ĐĂNG XUẤT THÀNH CÔNG !");
    };
    return (
        <div id="signOutButton">
            <GoogleLogout clientId={clientId} buttonText={"Logout"} onLogoutSuccess={onSuccess} />
        </div>
    );
}

export default Logout;
