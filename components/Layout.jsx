import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
