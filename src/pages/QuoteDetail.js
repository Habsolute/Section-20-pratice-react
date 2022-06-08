import { Fragment } from "react/cjs/react.production.min";
import { useParams, Route } from "react-router-dom/cjs/react-router-dom.min";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

function QuoteDetail() {
  const DUMMY_QUOTES = [
    {
      id: "q1",
      author: "Max",
      text: "Learnig React is hard",
    },
    {
      id: "q2",
      author: "Jean-Marc",
      text: "Hello World",
    },
    {
      id: "q3",
      author: "Jp",
      text: "Have fun",
    },
    {
      id: "q4",
      author: "Tany",
      text: "Just an another person",
    },
  ];
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
}

export default QuoteDetail;
