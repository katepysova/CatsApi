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

import "./SearchPageContent.scss";

function SearchPageContent() {
  const [breed, setBreed] = useState("");
  const [catsList, setCatsList] = useState([]);
  const [isCatsLoading, setCatsLoading] = useState(false);

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
    <section className="search-page">
      <div className="search-page__container">
        <ActionsLine
          isSearchPage
          initialSearchValue={breed}
          onSearch={(value) => {
            setBreed(value);
          }}
        />
        <div className="search-page__content">
          <PageControls pageTitle="Search" />
          {breed && breed.label && (
            <p className="search-page__results-info">
              Search results for: <span>{breed.label}</span>
            </p>
          )}
          {isCatsLoading && <LoaderContainer className="u-flex-grow-1" />}
          {catsList.length > 0 && (
            <Grid items={catsList} renderItem={(item) => <Card item={item} />} />
          )}
          {!isCatsLoading && catsList.length === 0 && <EmptyState />}
        </div>
      </div>
    </section>
  );
}

export default SearchPageContent;
