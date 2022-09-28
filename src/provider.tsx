import Layout from "./components/layout";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AuthProvider } from "context/AuthContext";

export default function Provider(props: { children: JSX.Element }) {
    return (
        <>
            <AuthProvider>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Layout>{props.children}</Layout>
                </LocalizationProvider>
            </AuthProvider>
        </>
    );
}
