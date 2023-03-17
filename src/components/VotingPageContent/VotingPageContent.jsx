import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import PageControls from "@components/shared/PageControls/PageControls.jsx";
import { useEffect, useState } from "react";
import API from "@common/api.js";
import UserActions from "@components/shared/UserActions/UserActions.jsx";
import LoaderContainer from "@components/shared/Loader/LoaderContainer/LoaderContainer.jsx";
import { apiUrls } from "@constants/apiUrls.js";
import Logger from "@common/logger.js";
import "./VotingPageContent.scss";

function VotingPageContent() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getImage = async () => {
    try {
      setIsLoading(true);
      setImage(null);
      const response = await API.get(apiUrls.searchImages);
      const image = response.data[0];
      setImage(image);
    } catch (error) {
      Logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onVoteClick = async (value) => {
    try {
      const body = { image_id: image.id, value };
      setIsLoading(true);
      setImage(null);
      await API.post(apiUrls.votes, body);
      await getImage();
    } catch (error) {
      Logger.error(error);
    }
  };

  const onFavClick = async () => {
    try {
      const body = {
        image_id: image.id
      };
      await API.post(apiUrls.favourites, body);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    setTimeout(() => getImage(), 0);
  }, []);

  return (
    <section className="voting">
      <div className="voting__container">
        <ActionsLine />
        <div className="voting__content">
          <PageControls pageTitle="Voting" />
          <div className="voting__image">
            {isLoading && !image && <LoaderContainer className={"voting__loader"} />}
            {!isLoading && image && (
              <>
                <figure className="voting__image-container">
                  <img src={image && image.url} alt="cat" />
                </figure>
                <UserActions
                  onFavClick={onFavClick}
                  onLikeClick={() => onVoteClick(1)}
                  onDislikeClick={() => onVoteClick(-1)}
                  className={"voting__image-controls"}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VotingPageContent;
