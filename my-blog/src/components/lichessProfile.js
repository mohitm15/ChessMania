import React, {useState,useEffect} from 'react';
import { Button, Container,Row, Col, Alert, Card, ListGroup, ListGroupItem,Badge} from 'react-bootstrap';
import CardFlipComponent from './CardFlip';
import { Doughnut,Pie } from 'react-chartjs-2';
import puzzleImage from '../assets/puzzle.png'
import stormImage from '../assets/storm3.png';
import racerImage from '../assets/racer3.png';



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

    //let bioOfUser = JSON.stringify(data?.profile?.bio);

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
    let checkRating = JSON.stringify(data?.perfs?.threecheck?.rating);
    let atomicRating = JSON.stringify(data?.perfs?.atomic?.rating);
    let hordeRating = JSON.stringify(data?.perfs?.horde?.rating);

    let bulletGames = JSON.stringify(data?.perfs?.bullet?.games);
    let blitzGames = JSON.stringify(data?.perfs?.blitz?.games);
    let rapidGames = JSON.stringify(data?.perfs?.rapid?.games);
    let classGames = JSON.stringify(data?.perfs?.classical?.games);
    let ubulletGames = JSON.stringify(data?.perfs?.ultrabullet?.games);
    let c960Games = JSON.stringify(data?.perfs?.chess960?.games);
    let antichessGames = JSON.stringify(data?.perfs?.antichess?.games);
    let crazyGames = JSON.stringify(data?.perfs?.crazyhouse?.games);
    let racingKingGames = JSON.stringify(data?.perfs?.racingKings?.games);
    let threecheckGames = JSON.stringify(data?.perfs?.threecheck?.games);

    let stormrun = JSON.stringify(data?.perfs?.storm?.runs);
    let stormscore = JSON.stringify(data?.perfs?.storm?.score);
    let racerrun = JSON.stringify(data?.perfs?.racer?.runs);
    let racerscore = JSON.stringify(data?.perfs?.racer?.score);
    let puzzleRating = JSON.stringify(data?.perfs?.puzzle?.rating);

    function getData(val) {
        //console.log(val.target.value);
        setInputData(val.target.value);
        setPrint(false);
    };

        
    const datum = {
        labels: ['Win', 'Draw', 'Loss' ],
        animation:{
            animationScale:true
        },
        datasets: [
          {
            label: '# of Games',
            data: [totalWins, totalDraws, totalLoss],
            backgroundColor: [
              'rgb(8, 184, 8)',
              'blue',
              'red',
            ],
            borderColor: [
              'rgb(8, 184, 8)',
              'blue',
              'red',
            ],
            borderWidth: 0,
          },
        ],
    };
    
    const options = {
        title:{
            text:"No. of Games",
            display: true,
            responsive: true,
        }
    }

    ///

    const datum2 = {
        labels: ['Bullet','Blitz', 'Rapid', 'Classical','UltraBullet','chess960','Antichess','CrazyHouse','RacingKings','ThreeCheck' ],
        animation:{
            animationScale:true
        },
        datasets: [
            {
              label: '# of Games played in each variant',
              data: [bulletGames, blitzGames, rapidGames, classGames, ubulletGames, c960Games, antichessGames, crazyGames, racingKingGames, threecheckGames],
              backgroundColor: ['#013248','#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#FFBD00'],
              borderColor: ['#013248','#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#FFBD00'],
              borderWidth: 0,
            },
          ],
    }

    return(
        <div>
            <div className='searchInput'>
                <input style={{fontFamily:'Unkempt, cursive', padding:'3%',fontSize:'150%',textAlign:'center'}} type="text" onChange={getData} placeholder="search..."/>
            </div>       
            <br/>
            <div className='searchButton'>
                <Button style={{fontSize:'80%',padding:'2%',backgroundColor:'grey'}} className="lichess-button" onClick={()=>lichessProfile(inputData)} >Get Profile</Button>
            </div>
            
            <div className="profileContainer">
                <Container>
                    <Alert variant={'success'}>
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
                            <Col className="fullName">Ratings</Col>
                            <Col className="totalGame"> <span > {bulletRating} </span> | <span>{blitzRating} </span> | <span>{rapidRating}</span></Col>
                        </Row>
                    </Alert>
                    <Alert variant={'dark'}>
                        <div className="d-flex bd-highlight example-parent">
                            <div className="p-2 flex-fill bd-highlight col-example">
                                <CardFlipComponent  gameName="Bullet" gameRating={bulletRating} />
                            </div>
                            <div className="p-2 flex-fill bd-highlight col-example">
                                <CardFlipComponent  gameName="Blitz" gameRating={blitzRating} />
                            </div>
                            <div className="p-2 flex-fill bd-highlight col-example">
                                <CardFlipComponent  gameName="Rapid" gameRating={rapidRating} />
                            </div>
                        </div>
                        <div className="d-flex bd-highlight example-parent">
                            <div className="p-2 flex-fill bd-highlight col-example">
                                <CardFlipComponent  gameName="Classical" gameRating={classicalRating} />
                            </div>
                            <div className="p-2 flex-fill bd-highlight col-example">
                                <CardFlipComponent  gameName="Chess960" gameRating={chess960Rating} />
                            </div>
                            <div className="p-2 flex-fill bd-highlight col-example">
                                <CardFlipComponent  gameName="AntiChess" gameRating={antichessRating} />
                            </div>
                        </div>
                        <div className="d-flex bd-highlight example-parent">
                            <div className="p-2 flex-fill bd-highlight col-example">
                                <CardFlipComponent  gameName="3Check" gameRating={checkRating} />
                            </div>
                            <div className="p-2 flex-fill bd-highlight col-example">
                                <CardFlipComponent  gameName="Atomic" gameRating={atomicRating} />
                            </div>
                            <div className="p-2 flex-fill bd-highlight col-example">
                                <CardFlipComponent  gameName="Horde" gameRating={hordeRating} />
                            </div>
                        </div>
                    </Alert>
                    <Alert variant={'success'}>
                        <Row>
                            <Col className="fullName">Performance</Col>
                            <Col className="totalGame">{totalGames} : <span style={{color:'green'}}>{totalWins} </span> / <span style={{color:'blue'}}>{totalDraws} </span> / <span style={{color:'red'}}>{totalLoss}</span></Col>
                        </Row>
                    </Alert>
                    <Alert variant={'dark'}>
                        <div className="doughNutChart">
                            <Doughnut data={datum} options={options}/>
                            <section style={{padding:'5%'}}>
                                <span id="donutText">Total Games Played</span>
                            </section>
                        </div>
                    </Alert>
                    <Alert variant={'dark'}>
                        <div className="pieChart">
                            <Pie data={datum2} options={options}/>
                            <section style={{padding:'5%'}}>
                                <span id="donutText">Total Games Played of Each Variant</span>
                            </section>
                        </div>
                        <div className="doughNutChart">

                        </div>
                    </Alert>
                    <Alert variant={'success'}>
                        <Row>
                            <Col className="fullName">Puzzle Stats</Col>
                        </Row>
                    </Alert>

                    <Alert variant={'dark'}>
                        <div>
                            <Row>
                                <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={puzzleImage} />
                                    <Card.Img variant="bottom" src={racerImage} />
                                    <Card.Body>
                                        <Card.Title>How to Play?</Card.Title>
                                        <Card.Text>
                                            Each correct move earns one point. The goal is to get as many points as you can within 90 seconds. 
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem><b>Run</b> : {racerrun}</ListGroupItem>
                                        <ListGroupItem><b>Score</b> : {racerscore}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="https://lichess.org/page/racer">See More</Card.Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={puzzleImage} />
                                    <Card.Img variant="bottom" src={stormImage}/>
                                    <Card.Body>
                                        <Card.Title>How to Play?</Card.Title>
                                        <Card.Text>
                                            Each puzzle grants one point. The goal is to get as many points as you can before the time runs out.
                                        </Card.Text>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem><b>Run</b> : {stormrun}</ListGroupItem>
                                        <ListGroupItem><b>Score</b> : {stormscore}</ListGroupItem>
                                    </ListGroup>
                                    <Card.Body>
                                        <Card.Link href="https://lichess.org/page/storm">See More</Card.Link>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <div className='puzzleStreak'>
                                    Puzzle Rating : &nbsp;
                                    <Badge bg='info'>{puzzleRating}</Badge>
                                </div>
                            </Row>
                        </div>
                    </Alert>
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