import girlAndPetImg from "@images/girl-and-pet.png";
import "./HomePageContent.scss";

function HomePageContent() {
  return (
    <div className="home-page page">
      <div className="home-page__container page__container">
        <div className="home-page__content">
          <img src={girlAndPetImg} alt="Girl and pet" />
        </div>
      </div>
    </div>
  );
}

export default HomePageContent;
