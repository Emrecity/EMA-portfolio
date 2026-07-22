const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="text-h2 text-color-secondary my-5 text-center">
        Not merely writing code - I architect sustainable solutions
      </h2>
      <div className="flex flex-col md:flex-row md:justify-evenly 2xl:justify-around gap-5 space-3 mt-20">
        <div className="text-justify md:w-xl 2xl:w-5xl flex flex-col py-5 space-y-5 ">
          <h2 className="text-h2-lg">Emmanuel Owusu</h2>
          <p className="text-p">
            I am a trained IT professional with a disciplined foundation in
            software engineering and commercial strategy. From the outset of my
            career, I have held that technical excellence is only truly
            meaningful when applied to create robust, sustainable value. I do
            not merely execute instructions; I conceive, design and deliver
            complete solutions that stand up to rigourous global standards
          </p>
          <p className="text-p">
            <strong>My core convictions is this:</strong>
            <br />
            Technology advances at an extraordinary and ever-increasing pace. In
            this profession, the most valuable asset one can possess is not
            merely what one already knows, but the capacity to learn quickly,
            adapt easily, and master new systems with precision
          </p>
          <div className="flex flex-col md:flex-row gap-5  my-5">
            <a className="btn-primary">Download Resume</a>
            <a className="btn-secondary">Let's collaborate</a>
          </div>
        </div>

        <img
          src="/subprofile.jpg"
          alt="profile-image"
          className=" rounded md:rounded-full md:w-sm 2xl:w-lg"
        />
      </div>
      <div className="my-16 grid sm:grid-cols-2 md:grid-cols-3 gap-5 dark:bg-white/30 bg-cyan-500 p-3 md:p-5  rounded-xl">
        <div className="about-card text-white/70  dark:text-slate-500  dark:bg-white/50">
          <h3 className="text-h4 dark:underline dark:underline-offset-10">
            Academic Qualification
          </h3>
          <div>
            <strong className=" 2xl:text-4xl ">
              B.Sc Information Technology
            </strong>
            <p className="text-p">Aamusted (USTED), 2020 - 2024 </p>
          </div>
          <div>
            <strong className=" 2xl:text-4xl ">General Arts (WASSCE)</strong>
            <p className="text-p">Okess, 2016 - 2019 </p>
          </div>
        </div>
        <div className="about-card text-white/70  dark:text-slate-500  dark:bg-white/50">
          <h3 className="text-h4 dark:underline dark:underline-offset-10">
            Key Internship
          </h3>
          <div>
            <strong className=" 2xl:text-4xl ">Software Developer</strong>
            <p className="text-p">Opencastgh, July 2022 - Dec 2022 </p>
          </div>
          <div>
            <strong className=" 2xl:text-4xl ">IT Support Intern</strong>
            <p className="text-p">KATH, July 2021 - Dec 2021</p>
          </div>
        </div>
        <div className="about-card text-white/70   dark:text-slate-500  dark:bg-white/50">
          <h3 className="text-h4 dark:underline dark:underline-offset-10">
            Voluntary Service
          </h3>
          <div>
            <strong className=" 2xl:text-4xl ">IT Facilator</strong>
            <p className="text-p">Meduma M/A, Oct 2024 - Aug 2025 </p>
          </div>
          <div>
            <strong className=" 2xl:text-4xl ">Software Engineer</strong>
            <p className="text-p">Samasoft Tech, July 2023 - Dec 2023 </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
