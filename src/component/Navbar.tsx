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
          <button
            onClick={() => setDarktheme(!darktheme)}
            className="transition-all delay-100 duration-300 ease-in"
          >
            {darktheme ? (
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.589 21.659c-3.873 1.038-8.517-.545-10.98-3.632a1 1 0 0 1 .751-1.623c3.984-.118 6.662-1.485 8.17-4.098 1.51-2.613 1.354-5.616-.535-9.125a1 1 0 0 1 1.03-1.463c3.904.59 7.597 3.82 8.635 7.694 1.43 5.334-1.737 10.818-7.071 12.247z"
                  fill="#CBD5E1"
                />
              </svg>
            ) : (
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L19 19M20 12H22M6.5 6.5L5 5M17.5 6.5L19 5M6.5 17.5L5 19M2 12H4M12 2V4M12 20V22M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                  stroke={!darktheme && "#06B6D4"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
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
            {darktheme ? (
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.589 21.659c-3.873 1.038-8.517-.545-10.98-3.632a1 1 0 0 1 .751-1.623c3.984-.118 6.662-1.485 8.17-4.098 1.51-2.613 1.354-5.616-.535-9.125a1 1 0 0 1 1.03-1.463c3.904.59 7.597 3.82 8.635 7.694 1.43 5.334-1.737 10.818-7.071 12.247z"
                  fill="#64748B"
                />
              </svg>
            ) : (
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L19 19M20 12H22M6.5 6.5L5 5M17.5 6.5L19 5M6.5 17.5L5 19M2 12H4M12 2V4M12 20V22M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                  stroke={!darktheme && "#06B6D4"}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
        </ul>
      )}
    </>
  );
};

export default Navbar;
