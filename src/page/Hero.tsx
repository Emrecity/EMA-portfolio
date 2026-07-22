const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="text-center flex flex-col justify-center py-5 space-y-3 place-content-center">
        <h4 className="text-p mb-5">Hi, I'm Emmanuel Owusu</h4>
        <h2 className="text-h2 text-color-primary animate-bounce">
          SaaS Founder & Full-Stack Developer
        </h2>
        <p className="text-p capitalize">
          {/* Building Digital Solutions That <span>Move Africa Forward</span> */}
          more than a developer - i build businesses
        </p>
        <div className="flex flex-col md:flex-row gap-5 align-middle place-content-center my-5">
          <a className="btn-primary">View My Work</a>
          <a className="btn-secondary">Let's Chat</a>
        </div>
      </div>
      <div className="relative md:w-80">
        <img
          src="/subprofile.jpg"
          alt="profile-image"
          className=" rounded-ss-xl md:absolute md:top-0 sm:-left-10 md:object-cover shadow-xl duration-500 ease-out md:rotate-[-8.5deg] md:hover:zoom-105 hover:rotate-0 md:hover:z-20 md:z-10 cursor-pointer container md:w-65  border-2 transition-all"
        />
        <img
          src="/subprofile.jpg"
          alt="profile-image"
          className="hidden md:block rounded-ee-4xl absolute top-3 right-5 object-cover shadow-xl duration-500 ease-out rotate-[8.5deg] hover:zoom-105 hover:rotate-0 hover:z-20 z-10 cursor-pointer container md:w-65 border-2 transition-all"
        />
      </div>
    </section>
  );
};

export default Hero;
