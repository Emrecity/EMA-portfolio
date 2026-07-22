import Card from "./Card";

const Service = () => {
  const serviceList = [
    {
      logo: "/favicon.svg",
      header: "Websites & Web Apps",
    },
    {
      logo: "/favicon.svg",
      header: "Mobile App Development",
    },
    {
      logo: "/favicon.svg",
      header: "API & System Integration",
    },
    {
      logo: "/favicon.svg",
      header: "IT Support",
    },
    {
      logo: "/favicon.svg",
      header: "Project Mangement",
    },
    {
      logo: "/favicon.svg",
      header: "Database Management",
    },
    {
      logo: "/favicon.svg",
      header: "Network Administration",
    },
    {
      logo: "/favicon.svg",
      header: "IT Consultancy",
    },
  ];
  return (
    <div className=" w-full place-content-center-safe z-10">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-between gap-5">
        {serviceList.map((item, key) => {
          return <Card key={key} header={item.header} pic={item.logo} />;
        })}
      </div>
    </div>
  );
};

export default Service;
