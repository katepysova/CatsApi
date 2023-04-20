import girlAndPetImg from "@images/girl-and-pet.png";
import Aside from "@components/shared/Aside/Aside.jsx";
import { breakPoints } from "@constants/breakPoints.js";

import useGetWindowSize from "@hooks/useGetWindowSize.js";
import "./HomePageContent.scss";

function HomePageContent() {
  const size = useGetWindowSize();

  const isLarge = size.width >= breakPoints.large;

  return (
    <div className="home-page page">
      {isLarge ? (
        <div className="home-page__container page__container">
          <div className="home-page__content">
            <img src={girlAndPetImg} alt="Girl and pet" />
          </div>
        </div>
      ) : (
        <Aside />
      )}
    </div>
  );
}

export default HomePageContent;
