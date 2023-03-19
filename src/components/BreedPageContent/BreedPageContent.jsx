import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import PageControls from "@components/shared/PageControls/PageControls.jsx";
import API from "@common/api.js";
import { apiUrls } from "@constants/apiUrls.js";
import Logger from "@common/logger.js";
import LoaderContainer from "@components/shared/Loader/LoaderContainer/LoaderContainer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BreedPageContent.scss";

function BreedPageContent() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cat, setCat] = useState(null);

  const getCat = async () => {
    try {
      setIsLoading(true);
      const response = await API.get(apiUrls.getImageById(id));
      const cat = response.data;
      setCat(cat);
    } catch (error) {
      Logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <section className="breed-page">
      <div className="breed-page__container">
        <ActionsLine />
        <div className="breed-page__content">
          <PageControls pageTitle="Breed" />
          {!cat && isLoading && <LoaderContainer className="u-flex-grow-1" />}
          {cat && !isLoading && (
            <>
              <div className="breed-page__image">
                <figure className="voting__image-container">
                  <img src={cat && cat.url} alt="cat" />
                </figure>
              </div>
              <div className="breed-page__info">
                <h3 className="breed-page__title u-center">{cat?.breeds[0]?.name || "Unknown"}</h3>
                {cat?.breeds[0]?.description && (
                  <h4 className="breed-page__subtitle">{cat?.breeds[0]?.description}</h4>
                )}
                <div className="breed-page__grid">
                  <div className="breed-page__cell">
                    <span>Temperament:</span> <br />
                    {cat?.breeds[0]?.temperament || "-"}
                  </div>
                  <div>
                    <div className="breed-page__cell">
                      <span>Weight:</span>&nbsp;
                      {cat?.breeds[0]?.weight.metric || "-"} kgs
                    </div>
                    <div className="breed-page__cell">
                      <span>Life span:</span>&nbsp;
                      {cat?.breeds[0]?.life_span || "-"} years
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default BreedPageContent;
