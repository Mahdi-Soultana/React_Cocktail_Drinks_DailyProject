import "./Layout.css";
const Layout = props => {
  return (
    <>
      <div className="container">
        <main>{props.children}</main>
      </div>
      <footer>
        <div>
          <p>Created By</p>
          <a href="https://github.com/Mahdi-Soultana">@MahdiSoutlana</a>
        </div>
        <ul>
          <li>
            <a href="https://twitter.com/mahdi_soultana">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mahdisoultana/">Linkdin</a>
          </li>
          <li>
            <a href="https://github.com/Mahdi-Soultana">github</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Layout;
