import ActionsLine from "@components/shared/ActionsLine/ActionsLine.jsx";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes.js";
import "./VotingPageContent.scss";

function VotingPageContent() {
  const navigate = useNavigate();
  const onSearchSuccess = (selectedOption) => {
    navigate(routes.search.path(selectedOption.value));
  };

  return (
    <section className="voting">
      <div className="voting__container">
        <ActionsLine onSearch={onSearchSuccess} />
      </div>
    </section>
  );
}

export default VotingPageContent;
