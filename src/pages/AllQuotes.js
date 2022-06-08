import QuoteList from "../components/quotes/QuoteList";

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

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
