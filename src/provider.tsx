import Layout from "./components/layout";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";

export default function Provider(props: { children: JSX.Element }) {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <Layout>{props.children}</Layout>
            </LocalizationProvider>
        </>
    );
}
