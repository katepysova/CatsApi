import { useState, useEffect } from "react";
import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import PageControls from "@components/shared/PageControls/PageControls.jsx";
import API from "@common/api.js";
import Logger from "@common/logger.js";
import EmptyState from "@components/shared/EmptyState/EmptyState.jsx";
import LoaderContainer from "@components/shared/Loader/LoaderContainer/LoaderContainer.jsx";
import Grid from "@components/shared/Grid/Grid.jsx";
import { apiUrls } from "@constants/apiUrls.js";
import Card from "@components/shared/Card/Card.jsx";
import "./DislikesPageContent.scss";

function DislikesPageContent() {
  const [dislikesList, setDislikesList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getDisliked = async () => {
    try {
      setIsLoading(true);
      const response = await API.get(apiUrls.votes);
      const votedImages = response.data;
      const likedImages = votedImages.filter((image) => image.value < 0);
      setDislikesList(likedImages);
    } catch (error) {
      Logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDisliked();
  }, []);

  return (
    <section className="dislike-page page">
      <div className="dislike-page__container page__container">
        <ActionsLine />
        <div className="dislike-page__content page__content">
          <PageControls pageTitle="Dislikes" />
          {!dislikesList && isLoading && <LoaderContainer className="u-flex-grow-1" />}
          {dislikesList && dislikesList.length === 0 && <EmptyState />}
          {dislikesList && dislikesList.length > 0 && (
            <Grid items={dislikesList} renderItem={(item) => <Card item={item?.image} />} />
          )}
        </div>
      </div>
    </section>
  );
}

export default DislikesPageContent;
