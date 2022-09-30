import AuthContext from "context/AuthContext";
import { gapi } from "gapi-script";
import { useContext, useEffect } from "react";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";

function Login() {
  const { authen } = useContext(AuthContext);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Đăng nhập"
        onSuccess={async (res) => await authen(res as GoogleLoginResponse)}
        onFailure={(err: any) => {}}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
      />
    </div>
  );
}

export default Login;
