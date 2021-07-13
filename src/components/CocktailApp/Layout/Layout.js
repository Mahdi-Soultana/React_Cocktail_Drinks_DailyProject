import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Layout = props => {
  return (
    <div>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
