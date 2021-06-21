import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import QuestionDetails from "./QuestionDetails";

const QuestionModal = ({
  show,
  item,
  setShow,
  setItem,
  index,
  setTotalScore,
  setTotalAnswered,
}) => {
  const [modalClose, setModalClose] = useState(false);

  useEffect(() => {
    setModalClose(false);
  }, [item]);

  return (
    <Modal show={show} onHide={() => setShow(false)} backdrop="static">
      <Modal.Header closeButton={item && item.answered}>
        <Modal.Title>{`Question ${index}: ${
          item && item.question
        }`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QuestionDetails
          setShow={setShow}
          setItem={setItem}
          item={item}
          setModalClose={setModalClose}
          setTotalScore={setTotalScore}
          setTotalAnswered={setTotalAnswered}
        />
      </Modal.Body>
    </Modal>
  );
};

export default QuestionModal;
