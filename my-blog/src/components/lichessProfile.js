import React, {useState,useEffect} from 'react';
import { Button, Container,Row, Col, Alert } from 'react-bootstrap';
import CardFlipComponent from './CardFlip';



const LichessProfileComponent = () => {

    const [data,setData] = useState('');
    const [inputData, setInputData] = useState(null);
    const [print,setPrint] = useState(false);
    


    async function lichessProfile(username) {
        await fetch(`https://lichess.org/api/user/${username}`)
        .then((res)=>res.json())
        .then((json) => setData(json));
    }

    useEffect(()=> lichessProfile(),[]);

    let username =  JSON.stringify(data.username);
    let titleOfUser = JSON.stringify(data.title);
    
    let countryOfUSer = JSON.stringify(data?.profile?.country)?.slice(1,-1);
    let str1 = "https://www.countryflags.io/";
    let str2 = "/flat/48.png";
    let srcOfFlag = str1.concat(countryOfUSer).concat(str2);

    let bioOfUser = JSON.stringify(data?.profile?.bio);

    let followers = JSON.stringify(data.nbFollowing);
    let following = JSON.stringify(data?.nbFollowers);
    let isOnline = JSON.stringify(data?.online);

    let fName = JSON.stringify(data?.profile?.firstName);
    let lName = JSON.stringify(data?.profile?.lastName);
    let totalGames = JSON.stringify(data?.count?.all);
    let totalWins = JSON.stringify(data?.count?.win);
    let totalDraws = JSON.stringify(data?.count?.draw);
    let totalLoss = JSON.stringify(data?.count?.loss);

    let blitzRating = JSON.stringify(data?.perfs?.blitz?.rating);
    let bulletRating = JSON.stringify(data?.perfs?.bullet?.rating);
    let rapidRating = JSON.stringify(data?.perfs?.rapid?.rating);
    let classicalRating = JSON.stringify(data?.perfs?.classical?.rating);
    let chess960Rating = JSON.stringify(data?.perfs?.chess960?.rating);
    let antichessRating = JSON.stringify(data?.perfs?.antichess?.rating);
    let racingRating = JSON.stringify(data?.perfs?.racingKings?.rating);
    let atomicRating = JSON.stringify(data?.perfs?.atomic?.rating);
    let hordeRating = JSON.stringify(data?.perfs?.horde?.rating);


    function getData(val) {
        //console.log(val.target.value);
        setInputData(val.target.value);
        setPrint(false);
    };



    return(
        <div>
            <div>
                <input type="text" onChange={getData} placeholder="search..."/>
            </div>       
            <br/>
            <div>
                <Button className="lichess-button" onClick={()=>lichessProfile(inputData)} >Get Profile</Button>
            </div>
            <div className="profileContainer">
                <Container>
                    <Alert variant={'dark'}>
                        <Row>
                            <Col></Col>
                            <Col className='titleOfUser'>{titleOfUser?.slice(1,-1)}</Col>
                        </Row>
                        <Row>
                            <Col><img src={srcOfFlag} alt="" /></Col>
                            <Col className="userName">{username?.slice(1,-1)}</Col>
                        </Row>
                        <Row className="followerRow">
                            <Col>{followers} <br/><b>Following</b></Col>
                            <Col>{following} <br/><b>Followers</b></Col>
                            <Col>{isOnline} <br/><b>Online : </b></Col>
                        </Row>
                    </Alert>
                    <Row>
                        {/* {bioOfUser} */}
                    </Row>
                    <Alert variant={'secondary'}>
                        <Row>
                            <Col className="fullName">{fName?.slice(1,-1)}  {lName?.slice(1,-1)}</Col>
                            <Col className="totalGame">{totalGames} : <span style={{color:'green'}}>{totalWins} </span> / <span style={{color:'blue'}}>{totalDraws} </span> / <span style={{color:'red'}}>{totalLoss}</span></Col>
                        </Row>
                    </Alert>
                    <Alert variant={'success'}>
                        <Row>
                            <Col className="fullName">Performance</Col>
                            <Col className="totalGame">{totalGames} : <span style={{color:'green'}}>{totalWins} </span> / <span style={{color:'blue'}}>{totalDraws} </span> / <span style={{color:'red'}}>{totalLoss}</span></Col>
                        </Row>
                    </Alert>
                    <Alert variant={'success'}>
                        <Row>
                            <Col className="fullName">Ratings</Col>
                            <Col className="totalGame"> <span > {bulletRating} </span> | <span>{blitzRating} </span> | <span>{rapidRating}</span></Col>
                        </Row>
                    </Alert>
                    <Row style={{marginBottom:'1%'}}>
                        <Col>
                            <CardFlipComponent  gameName="Bullet" gameRating={bulletRating} />
                        </Col>
                        <Col>
                            <CardFlipComponent  gameName="Blitz" gameRating={blitzRating} />
                        </Col>
                        <Col>
                            <CardFlipComponent  gameName="Rapid" gameRating={rapidRating} />
                        </Col>
                    </Row>
                    <Row style={{marginTop:'1%',marginBottom:'1%'}}>
                        <Col>
                            <CardFlipComponent  gameName="Classical" gameRating={classicalRating} />
                        </Col>
                        <Col>
                            <CardFlipComponent  gameName="Chess960" gameRating={chess960Rating} />
                        </Col>
                        <Col>
                            <CardFlipComponent  gameName="AntiChess" gameRating={antichessRating} />
                        </Col>
                    </Row>
                    <Row style={{marginTop:'1%'}}>
                        <Col>
                            <CardFlipComponent  gameName="RacingKings" gameRating={racingRating} />
                        </Col>
                        <Col>
                            <CardFlipComponent  gameName="Atomic" gameRating={atomicRating} />
                        </Col>
                        <Col>
                            <CardFlipComponent  gameName="Horde" gameRating={hordeRating} />
                        </Col>
                    </Row>

                    
                    Name : {username} <br/>
                    Blitz rating : {blitzRating} <br/>
                    Bullet rating : {bulletRating} <br/>
                    Rapid rating : {rapidRating} <br/>
                </Container>
            </div>
        </div>
    )
};

export default LichessProfileComponent;