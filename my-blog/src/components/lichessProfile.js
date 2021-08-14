import React, {useState,useEffect} from 'react';
import { Button, Container,Row, Col, Alert} from 'react-bootstrap';
import { Doughnut,Pie } from 'react-chartjs-2';
import TitleHeadComponent from './lichessProfileComponents/titleHead';
import IntroductionComponent from './lichessProfileComponents/introduction';
import RatingsComponent from './lichessProfileComponents/ratings';
import PuzzleStatsComponent from './lichessProfileComponents/puzzleStats';



const LichessProfileComponent = () => {

    const [data,setData] = useState('');
    const [inputData, setInputData] = useState(null);
    const [print,setPrint] = useState(false);


    async function lichessProfile(username) {
        try{
            await fetch(`https://lichess.org/api/user/${username}`)
            .then((res)=>res.json())
            .then((json) => setData(json));
             setPrint(true);
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=> lichessProfile(),[]);

    let username =  JSON.stringify(data.username);
    //console.log("User ka naam : ",username);

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
    let userLink = JSON.stringify(data?.url);

    let blitzRating = JSON.stringify(data?.perfs?.blitz?.rating);
    let bulletRating = JSON.stringify(data?.perfs?.bullet?.rating);
    let rapidRating = JSON.stringify(data?.perfs?.rapid?.rating);
    let classicalRating = JSON.stringify(data?.perfs?.classical?.rating);
    let chess960Rating = JSON.stringify(data?.perfs?.chess960?.rating);
    let antichessRating = JSON.stringify(data?.perfs?.antichess?.rating);
    let checkRating = JSON.stringify(data?.perfs?.threeCheck?.rating);
    let atomicRating = JSON.stringify(data?.perfs?.atomic?.rating);
    let hordeRating = JSON.stringify(data?.perfs?.horde?.rating);

    let bulletGames = JSON.stringify(data?.perfs?.bullet?.games);
    let blitzGames = JSON.stringify(data?.perfs?.blitz?.games);
    let rapidGames = JSON.stringify(data?.perfs?.rapid?.games);
    let classGames = JSON.stringify(data?.perfs?.classical?.games);
    let ubulletGames = JSON.stringify(data?.perfs?.ultraBullet?.games);
    let c960Games = JSON.stringify(data?.perfs?.chess960?.games);
    let antichessGames = JSON.stringify(data?.perfs?.antichess?.games);
    let crazyGames = JSON.stringify(data?.perfs?.crazyhouse?.games);
    let racingKingGames = JSON.stringify(data?.perfs?.kingOfTheHill?.games);
    let threecheckGames = JSON.stringify(data?.perfs?.threeCheck?.games);

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

    const datum2 = {
        labels: ['Bullet','Blitz', 'Rapid', 'Classical','UltraBullet','chess960','Antichess','CrazyHouse','RacingKings','ThreeCheck' ],
        animation:{
            animationScale:true
        },
        datasets: [
            {
              label: '# of Games played in each variant',
              data: [bulletGames, blitzGames, rapidGames, classGames, ubulletGames, c960Games, antichessGames, crazyGames, racingKingGames, threecheckGames],
              backgroundColor: ['#011F2C','#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#FFD65F'],
              borderColor: ['#011F2C','#003f5c','#2f4b7c','#665191','#a05195','#d45087','#f95d6a','#ff7c43','#ffa600','#FFD65F'],
              borderWidth: 0,
            },
          ],
    }

    let showDisplay;
    if(!print ) {
        showDisplay = (
            <Alert variant={'light'}>
                <div className='errorText'>
                    <h2>Type Full Name <br/> OR <br/> User Does Not Exists !</h2>
                </div>
            </Alert>
        )
    }
    else {
        showDisplay = (
            <div className="profileContainer">
                <Container>

                    {/* TitleHead */}
                    <TitleHeadComponent titleOfUser={titleOfUser} srcOfFlag={srcOfFlag} username={username}
                            followers={followers} following={following} isOnline={isOnline} />
                    
                    {/* Introduction */}
                    <IntroductionComponent fName={fName} lName={lName} userLink={userLink} totalGames={totalGames} totalDraws={totalDraws}
                                totalWins={totalWins} totalLoss={totalLoss} />                    

                    
                    {/* Ratings */}
                    <RatingsComponent bulletRating={bulletRating} blitzRating={blitzRating} rapidRating={rapidRating} 
                            classicalRating={classicalRating} chess960Rating={chess960Rating} antichessRating={antichessRating} 
                            checkRating={checkRating} atomicRating={atomicRating} hordeRating={hordeRating}  />

                    {/* Charts */}
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

                    {/* Puzzle Stats */}
                    <PuzzleStatsComponent racerrun={racerrun} racerscore={racerscore} stormrun={stormrun} stormscore={stormscore} puzzleRating={puzzleRating} />

                </Container>
            </div>
        )

    };


    return(
        <div>
            <div className='searchInput'>
                <input style={{fontFamily:'Unkempt, cursive', padding:'3%',fontSize:'150%',textAlign:'center'}} type="text" onChange={getData} placeholder="search..."/>
            </div>       
            <br/>
            <div className='searchButton'>
                <Button style={{fontSize:'80%',padding:'2%',backgroundColor:'grey'}} className="lichess-button" onClick={()=>lichessProfile(inputData)} >Get Profile</Button>
            </div>
            
            {showDisplay};
            {/* Here I am displaying the component */}
        </div>
    )
};

export default LichessProfileComponent;