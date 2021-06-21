import React, { useState } from 'react';
import { Row, Col, Card, Modal, Button } from 'react-bootstrap';

const DisplayQuestionCards = ({items, color, startingIndex, selectedQuestion}) => 
    {
        return (
        <Row>
            {items.map( (item, index) => {
                if (!item.answered){
                    item.answered = false
                }
                return <Col>
                    <Card
                    bg={color}
                    style={{ width: '20rem', cursor: "pointer"}}
                    text={color === "light"? "dark": "white"}
                    className="mb-3"
                    onClick={() => selectedQuestion(item, index+startingIndex)}
                >
                    <Card.Header>{items[0].category}</Card.Header>
                    <Card.Body className="text-center">
                        <Card.Title>Question {index+startingIndex}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small>Score: {item.score}</small>
                    </Card.Footer>
                    </Card>
                    
                </Col>
            }
            )}
        </Row>
        );
    }

export default DisplayQuestionCards;