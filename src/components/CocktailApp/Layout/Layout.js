import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

import "./Layout.css";
const Layout = props => {
  return (
    <>
      <Nav />
      <div className="container">
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
