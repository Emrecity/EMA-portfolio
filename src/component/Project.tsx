import Card from "./Card";

const Project = () => {
  const projectList = [
    {
      header: "Academic CV",
      subtext: "An academic tool for building CVs based on level of education",
      link: "https://academicscv.com",
      title: "AI powered academic cv builder",
    },
    {
      header: "Academic CV",
      subtext: "An academic tool for building CVs based on level of education",
      link: "https://academicscv.com",
      title: "AI powered academic cv builder",
    },
    {
      header: "Academic CV",
      subtext: "An academic tool for building CVs based on level of education",
      link: "https://academicscv.com",
      title: "AI powered academic cv builder",
    },
    {
      header: "Academic CV",
      subtext: "An academic tool for building CVs based on level of education",
      link: "https://academicscv.com",
      title: "AI powered academic cv builder",
    },
  ];
  return (
    <div className=" w-full place-content-center-safe z-10">
      <div className="grid  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5">
        {projectList.map((item, key) => {
          return (
            <Card
              key={key}
              title={item.title}
              header={item.header}
              subtext={item.subtext}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
