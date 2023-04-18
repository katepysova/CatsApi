import { useState, useEffect } from "react";
import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import PageControls from "@components/shared/PageControls/PageControls.jsx";
import API from "@common/api.js";
import Logger from "@common/logger.js";
import EmptyState from "@components/shared/EmptyState/EmptyState.jsx";
import LoaderContainer from "@components/shared/Loader/LoaderContainer/LoaderContainer.jsx";
import Grid from "@components/shared/Grid/Grid.jsx";
import { apiUrls, subId } from "@constants/apiUrls.js";
import Card from "@components/shared/Card/Card.jsx";
import SquareButton from "@components/shared/SquareButton/SquareButton.jsx";
import icons from "@components/shared/Icon/icons.js";
import "./FavouritesPageContent.scss";

function FavouritesPageContent() {
  const [favouritesList, setFavouritesList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getFavourites = async () => {
    try {
      setIsLoading(true);
      const response = await API.get(`${apiUrls.favourites}?sub_id=${subId}`);
      const favourites = response.data;
      setFavouritesList(favourites);
    } catch (error) {
      Logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFavourites();
  }, []);

  const removeItem = async (item) => {
    try {
      await API.delete(apiUrls.deleteFavourite(item.id));
      setFavouritesList((list) => list.filter((li) => li.id !== item.id));
    } catch (error) {
      Logger.error(error);
    }
  };

  const renderCardHover = (item) => {
    return (
      <SquareButton
        onClick={() => removeItem(item)}
        symbol={icons.heart}
        classType="secondary"
        size="small"
        className="card__hover-content card__hover-content--center"
      />
    );
  };

  return (
    <section className="favourites-page page">
      <div className="favourites-page__container page__container">
        <ActionsLine />
        <div className="favourites-page__content page__content">
          <PageControls pageTitle="Favourites" />
          {!favouritesList && isLoading && <LoaderContainer className="u-flex-grow-1" />}
          {favouritesList && favouritesList.length === 0 && <EmptyState />}
          {favouritesList && favouritesList.length > 0 && (
            <Grid
              items={favouritesList}
              renderItem={(item) => (
                <Card item={item?.image} withHover renderCardHover={() => renderCardHover(item)} />
              )}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default FavouritesPageContent;
