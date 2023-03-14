import React from "react";
import PropTypes from "prop-types";
import Aside from "@components/shared/Aside/Aside.jsx";
import "./MainLayout.scss";

function MainLayout({ children }) {
  return (
    <div className="wrapper">
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
