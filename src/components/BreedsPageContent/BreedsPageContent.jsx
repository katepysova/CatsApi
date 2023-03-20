import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import { useEffect, useState } from "react";
import API from "@common/api.js";
import { apiUrls } from "@constants/apiUrls.js";
import Logger from "@common/logger.js";
import PageControls from "@components/shared/PageControls/PageControls.jsx";
import Grid from "@components/shared/Grid/Grid.jsx";
import LoaderContainer from "@components/shared/Loader/LoaderContainer/LoaderContainer.jsx";
import EmptyState from "@components/shared/EmptyState/EmptyState.jsx";
import Card from "@components/shared/Card/Card.jsx";

import "./BreedsPageContent.scss";

function SearchPageContent() {
  const [breed, setBreed] = useState("");
  const [catsList, setCatsList] = useState([]);
  const [isCatsLoading, setCatsLoading] = useState(false);

  const breedInfo = catsList?.[0]?.breeds[0] || null;

  const getCatsByBreedId = async () => {
    try {
      setCatsLoading(true);
      setCatsList([]);
      const response = await API.get(`${apiUrls.getCatsByBreedId(breed.value)}&limit=100`);
      const list = response.data;
      setCatsList(list);
    } catch (error) {
      Logger.error(error);
    } finally {
      setCatsLoading(false);
    }
  };

  useEffect(() => {
    if (breed) {
      getCatsByBreedId();
    }
  }, [breed]);

  return (
    <section className="breeds-page page">
      <div className="breeds-page__container page__container">
        <ActionsLine
          withSearch
          initialSearchValue={breed}
          onSearch={(value) => {
            setBreed(value);
          }}
        />
        <div className="breeds-page__content page__content">
          <PageControls pageTitle="Breeds" />
          {breed && breed.label && (
            <p className="breeds-page__results-info">
              Search results for: <span>{breed.label}</span>
            </p>
          )}
          {isCatsLoading && <LoaderContainer className="u-flex-grow-1" />}
          {catsList.length > 0 && (
            <>
              {breedInfo && (
                <div className="breeds-page__info">
                  <p className="breeds-page__info-item">
                    <span>Description: </span> {breedInfo.description || "-"}
                  </p>
                  <p className="breeds-page__info-item">
                    <span>Life span:</span>&nbsp;
                    {breedInfo.life_span || "-"} years
                  </p>
                  <p className="breeds-page__info-item">
                    <span>Origin:</span>&nbsp;
                    {breedInfo.origin || "-"}
                  </p>
                  <p className="breeds-page__info-item">
                    <span>Temperament:</span>&nbsp;
                    {breedInfo.temperament || "-"}
                  </p>
                  <p className="breeds-page__info-item">
                    <span>Weight:</span>&nbsp;
                    {breedInfo.weight.metric || "-"} kgs
                  </p>
                </div>
              )}
              <Grid items={catsList} renderItem={(item) => <Card item={item} />} />
            </>
          )}
          {!isCatsLoading && catsList.length === 0 && <EmptyState />}
        </div>
      </div>
    </section>
  );
}

export default SearchPageContent;
