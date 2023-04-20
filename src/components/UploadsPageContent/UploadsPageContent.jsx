import { useState, useEffect } from "react";
import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import PageControls from "@components/shared/PageControls/PageControls.jsx";
import API from "@common/api.js";
import SquareButton from "@components/shared/SquareButton/SquareButton.jsx";
import Logger from "@common/logger.js";
import icons from "@components/shared/Icon/icons.js";
import EmptyState from "@components/shared/EmptyState/EmptyState.jsx";
import LoaderContainer from "@components/shared/Loader/LoaderContainer/LoaderContainer.jsx";
import Grid from "@components/shared/Grid/Grid.jsx";
import { apiUrls, subId } from "@constants/apiUrls.js";
import Card from "@components/shared/Card/Card.jsx";
import "./UploadsPageContent.scss";

function UploadsPageContent() {
  const [uploadsList, setUploadsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUploads = async () => {
    try {
      setIsLoading(true);
      const response = await API.get(`${apiUrls.getUploads}?sub_id=${subId}&limit=100`);
      const uploads = response.data;
      setUploadsList(uploads);
    } catch (error) {
      Logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeItem = async (item) => {
    try {
      await API.delete(apiUrls.deleteUpload(item.id));
      setUploadsList((list) => list.filter((li) => li.id !== item.id));
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    getUploads();
  }, []);

  const renderCardHover = (item) => {
    return (
      <SquareButton
        onClick={() => removeItem(item)}
        symbol={icons.trash}
        classType="secondary"
        size="small"
        className="card__hover-content card__hover-content--center"
      />
    );
  };

  return (
    <section className="upload-page page">
      <div className="upload-page__container page__container">
        <ActionsLine />
        <div className="upload-page__content page__content">
          <PageControls pageTitle="Uploads" />
          {!uploadsList && isLoading && <LoaderContainer className="u-flex-grow-1" />}
          {uploadsList && uploadsList.length === 0 && <EmptyState />}
          {uploadsList && uploadsList.length > 0 && (
            <Grid
              items={uploadsList}
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

export default UploadsPageContent;
