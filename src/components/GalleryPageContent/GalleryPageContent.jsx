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
import Modal from "@components/shared/Modal/Modal.jsx";
import Button from "@components/shared/Button/Button.jsx";
import DragAndDropFile from "@components/shared/DragAndDropFile/DragAndDropFile.jsx";
import {
  DEFAULT_BREED,
  DEFAULT_LIMIT,
  DEFAULT_ORDER,
  ORDER_OPTIONS,
  LIMIT_OPTIONS
} from "./options.js";
import "./GalleryPageContent.scss";

function BreedsPageContent() {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [selectedBreed, setSelectedBreed] = useState(DEFAULT_BREED);
  const [order, setOrder] = useState(DEFAULT_ORDER);
  const [catsList, setCatsList] = useState(null);
  const [isCatsLoading, setCatsLoading] = useState(false);
  const breeds = useSelector(breedsSelector);

  const [, setFile] = useState("");

  const [isModalOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen((state) => !state);
  };

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
          <PageControls pageTitle="Gallery">
            <Button
              classType="secondary"
              type="button"
              onClick={toggleOpen}
              text="Upload"
              icon={icons.upload}
            />
          </PageControls>

          <div className="gallery-page__filters">
            <div className="select__wrapper">
              <p className="select__label">Limit</p>
              <Select
                options={LIMIT_OPTIONS}
                onChange={(option) => setLimit(option)}
                value={limit}
              />
            </div>
            <div className="select__wrapper">
              <p className="select__label">Order</p>
              <Select
                options={ORDER_OPTIONS}
                onChange={(option) => setOrder(option)}
                value={order}
              />
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
              className="gallery-page__reload-btn"
              onClick={getCats}
              symbol={icons.reload}
              size="small"
              classType="secondary"
              type="button"
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
      <Modal isOpen={isModalOpen} handleClose={toggleOpen}>
        <form className="upload-form">
          <h2 className="upload-form__title u-center">Upload a .jpg or .png Cat Image</h2>
          <p className="upload-form__text u-center">
            Any uploads must comply with the&nbsp;
            <a className="upload-form__link" href="https://www.thecatapi.com/privacy">
              upload guidelines
            </a>
            &nbsp;or face deletion.
          </p>
          <DragAndDropFile handleFileUpdate={(newFile) => setFile(newFile)} />
        </form>
      </Modal>
    </section>
  );
}

export default BreedsPageContent;
