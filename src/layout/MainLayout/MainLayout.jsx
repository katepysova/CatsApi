import React, { useContext } from "react";
import PropTypes from "prop-types";
import Aside from "@components/shared/Aside/Aside.jsx";
import { breakPoints } from "@constants/breakPoints.js";

import useGetWindowSize from "@hooks/useGetWindowSize.js";
import cn from "classnames";
import { ThemeContext } from "@providers/ThemeProvider.jsx";
import "./MainLayout.scss";

function MainLayout({ children }) {
  const { theme } = useContext(ThemeContext);

  const size = useGetWindowSize();
  const isLarge = size.width >= breakPoints.large;

  return (
    <div className={cn("wrapper", theme)}>
      <div className="wrapper__container">
        {isLarge && (
          <div className="wrapper__aside">
            <Aside />
          </div>
        )}
        <main className="main">{children}</main>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
  withFooter: PropTypes.bool
};

export default MainLayout;
