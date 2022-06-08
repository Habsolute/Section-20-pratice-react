import { Fragment } from "react/cjs/react.production.min";
import { useParams, Route } from "react-router-dom/cjs/react-router-dom.min";

import Comments from "../components/comments/Comments";

function QuoteDetail() {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
