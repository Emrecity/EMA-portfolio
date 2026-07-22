import { useState } from "react";

const Navbar = ({ setDarktheme, darktheme }) => {
  const [menu, setMenu] = useState(false);
  const [page, setPage] = useState("home");

  return (
    <>
      <div className="nav">
        <h4 className=" ">
          EMA <span className=" text-cyan-500 dark:text-gray-900">.dev</span>
        </h4>
        <ul data-screen="laptop">
          <li>
            {" "}
            <a
              className={`${page === "home" && "active-nav"}`}
              onClick={() => setPage("home")}
              href="#home"
            >
              home
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`${page === "about" && "active-nav"}`}
              onClick={() => setPage("about")}
              href="#about"
            >
              about
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`${page === "portfolio" && "active-nav"}`}
              onClick={() => setPage("portfolio")}
              href="#portfolio"
            >
              portfolio
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`${page === "contact" && "active-nav"}`}
              onClick={() => setPage("contact")}
              href="#contact"
            >
              contact
            </a>
          </li>
          <button onClick={() => setDarktheme(!darktheme)}>
            {darktheme ? "D" : "L"}
          </button>
        </ul>
        <button
          className="md:hidden transition-transform delay-100 duration-300 ease-in"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "X" : "B"}
        </button>
      </div>
      {menu && (
        <ul className="mobile-nav">
          <li>
            {" "}
            <a
              className={`${page === "home" && "active-nav"}`}
              onClick={() => {
                setPage("home");
                setMenu(!menu);
              }}
              href="#home"
            >
              home
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`${page === "about" && "active-nav"}`}
              onClick={() => {
                setPage("about");
                setMenu(!menu);
              }}
              href="#about"
            >
              about
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`${page === "portfolio" && "active-nav"}`}
              onClick={() => {
                setPage("portfolio");
                setMenu(!menu);
              }}
              href="#portfolio"
            >
              portfolio
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`${page === "contact" && "active-nav"}`}
              onClick={() => {
                setPage("contact");
                setMenu(!menu);
              }}
              href="#contact"
            >
              contact
            </a>
          </li>
          <button onClick={() => setDarktheme(!darktheme)}>
            {darktheme ? "D" : "L"}
          </button>
        </ul>
      )}
    </>
  );
};

export default Navbar;
