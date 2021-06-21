import React from "react";
import { Navbar, Button, Alert } from 'react-bootstrap';

const Header = ({totalScore, totalAnswered, score}) => {
    return (
        <Navbar bg="light" className="fixed-top" expand="lg" style={{"position":"sticky"}}>
            <Navbar.Brand href="#home">Trivia Board</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Brand> 
                    <Button onClick={() => window.location.reload()} disabled={totalAnswered!==16}>Restart</Button>
                </Navbar.Brand>
                <Navbar.Brand style={{color:totalScore<0?"red":"green"}}> 
                    {`Total Score : ${totalScore}`}
                </Navbar.Brand>
            </Navbar.Collapse>
            {totalAnswered===16?
                    totalScore===score?alert("I won!"):alert("I can do better next time")
                :null}
        </Navbar>
        
    );
}

export default Header;