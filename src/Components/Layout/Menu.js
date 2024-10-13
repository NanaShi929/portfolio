import * as React from "react";
import Link  from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="theme"></div>
      <div>
        <img src="../icons/Person.png" alt="About">
          <Link to={"./Pages/About.js"}>
          </Link></img>
        <img src="../icons/Resume.png" alt="Resume"></img>
        <img src="../icons/Office.png" alt="Office"></img>
        <img src="../icons/Contact.png" alt="Contact"></img>
      </div>
    </>
  );
}
export default Menu;
