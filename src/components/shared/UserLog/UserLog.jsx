import PropTypes from "prop-types";
import Icon from "@components/shared/Icon/Icon.jsx";
import icons from "@components/shared/Icon/icons.js";
import cn from "classnames";
import "./UserLog.scss";

const logNames = {
  like: {
    name: "Likes",
    icon: icons.smile
  },
  dislike: {
    name: "Dislikes",
    icon: icons.sad
  },
  fav: {
    name: "Favourites",
    icon: icons.heartOutline
  },
  unFav: {
    name: "Favourites",
    icon: null
  }
};

function UserLog({ actionName, id, time }) {
  return (
    <div className="log">
      <div className="log__time">{time}</div>
      <div className="log__text">
        Image ID: <span>{id}</span> was {actionName === "unFav" ? "removed from" : "added to"}
        &nbsp;{logNames[actionName].name}
      </div>
      {logNames[actionName].icon && (
        <div className={cn("log__icon", `log__icon--${actionName}`)}>
          <Icon symbol={logNames[actionName].icon} size={20} />
        </div>
      )}
    </div>
  );
}

UserLog.propTypes = {
  actionName: PropTypes.oneOf(["like", "fav", "unFav", "dislike"]).isRequired,
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default UserLog;
