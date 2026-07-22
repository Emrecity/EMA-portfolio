const Card = ({ pic, header, key, subtext, icon, link, title }: any) => {
  return (
    <div key={key} title={title} className="card">
      {pic && (
        <img
          src={pic}
          className=" md:max-h-28 mx-auto rounded"
          alt="card-img"
        />
      )}
      <div className={`${icon ? "card-body" : "text-center"}`}>
        <h3 className="text-base md:text-h4 text-color-secondary">
          {header ? header : "Title Here"}
        </h3>
        {icon && icon}
      </div>
      <small className="card-footer">
        {subtext && <p className="text-p 2xl:text-xl">{subtext}</p>}
        {link && (
          <a href={link} className="btn-link-primary">
            <small>Visit Site</small>
          </a>
        )}
      </small>
    </div>
  );
};

export default Card;
