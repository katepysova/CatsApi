import AsyncSelect from "@components/shared/AsyncSelect/AsyncSelect.jsx";
import Logger from "@common/logger.js";
import API from "@common/api.js";
import debounce from "lodash.debounce";
import { apiUrls } from "@constants/apiUrls.js";
import { useState } from "react";

function VotingPageContent() {
  const [selectedOption, setSelectedOption] = useState("");

  const mapOptionsToValues = (options) => {
    return options.map((option) => ({
      value: option.id,
      label: option.name
    }));
  };

  const loadOptions = debounce((inputValue, callback) => {
    API.get(apiUrls.breeds)
      .then((response) => response.data)
      .then((breedsData) => {
        const formattedBreeds = mapOptionsToValues(breedsData);
        const filterOptions = (inputValue) => {
          return formattedBreeds.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
          );
        };
        callback(filterOptions(inputValue));
      })
      .catch((error) => Logger.error(error));
  }, 300);

  return (
    <div style={{ padding: 50 }}>
      <AsyncSelect
        value={selectedOption}
        onChange={(so) => setSelectedOption(so)}
        loadOptions={loadOptions}
        placeholder={"Search for breeds by name"}
      />
    </div>
  );
}

export default VotingPageContent;
