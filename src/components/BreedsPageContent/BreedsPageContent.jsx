import { useState, useEffect } from "react";
import Logger from "@common/logger.js";
import { Link } from "react-router-dom";
import API from "@common/api.js";
import { apiUrls } from "@constants/apiUrls.js";
import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import PageControls from "@components/shared/PageControls/PageControls.jsx";
import LoaderContainer from "@components/shared/Loader/LoaderContainer/LoaderContainer.jsx";
import Grid from "@components/shared/Grid/Grid.jsx";
import Card from "@components/shared/Card/Card.jsx";
import routes from "@constants/routes.js";
import "./BreedsPageContent.scss";

function BreedsPageContent() {
  const [catsList, setCatsList] = useState([]);
  const [isCatsLoading, setCatsLoading] = useState(false);

  const getCats = async () => {
    try {
      setCatsLoading(true);
      const response = await API.get(`${apiUrls.searchImages}?limit=25&has_breeds=1&order=ASC`);
      const cats = response.data;
      setCatsList(cats);
    } catch (error) {
      Logger.error(error);
    } finally {
      setCatsLoading(false);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  const renderCardHover = (item) => {
    const breedName = item?.breeds[0]?.name || "Unknown breed";
    return (
      <Link
        className="card__hover-content card__hover-content--bottom card__hover-content--full-width u-center"
        to={routes.breed.url(item.id)}
      >
        {breedName}
      </Link>
    );
  };

  return (
    <section className="breeds-page">
      <div className="breeds-page__container">
        <ActionsLine />
        <div className="breeds-page__content">
          <PageControls pageTitle="Breeds" />
          {isCatsLoading && <LoaderContainer className="u-flex-grow-1" />}
          {catsList.length > 0 && (
            <Grid
              items={catsList}
              renderItem={(item) => (
                <Card item={item} withHover renderCardHover={() => renderCardHover(item)} />
              )}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default BreedsPageContent;
