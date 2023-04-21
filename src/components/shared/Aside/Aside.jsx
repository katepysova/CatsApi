import Header from "@components/shared/Header/Header.jsx";
import { breakPoints } from "@constants/breakPoints.js";
import useGetWindowSize from "@hooks/useGetWindowSize.js";
import Nav from "./Nav/Nav.jsx";
import "./Aside.scss";

function Aside() {
  const size = useGetWindowSize();

  const isLarge = size.width >= breakPoints.large;

  return (
    <aside className="aside">
      <div className="aside__container">
        {isLarge && <Header />}
        <div className="aside__content">
          <h1 className="aside__title heading-primary">Welcome!!!</h1>
          <p className="aside__welcome">Are you fond of cats?</p>
          <p className="aside__paragraph">Lets start using The Cats API</p>
          <Nav />
        </div>
      </div>
    </aside>
  );
}

export default Aside;
