import Menu from "./Menu";
import "./Layout.css";
function Layout() {
  return (
    <>
      <div className="page">
        <div className="container">
          <Menu></Menu>

          <div className="profileCard"></div>
        </div>
      </div>
    </>
  );
}
export default Layout;
