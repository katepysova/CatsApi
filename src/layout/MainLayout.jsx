import React, { useContext } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Aside from "@components/shared/Aside/Aside.jsx";
import { ThemeContext } from "@providers/ThemeProvider.jsx";
import "./MainLayout.scss";

function MainLayout({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={cn("wrapper", theme)}>
      <Aside />
      <main className="main">{children}</main>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
  withFooter: PropTypes.bool
};

export default MainLayout;
