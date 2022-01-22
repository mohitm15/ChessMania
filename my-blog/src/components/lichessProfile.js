import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Doughnut, Pie } from "react-chartjs-2";
import TitleHeadComponent from "./lichessProfileComponents/titleHead";
import IntroductionComponent from "./lichessProfileComponents/introduction";
import RatingsComponent from "./lichessProfileComponents/ratings";
import PuzzleStatsComponent from "./lichessProfileComponents/puzzleStats";

const LichessProfileComponent = params => {
  const [data, setData] = useState("");
  const [inputData, setInputData] = useState(null);
  const [print, setPrint] = useState(false);

  

  async function lichessProfile(username) {
    try {
      await fetch(`https://lichess.org/api/user/${username}`)
        .then((res) => res.json())
        .then((json) => setData(json));
      setPrint(true);
      params.setProgress(50);
    } catch (e) {
      console.log(e);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => lichessProfile(), []);

  let username = JSON.stringify(data.username);
  let titleOfUser = JSON.stringify(data.title);

  let countryOfUSer = JSON.stringify(data?.profile?.country)?.slice(1, -1);
  let str1 = "http://www.geognos.com/api/en/countries/flag/";
  let str2 = ".png";
  let srcOfFlag = str1.concat(countryOfUSer).concat(str2);

  let seenAt = Date(JSON.stringify(data?.createdAt));
  let followers = JSON.stringify(data.nbFollowing);
  let following = JSON.stringify(data?.nbFollowers);
  let isOnline = JSON.stringify(data?.online);

  let {
    firstName: fName,
    lastName: lName,
    bio: bioOfUser,
  } = data?.profile || {};

  let {
    all: totalGames,
    win: totalWins,
    draw: totalDraws,
    loss: totalLoss,
  } = data?.count || {};

  let userLink = JSON.stringify(data?.url);

  let {
    bullet,
    blitz,
    rapid,
    classical,
    chess960,
    antichess,
    threeCheck,
    storm,
    racer,
  } = data?.perfs || {};

  let { rating: bulletRating, games: bulletGames } = bullet || {};
  let { rating: blitzRating, games: blitzGames } = blitz || {};
  let { rating: rapidRating, games: rapidGames } = rapid || {};
  let { rating: classicalRating, games: classGames } = classical || {};
  let { rating: chess960Rating, games: c960Games } = chess960 || {};
  let { rating: antichessRating, games: antichessGames } = antichess || {};
  let { rating: checkRating, games: threecheckGames } = threeCheck || {};

  let atomicRating = JSON.stringify(data?.perfs?.atomic?.rating);
  let hordeRating = JSON.stringify(data?.perfs?.horde?.rating);

  let ubulletGames = JSON.stringify(data?.perfs?.ultraBullet?.games);
  let crazyGames = JSON.stringify(data?.perfs?.crazyhouse?.games);
  let racingKingGames = JSON.stringify(data?.perfs?.kingOfTheHill?.games);

  let { runs: stormrun, score: stormscore } = storm || {};
  let { runs: racerrun, score: racerscore } = racer || {};
  let puzzleRating = JSON.stringify(data?.perfs?.puzzle?.rating);

  function getData(val) {
    //console.log(val.target.value);
    setInputData(val.target.value);
    setPrint(false);
  }

  const datum = {
    labels: ["Win", "Draw", "Loss"],
    animation: {
      animationScale: true,
    },
    datasets: [
      {
        label: "# of Games",
        data: [totalWins, totalDraws, totalLoss],
        backgroundColor: ["rgb(8, 184, 8)", "blue", "red"],
        borderColor: ["rgb(8, 184, 8)", "blue", "red"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    title: {
      text: "No. of Games",
      display: true,
      responsive: true,
    },
  };

  const datum2 = {
    labels: [
      "Bullet",
      "Blitz",
      "Rapid",
      "Classical",
      "UltraBullet",
      "chess960",
      "Antichess",
      "CrazyHouse",
      "RacingKings",
      "ThreeCheck",
    ],
    animation: {
      animationScale: true,
    },
    datasets: [
      {
        label: "# of Games played in each variant",
        data: [
          bulletGames,
          blitzGames,
          rapidGames,
          classGames,
          ubulletGames,
          c960Games,
          antichessGames,
          crazyGames,
          racingKingGames,
          threecheckGames,
        ],
        backgroundColor: [
          "#011F2C",
          "#003f5c",
          "#2f4b7c",
          "#665191",
          "#a05195",
          "#d45087",
          "#f95d6a",
          "#ff7c43",
          "#ffa600",
          "#FFD65F",
        ],
        borderColor: [
          "#011F2C",
          "#003f5c",
          "#2f4b7c",
          "#665191",
          "#a05195",
          "#d45087",
          "#f95d6a",
          "#ff7c43",
          "#ffa600",
          "#FFD65F",
        ],
        borderWidth: 0,
      },
    ],
  };

  const DisplayWhenUserAbsent = () => {
    return(
      <Alert variant={"light"}>
        <div className="errorText">
          <h2>
            Type Full Name <br /> OR <br /> User Does Not Exists !
          </h2>
        </div>
      </Alert>
    )
  }

  const DisplayWhenUserPresent = () => {
    
    return (
      
      <div className="profileContainer">
      <Container>
        {/* TitleHead */}
        <TitleHeadComponent
          titleOfUser={titleOfUser}
          srcOfFlag={srcOfFlag}
          bioOfUser={bioOfUser}
          seenAt={seenAt}
          username={username}
          followers={followers}
          following={following}
          isOnline={isOnline}
        />

        {/* Introduction */}
        <IntroductionComponent
          fName={fName}
          lName={lName}
          userLink={userLink}
          totalGames={totalGames}
          totalDraws={totalDraws}
          totalWins={totalWins}
          totalLoss={totalLoss}
        />

        {/* Ratings */}
        <RatingsComponent
          bulletRating={bulletRating}
          blitzRating={blitzRating}
          rapidRating={rapidRating}
          classicalRating={classicalRating}
          chess960Rating={chess960Rating}
          antichessRating={antichessRating}
          checkRating={checkRating}
          atomicRating={atomicRating}
          hordeRating={hordeRating}
        />

        {/* Charts */}
        <Alert variant={"success"}>
          <Row>
            <Col className="fullName">Performance</Col>
            <Col className="totalGame">
              {totalGames} :{" "}
              <span style={{ color: "green" }}>{totalWins} </span> /{" "}
              <span style={{ color: "blue" }}>{totalDraws} </span> /{" "}
              <span style={{ color: "red" }}>{totalLoss}</span>
            </Col>
          </Row>
        </Alert>
        <Alert variant={"dark"}>
          <div className="doughNutChart">
            <Doughnut data={datum} options={options} />
            <section style={{ padding: "5%" }}>
              <span id="donutText">Total Games Played</span>
            </section>
          </div>
        </Alert>
        <Alert variant={"dark"}>
          <div className="pieChart">
            <Pie data={datum2} options={options} />
            <section style={{ padding: "5%" }}>
              <span id="donutText">Total Games Played of Each Variant</span>
            </section>
          </div>
          <div className="doughNutChart"></div>
        </Alert>

        {/* Puzzle Stats */}
        <PuzzleStatsComponent
          racerrun={racerrun}
          racerscore={racerscore}
          stormrun={stormrun}
          stormscore={stormscore}
          puzzleRating={puzzleRating}
        />
      </Container>
    </div>

    )
  }


  return (
    <div>
      <div className="searchInput">
        <input
          style={{
            fontFamily: "Unkempt, cursive",
            padding: "3%",
            fontSize: "150%",
            textAlign: "center",
          }}
          type="text"
          onChange={getData}
          placeholder="search..."
        />
      </div>
      <br />
      <div className="searchButton">
        <Button
          style={{ fontSize: "80%", padding: "2%", backgroundColor: "grey" }}
          className="lichess-button"
          onClick={() => lichessProfile(inputData)}
        >
          Get Profile
        </Button>
      </div>
      { print ? <DisplayWhenUserPresent/> : <DisplayWhenUserAbsent/> };
      {/* Here I am displaying the component */}
    </div>
  );
};

export default LichessProfileComponent;
