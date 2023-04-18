import { useState, useEffect } from "react";
import Logger from "@common/logger.js";
import { Link } from "react-router-dom";
import API from "@common/api.js";
import { apiUrls } from "@constants/apiUrls.js";
import { useSelector } from "react-redux";
import { breedsSelector } from "@store/breeds/breeds.selectors.js";
import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import PageControls from "@components/shared/PageControls/PageControls.jsx";
import LoaderContainer from "@components/shared/Loader/LoaderContainer/LoaderContainer.jsx";
import Grid from "@components/shared/Grid/Grid.jsx";
import Card from "@components/shared/Card/Card.jsx";
import routes from "@constants/routes.js";
import Select from "@components/shared/Select/Select/Select.jsx";
import EmptyState from "@components/shared/EmptyState/EmptyState.jsx";
import SquareButton from "@components/shared/SquareButton/SquareButton.jsx";
import icons from "@components/shared/Icon/icons.js";
import "./GalleryPageContent.scss";

const DEFAULT_LIMIT = {
  label: "Limit: 5",
  value: 5
};

const DEFAULT_ORDER = {
  label: "Random",
  value: "RANDOM"
};

const DEFAULT_BREED = { value: "", label: "All breeds" };

const orders = [
  {
    label: "Random",
    value: "RANDOM"
  },
  {
    label: "Ascending",
    value: "ASC"
  },
  {
    label: "Descending",
    value: "DESC"
  }
];

const limits = [
  {
    label: "Limit: 5",
    value: 5
  },
  {
    label: "Limit: 15",
    value: 15
  },
  {
    label: "Limit: 45",
    value: 45
  },
  {
    label: "Limit: 80",
    value: 80
  },
  {
    label: "Limit: 100",
    value: 100
  }
];

function BreedsPageContent() {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [selectedBreed, setSelectedBreed] = useState(DEFAULT_BREED);
  const [order, setOrder] = useState(DEFAULT_ORDER);
  const [catsList, setCatsList] = useState(null);
  const [isCatsLoading, setCatsLoading] = useState(false);
  const breeds = useSelector(breedsSelector);

  let updatedBreeds = [];

  function addExtraItem(item, arr) {
    const arrCopy = arr.slice();
    arrCopy.unshift(item);
    return arrCopy;
  }

  if (breeds) {
    updatedBreeds = addExtraItem(DEFAULT_BREED, breeds);
  }

  const getCats = async () => {
    try {
      setCatsList(null);
      setCatsLoading(true);
      const response = await API.get(
        `${apiUrls.searchImages}?limit=${limit?.value}&breed_ids=${selectedBreed?.value}&order=${order.value}&has_breeds=1`
      );
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
  }, [limit, selectedBreed, order]);

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
    <section className="gallery-page page">
      <div className="gallery-page__container page__container">
        <ActionsLine />
        <div className="gallery-page__content page__content">
          <PageControls pageTitle="Gallery" />

          <div className="gallery-page__filters">
            <div className="select__wrapper">
              <p className="select__label">Limit</p>
              <Select options={limits} onChange={(option) => setLimit(option)} value={limit} />
            </div>
            <div className="select__wrapper">
              <p className="select__label">Order</p>
              <Select options={orders} onChange={(option) => setOrder(option)} value={order} />
            </div>

            <div className="select__wrapper">
              <p className="select__label">Breed</p>
              <Select
                options={updatedBreeds}
                onChange={(option) => setSelectedBreed(option)}
                value={selectedBreed}
              />
            </div>
            <SquareButton
              className={"gallery-page__reload-btn"}
              onClick={getCats}
              symbol={icons.reload}
              size="small"
              classType="secondary"
            />
          </div>

          {!catsList && isCatsLoading && <LoaderContainer className="u-flex-grow-1" />}
          {catsList && catsList.length === 0 && <EmptyState />}
          {catsList && catsList.length > 0 && (
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
