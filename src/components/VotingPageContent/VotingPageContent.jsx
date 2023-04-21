import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import PageControls from "@components/shared/PageControls/PageControls.jsx";
import { useEffect, useState } from "react";
import API from "@common/api.js";
import UserLog from "@components/shared/UserLog/UserLog.jsx";
import UserActions from "./UserActions/UserActions.jsx";
import LoaderContainer from "@components/shared/Loader/LoaderContainer/LoaderContainer.jsx";
import { apiUrls, subId } from "@constants/apiUrls.js";
import Logger from "@common/logger.js";
import moment from "moment";
import { timeFormat } from "@constants/constants.js";
import "./VotingPageContent.scss";

function VotingPageContent() {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavLoading, setIsFavLoading] = useState(false);
  const [logs, setLogs] = useState([]);

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
      const body = { image_id: image.id, value, sub_id: subId };
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
        image_id: image.id,
        sub_id: subId
      };
      setIsFavLoading(true);
      if (image.fav_id) {
        await API.delete(apiUrls.deleteFavourite(image.fav_id));
        setImage((image) => ({ ...image, fav_id: null }));
        setLogs((oldLogs) => [
          ...oldLogs,
          {
            id: image.id,
            actionName: "unFav",
            time: moment().format(timeFormat)
          }
        ]);
      } else {
        const response = await API.post(apiUrls.favourites, body);
        const data = response.data;
        setImage((image) => ({ ...image, fav_id: data.id }));
        setLogs((oldLogs) => [
          ...oldLogs,
          {
            id: image.id,
            actionName: "fav",
            time: moment().format(timeFormat)
          }
        ]);
      }
    } catch (error) {
      Logger.error(error);
    } finally {
      setIsFavLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => getImage(), 0);
  }, []);

  return (
    <section className="voting-page page">
      <div className="voting-page__container page__container">
        <ActionsLine />
        <div className="voting-page__content page__content">
          <PageControls pageTitle="Voting" />
          <div className="voting-page__image">
            {isLoading && !image && <LoaderContainer className={"voting-page__loader"} />}
            {!isLoading && image && (
              <>
                <figure className="voting-page__image-container">
                  <img src={image && image.url} alt="cat" />
                </figure>
                <UserActions
                  isFavLoading={isFavLoading}
                  onFavClick={onFavClick}
                  onLikeClick={() => {
                    onVoteClick(1);
                    setLogs((oldLogs) => [
                      ...oldLogs,
                      {
                        id: image.id,
                        actionName: "like",
                        time: moment().format(timeFormat)
                      }
                    ]);
                  }}
                  onDislikeClick={() => {
                    onVoteClick(-1);
                    setLogs((oldLogs) => [
                      ...oldLogs,
                      {
                        id: image.id,
                        actionName: "dislike",
                        time: moment().format(timeFormat)
                      }
                    ]);
                  }}
                  className={"voting-page__image-controls"}
                />
              </>
            )}
          </div>
          {logs && logs.length > 0 && (
            <div className="voting-page__logs">
              {logs
                .slice()
                .reverse()
                .map((log, index) => (
                  <UserLog key={index} {...log} />
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VotingPageContent;
