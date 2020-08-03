import Head from "next/head";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import("./Navbar"));
const Burger = dynamic(() => import("./Burger"));
const DesktopNavbar = dynamic(() => import("./DesktopNavbar"));
const Footer = dynamic(() => import("./Footer"));

export default function Layout({ preview, children }) {
        return (
            <div className="page-wrapper">
                <Head>
                    <title>Authors Press</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content={`Authors Press is the sole owner of Creative Books and Authorial Magazine. We take pride in creating milestones in the literary industry. `}
                    />
                </Head>
                <Burger setBurgerClicked={this.setBurgerClicked} />
                <DesktopNavbar />
                <Navbar burgerClicked={this.state.burgerClicked} />
                {children}
                <Footer />
            </div>
        );
    }