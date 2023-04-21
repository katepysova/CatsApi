import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import imageNotFound from "@images/404-page-not-found.png";
import "./NotFoundPageContent.scss";

function NotFoundPageContent() {
  return (
    <section className="not-found-page page">
      <div className="not-found-page__container page__container">
        <ActionsLine />
        <div className="not-found-page__content page__content">
          <figure className="not-found-page__image">
            <img src={imageNotFound} alt="cat" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPageContent;
