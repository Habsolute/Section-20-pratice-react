import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function QuoteDetail() {
  const params = useParams();

  return (
    <div>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>
    </div>
  );
}

export default QuoteDetail;
