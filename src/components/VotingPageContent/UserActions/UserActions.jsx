import PropTypes from "prop-types";
import Icon from "@components/shared/Icon/Icon.jsx";
import icons from "@components/shared/Icon/icons.js";
import cn from "classnames";

import "./UserActions.scss";

function UserActions({ className, onLikeClick, onFavClick, onDislikeClick, isFavLoading }) {
  const buttons = [
    {
      icon: icons.smile,
      onClick: onLikeClick
    },
    {
      icon: icons.heartOutline,
      onClick: onFavClick
    },
    {
      icon: icons.sad,
      onClick: onDislikeClick
    }
  ];
  return (
    <div className={cn("user-actions", className)}>
      {buttons.map((button, index) => (
        <button
          disabled={isFavLoading}
          className={cn("user-actions__btn")}
          onClick={button.onClick}
          key={index}
        >
          <Icon symbol={button.icon} size={30} />
        </button>
      ))}
    </div>
  );
}

UserActions.propTypes = {
  className: PropTypes.string,
  onLikeClick: PropTypes.func.isRequired,
  onFavClick: PropTypes.func.isRequired,
  onDislikeClick: PropTypes.func.isRequired,
  isFavLoading: PropTypes.bool
};

export default UserActions;
