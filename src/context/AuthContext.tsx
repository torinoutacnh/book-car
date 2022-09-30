import { createContext, useState } from "react";
import { GoogleLoginResponse } from "react-google-login";

const AuthContext = createContext<any>(null);

function AuthProvider(props: { children: any }) {
  const [auth, setAuth] = useState();

  const authen = async (response: GoogleLoginResponse) => {
    var res = await fetch(process.env.REACT_APP_API + "/user/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: response.profileObj.email,
        password: response.profileObj.googleId.substring(0, 20),
      }),
    });

    if (res.status === 404) {
      const user = await createUser(response);
      return setAuth(user);
    }

    const data = await res.json();
    if (res.status >= 400 && res.status !== 404) {
      throw new Error(`${res.status}:${data.message}`);
    }

    return setAuth(data);
  };

  const createUser = async (response: GoogleLoginResponse) => {
    const user = {
      name: response.profileObj.name,
      tel: "",
      job: "",
      currentAddress: "",
      email: response.profileObj.email,
      passWord: response.profileObj.googleId.substring(0, 20),
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
    };

    const res = await fetch(process.env.REACT_APP_API + "/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (res.status >= 400) throw new Error(`${res.status}:${data.message}`);
    return data;
  };

  return (
    <AuthContext.Provider value={{ auth, authen }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthProvider };
