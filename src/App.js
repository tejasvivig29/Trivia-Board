import React from "react";
import { Container } from "react-bootstrap";
import DisplayQuestionCards from "./Components/DisplayQuestionCards";
import { questions } from "./Data/data";
import Header from "./Header/Header";
import QuestionModal from "./Components/QuestionModal";
import { useState } from "react";

function getRandom(arr) {
  var l = [];
  var max = arr.length - 1;
  while (l.length !== 4) {
    var c = Math.floor(Math.random() * max);
    if (!l.includes(c)) l.push(c);
  }
  return l.map((i) => arr[i]);
}

const sports = getRandom(
  questions.filter((question) => question.category === "sports")
);
const science = getRandom(
  questions.filter((question) => question.category === "science")
);
const music = getRandom(
  questions.filter((question) => question.category === "music")
);
const nature = getRandom(
  questions.filter((question) => question.category === "nature")
);
const score = sports
  .concat(science)
  .concat(music)
  .concat(nature)
  .map((el) => +el.score)
  .reduce((a, b) => a + b);
const App = () => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(null);
  const [index, setIndex] = useState(-1);
  const [totalScore, setTotalScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const selectedQuestion = (item, index) => {
    setItem(item);
    setIndex(index);
    setShow(true);
  };
  return (
    <div>
      <Header
        totalScore={totalScore}
        totalAnswered={totalAnswered}
        score={score}
      />
      <br />
      <Container fluid>
        <DisplayQuestionCards
          items={sports}
          color="dark"
          startingIndex={1}
          selectedQuestion={selectedQuestion}
        />
        <DisplayQuestionCards
          items={science}
          color="light"
          startingIndex={5}
          selectedQuestion={selectedQuestion}
        />
        <DisplayQuestionCards
          items={music}
          color="secondary"
          startingIndex={9}
          selectedQuestion={selectedQuestion}
        />
        <DisplayQuestionCards
          items={nature}
          color="info"
          startingIndex={13}
          selectedQuestion={selectedQuestion}
        />
      </Container>
      <QuestionModal
        show={show}
        item={item}
        setShow={setShow}
        setItem={setItem}
        index={index}
        setTotalScore={setTotalScore}
        setTotalAnswered={setTotalAnswered}
      />
    </div>
  );
};

export default App;
