import React, { createContext, useState, useEffect } from "react";
import { gapi } from "gapi-script";
// interface Con{
//     auth: any;
//     A:JSX.Element
// }

const AuthContext = createContext<any>(null);

const clientId = "681359121878-soqrndjm3aiqh3rlgebrv4orkqn7gvfo.apps.googleusercontent.com";

function AuthProvider(props: { children: any }) {
    const [auth, setAuth] = useState();
    // const A = () => (
    //     <>
    //         <h1>11</h1>
    //     </>
    // );

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
