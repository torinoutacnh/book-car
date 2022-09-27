import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = (props: { children: any }) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
};

export default Layout;
