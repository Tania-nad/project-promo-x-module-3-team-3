import PropTypes from "prop-types";

const Preview = (props) => {
  return (
    <section className="preview">
      <div className="projectImage"></div>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            {props.nameProjectUser}
          </span>
        </h2>

        <div className="card__author">
          <div className="card__authorPhoto"></div>
          <p className="card__job">{props.jobProjectUser}</p>
          <h3 className="card__name">{props.authorProjectUser}</h3>
        </div>
        <div className="card__project">
          <h3 className="card__name"></h3>
          <p className="card__slogan">{props.sloganProjectUser}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">{props.descProjectUser}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{props.techProjectUser}</p>

            <a
              className="icon icon__www"
              href="#"
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href="#"
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

Preview.propTypes = {
  nameProjectUser: PropTypes.string,
  technologies: PropTypes.string,
};
export default Preview;
Preview.PropTypes = {
  nameProjectUser: PropTypes.function,
};
