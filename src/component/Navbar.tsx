import { useState } from "react";

const Navbar = ({
  setDarktheme,
  darktheme,
}: {
  setDarktheme: (darktheme: boolean) => void;
  darktheme: boolean;
}) => {
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
          className="md:hidden transition-all delay-100 duration-300 ease-in"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414z"
                fill="#0D0D0D"
              />
            </svg>
          ) : (
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="#000000"
              />
            </svg>
          )}
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
