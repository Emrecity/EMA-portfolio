const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1 className="text-h2-lg text-color-secondary mb-5 md:mb-10 text-center">
        Let's Connect and Build The Future
      </h1>
      <div className="flex flex-col-reverse lg:grid md:grid-cols-3 gap-5 w-[90%] mx-auto md:mx-0 md:w-full">
        <div className="p-4 border-2 border-slate-500 md:border-none md:p-8 md:rounded-2xl w-full sm:w-[85%] lg:w-full md:shadow-[0_0_10px_#3b82f6] rounded-lg mx-auto dark:shadow-[0_0_10px] my-5 md:my-16">
          <form className="flex flex-col gap-5">
            <div>
              <h3 className="text-h4 mb-1 md:mb-0">Leave Message</h3>
              <p className="2xl:text-3xl">
                Feel free to reach out if you want to collaborate,discuss ideas
                or simply ssay hello
              </p>
            </div>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              autoComplete="true"
              autoSave="true"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="name"
              autoComplete="true"
              autoSave="true"
            />
            <textarea
              rows={6}
              placeholder="Your message"
              name="message"
            ></textarea>
            <button className="btn-link-secondary mx-auto w-full">
              Send Message
            </button>
          </form>
          <div className="my-5">
            <p>Connect with Me</p>
          </div>
        </div>
        <form className="md:col-span-2 form-card">
          <div className="md:mb-12">
            <h3 className="text-h4">Comments</h3>
            <p className="2xl:text-3xl">Leave your thoughts here</p>
          </div>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            autoComplete="true"
            autoSave="true"
          />
          <textarea
            rows={6}
            placeholder="Your comment"
            name="message"
          ></textarea>
          <button className="btn-link-secondary mx-auto w-full">
            Leave Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
