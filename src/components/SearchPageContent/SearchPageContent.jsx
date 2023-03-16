import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import { useEffect, useState } from "react";
import API from "@common/api.js";
import { apiUrls } from "@constants/apiUrls.js";
import Logger from "@common/logger.js";
import { useSearchParams } from "react-router-dom";

import "./SearchPageContent.scss";

function SearchPageContent() {
  const [search, setSearchParams] = useSearchParams({});
  const breedIdParam = search.get("breed_ids");
  const [breed, setBreed] = useState("");
  const [catsList, setCatsList] = useState(null);

  const getCatsByBreedId = async () => {
    try {
      const response = await API.get(`${apiUrls.getCatsByBreedId(breedIdParam)}&limit=100`);
      const list = response.data;
      setCatsList(list);
    } catch (error) {
      Logger.error(error);
    }
  };

  const getBreedById = async () => {
    try {
      const response = await API.get(apiUrls.getBreedByid(breedIdParam));
      const breed = response.data;
      const formattedBreed = { value: breed.id, label: breed.name };
      setBreed(formattedBreed);
    } catch (error) {
      Logger.error(error);
    }
  };

  useEffect(() => {
    if (breedIdParam) {
      getCatsByBreedId();
      getBreedById();
    }
  }, [breedIdParam]);

  return (
    <section className="search-page">
      <div className="search-page__container">
        <ActionsLine
          initialSearchValue={breed}
          onSearch={(value) => {
            setBreed(value);
            setSearchParams({ breed_ids: value.value });
          }}
        />
        {catsList && catsList.length > 0 && (
          <div>
            {catsList.map((item) => (
              <img width={200} src={item.url} alt="cat" key={item.url} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SearchPageContent;
