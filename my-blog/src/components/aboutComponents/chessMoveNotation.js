import React from 'react';
import { Accordion, Card, Row, Col} from 'react-bootstrap';
import { BookHalf, HandIndex } from 'react-bootstrap-icons'


const ChessMoveNotation = () => {

    return(
        <div style={{border:'1px solid black'}} className="my-4">
            <div className="my-3 mx-3" style={{fontSize:'160%', fontFamily:'Special Elite'}}>
                Chess Moves Notation
            </div>

            <Row style={{padding:'5%',textAlign:'center'}}>
                <Col className="col-2 mx-5">
                    <span >
                        <h1 style={{fontWeight:'600', color:'white', backgroundColor:'red',borderRadius:'20%', padding:'2%'}}>??</h1>
                    </span>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                    <Card style={{border:'1px solid red'}}>
                        <Accordion.Toggle as={Card.Header} eventKey="0" 
                            style={{color:'red',fontWeight:'700',fontFamily:'Special Elite',backgroundColor:'#F7BCAC'}}
                        >
                            Blunder<span className='mx-2'> <HandIndex color='red' size={25}/></span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        The double question mark "??" indicates a blunder, a bad mistake.Typical moves which
                        receive double question marks are those that overlook a tactic that wins substantial material or overlook a checkmate.
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>

            <Row style={{padding:'5%',textAlign:'center'}}>
                <Col className="col-2 mx-5">
                    <span >
                        <h1 style={{fontWeight:'600', color:'white', backgroundColor:'orange',borderRadius:'20%', padding:'2%'}}>?</h1>
                    </span>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                    <Card style={{border:'1px solid orange'}}>
                        <Accordion.Toggle as={Card.Header} eventKey="0" 
                            style={{color:'orange',fontWeight:'700',fontFamily:'Special Elite',backgroundColor:'#F9DB85'}}
                        >
                            Mistake<span className='mx-2'> <HandIndex color='orange' size={25}/></span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        A single question mark "?" after a move indicates that the annotator thinks
                        that the move is a poor one and that it should not have been played.Mistakes often lead to loss of tempo or material. 
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>

            <Row style={{padding:'5%',textAlign:'center'}}>
                <Col className="col-2 mx-5">
                    <span >
                        <h1 style={{fontWeight:'600', color:'white', backgroundColor:'#FFD100',borderRadius:'20%', padding:'2%'}}>?!</h1>
                    </span>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                    <Card style={{border:'1px solid #FFD100'}}>
                        <Accordion.Toggle as={Card.Header} eventKey="0" 
                            style={{color:'#FFD100',fontWeight:'700',fontFamily:'Special Elite',backgroundColor:'#F7EFB2'}}
                            >
                        Dubious Move <span className="mx-2"><HandIndex color='#FFD100' size={25}/></span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        This symbol is similar to the "!?" (below) 
                        but usually indicates that the annotator believes the move to be dubious,questionable but possibly having merits.
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>
            
            <Row style={{padding:'5%',textAlign:'center'}}>
                <Col className="col-2 mx-5">
                    <span >
                        <h1 style={{fontWeight:'600', color:'white', backgroundColor:'#B67C52',borderRadius:'20%', padding:'2%'}}>
                            <BookHalf color='white' size={30} />
                        </h1>
                    </span>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                    <Card style={{border:'1px solid #B67C52'}}>
                        <Accordion.Toggle as={Card.Header} eventKey="0" 
                            style={{color:'#B67C52',fontWeight:'700',fontFamily:'Special Elite',backgroundColor:'#E3C4AF'}}
                        >
                        Book Move <span className='mx-2'> <HandIndex color='#B67C52' size={25}/></span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        The 'Book move' is simple to explain. It is generally the various moves played to the start of games
                        which shows the opening mentioned in any Chess Book like Ruy Lopez, Queen's Gambit etc.
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>

            <Row style={{padding:'5%',textAlign:'center'}}>
                <Col className="col-2 mx-5">
                    <span >
                        <h1 style={{fontWeight:'600', color:'white', backgroundColor:'#67B41A',borderRadius:'20%', padding:'2%'}}>!</h1>
                    </span>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0" >
                    <Card style={{border:'1px solid #67B41A'}}>
                        <Accordion.Toggle as={Card.Header} eventKey="0" 
                            style={{color:'#67B41A',fontWeight:'700',fontFamily:'Special Elite',backgroundColor:'#C7E7B5'}}
                        >
                        Good Move <span className='mx-2'> <HandIndex color='#67B41A' size={25}/></span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        While question marks indicate bad moves, exclamation points ("!") indicate good moves
                        —especially ones which are surprising or involve particular skill. The symbol may also be interpreted as "best move". Annotators are usually somewhat conservative with the use of this symbol.
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>
            
            <Row style={{padding:'5%',textAlign:'center'}}>
                <Col className="col-2 mx-5">
                    <span >
                        <h1 style={{fontWeight:'600', color:'white', backgroundColor:'green',borderRadius:'20%', padding:'2%'}}>!?</h1>
                    </span>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0" >
                    <Card style={{border:'1px solid green'}}>
                        <Accordion.Toggle as={Card.Header} eventKey="0" 
                            style={{color:'green',fontWeight:'700',fontFamily:'Special Elite',backgroundColor:'#A1CF9C'}}
                         >
                        Excellent Move <span className='mx-2'> <HandIndex color='green' size={25}/></span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        The "!?" is one of the more controversial symbols. Different books have slightly varying definitions. Among the definitions 
                        are "interesting, but perhaps not the best move", "move deserving attention", "enterprising move" and "risky move"
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>

            <Row style={{padding:'5%',textAlign:'center'}}>
                <Col className="col-2 mx-5">
                    <span >
                        <h1 style={{fontWeight:'600', color:'white', backgroundColor:'#00A492',borderRadius:'20%', padding:'2%'}}>!!</h1>
                    </span>
                </Col>
                <Col>
                    <Accordion defaultActiveKey="0">
                    <Card style={{border:'1px solid #00A492'}}>
                        <Accordion.Toggle as={Card.Header} eventKey="0"  
                            style={{color:'#00A492',fontWeight:'700',fontFamily:'Special Elite',backgroundColor:'#B9E6E1'}}
                        >
                        Brilliant Move <span className='mx-2'> <HandIndex color='#00A492' size={25}/></span>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        The double exclamation point ("!!") is used for very strong moves such as 
                        sound sacrifices of large amounts of material and counter-intuitive moves that prove very powerful. 
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
                </Col>
            </Row>
        </div>
    )
}

export default ChessMoveNotation;