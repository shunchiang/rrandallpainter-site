import Head from "next/head";
import Navbar from "../components/Navbar";
import NavbarSpacer from "../components/NavbarSpacer";
import Jumbo from "../components/Jumbo";
import Main from "../components/Main";

const Index = () => {
  return (
    <>
      <Head>
        <title>R.Randall Painting Contractors</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossorigin="anonymous"
        />
      </Head>
      <Navbar />
      <NavbarSpacer />
      <Jumbo />
      <Main />
    </>
  );
};

export default Index;
