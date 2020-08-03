    import Head from "next/head";
    import Navbar from "./Navbar";

    function Layout(props) {
        return (
            <div className="page-wrapper">
                <Head>
                    <title>Authors Press</title>
                    <link rel="icon" href="/favicon.ico" />
                    <script
                        src="https://kit.fontawesome.com/c5e006f09f.js"
                        crossorigin="anonymous"
                    ></script>
                </Head>
                
            </div>
        );
    }