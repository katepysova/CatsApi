import React, { useContext } from "react";
import PropTypes from "prop-types";
import Aside from "@components/shared/Aside/Aside.jsx";
import cn from "classnames";
import { ThemeContext } from "@providers/ThemeProvider.jsx";
import Header from "@components/shared/Header/Header.jsx";
import { breakPoints } from "@constants/breakPoints.js";
import useGetWindowSize from "@hooks/useGetWindowSize.js";
import "./MainLayout.scss";

function MainLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  const size = useGetWindowSize();

  const isLarge = size.width >= breakPoints.large;

  return (
    <div className={cn("wrapper", theme)}>
      <div className="wrapper__container">
        {isLarge && <Aside />}
        <div className="general">
          {!isLarge && <Header className="u-padded" />}
          <main className="main">{children}</main>
        </div>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
  withFooter: PropTypes.bool
};

export default MainLayout;
