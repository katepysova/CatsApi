import AsyncSelect from "@components/shared/AsyncSelect/AsyncSelect.jsx";
import Logger from "@common/logger.js";
import API from "@common/api.js";
import debounce from "lodash.debounce";
import { apiUrls } from "@constants/apiUrls.js";
import Grid from "@components/shared/Grid/Grid.jsx";
import { useState } from "react";

function UiKitPage() {
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
    <div style={{ padding: 50, backgroundColor: "#e5e5e5", minHeight: "100vh" }}>
      <Grid items={[1, 2, 3, 4, 5, 6, 6]} renderItem={(item) => <div>{item}</div>} />

      <AsyncSelect
        value={selectedOption}
        onChange={(so) => setSelectedOption(so)}
        loadOptions={loadOptions}
        placeholder={"Search for breeds by name"}
      />
    </div>
  );
}

export default UiKitPage;
