import { useState } from "react";
import Card from "./Card";
const Stack = () => {
  const stackList = [
    {
      logo: "/favicon.svg",
      header: "HTML",
    },
    {
      logo: "/favicon.svg",
      header: "CSS",
    },
    {
      logo: "/favicon.svg",
      header: "JAVASCRIPT",
    },
    {
      logo: "/favicon.svg",
      header: "TYPESCRIPT",
    },
    {
      logo: "/favicon.svg",
      header: "REACT JS",
    },
    {
      logo: "/favicon.svg",
      header: "NEXT JS",
    },
    {
      logo: "/favicon.svg",
      header: "REACT NATIVE",
    },
    {
      logo: "/favicon.svg",
      header: "TAILWIND CSS",
    },
  ];
  const [page, setPage] = useState(1);
  return (
    <div className=" w-full place-content-center-safe z-10">
      {page == 1 && (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5">
          {stackList.map((item, key) => {
            return <Card key={key} header={item.header} pic={item.logo} />;
          })}
        </div>
      )}
      {page == 2 && (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5">
          {stackList.map((item, key) => {
            return <Card key={key} header={item.header} pic={item.logo} />;
          })}
        </div>
      )}
      <button
        onClick={() => {
          if (page == 1) {
            setPage(2);
          } else setPage(1);
          return;
        }}
        className={`${page == 1 ? "btn-primary" : "btn-secondary"} place-content-center place-self-center-safe flex mt-10`}
      >
        {page == 1 ? "See More" : "Back"}
      </button>
    </div>
  );
};

export default Stack;
