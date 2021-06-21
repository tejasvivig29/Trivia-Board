import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const QuestionDetails = ({item, setShow, setItem, setModalClose, setTotalScore, setTotalAnswered}) => {
    const [isAnswered, setisAnswered] = useState(false);
    const [timer, setMyTimer] = useState(60000);
    const [time, setTime] = useState({
        "minutes":1,
        "seconds":0
      });

    useEffect(() => {
        function updateTimer() {
            setMyTimer(timer => {
            if (timer === 55000){
                if(!item.answered)
                    onFormSubmit();
                clearInterval(timerId);
                return timer
            }
            setTime({
                "minutes":Math.floor((timer - 1000)/ 60000),
                "seconds":(((timer - 1000) % 60000) / 1000).toFixed(0)
            })
            return timer-1000;
            });
        }
        let timerId = setInterval(updateTimer, 1000);
        return () => {
            setMyTimer(60000);
            setTime({
                "minutes":1,
                "seconds":0
            })
            clearInterval(timerId);
        }
    }, [item]);

    if(!item)
        return null;
    function onFormSubmit(e) {
        if(e){
            e.preventDefault();
        }
        item.answered = true;
        setisAnswered(true);
        setModalClose(true);
        var score = item.selected && item.selected.value? +item.score: -+item.score;
        setTotalScore(total => total+score);
        setTotalAnswered(totalAnswered => totalAnswered+1);
    }

    return (
        <Form onSubmit={onFormSubmit}>
      <Form.Group className="mb-3">
        {item.options.map((type, index) => (
            item.answered?
                <Form.Check
                    label={type.key}
                    name="options"
                    type="radio"
                    onChange={e => item.selected=type}
                    value={type.key}
                    id={index}
                    disabled
                    checked={item.answered && item.selected && item.selected.key === type.key}
                />
                :
                <Form.Check
                    label={type.key}
                    name="options"
                    type="radio"
                    onChange={e => item.selected=type}
                    value={type.key}
                    id={index}
                />
        ))}
  </Form.Group>
  {item.answered?<h3>{`Your answer is ${item.selected && item.selected.value?"Correct":"Wrong"}!`}</h3>:
  <div>
      <Button type="submit">Submit</Button>
        <span style={{float:"right"}}>
        {`Time Left: ${time.minutes}:${(time.seconds < 10 ? "0" : "")}${time.seconds}`}
        </span>
      </div>}
  
</Form>
    );
}

export default QuestionDetails;