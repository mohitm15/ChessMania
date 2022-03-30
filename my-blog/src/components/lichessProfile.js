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
      await fetch(`https://lichess.org/api/user/${username || "mohit_maroliya"}`)
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

  const codeToCountry = (code) => {
    let country;
    if (code === 'AF') country = 'afghanistan';
    if (code === 'AX') country = 'aland-islands';
    if (code === 'AL') country = 'albania';
    if (code === 'DZ') country = 'algeria';
    if (code === 'AS') country = 'american Samoa';
    if (code === 'AD') country = 'andorra';
    if (code === 'AO') country = 'angola';
    if (code === 'AI') country = 'anguilla';
    if (code === 'AQ') country = 'antarctica';
    if (code === 'AG') country = 'antigua-and-barbuda';
    if (code === 'AR') country = 'argentina';
    if (code === 'AM') country = 'armenia';
    if (code === 'AW') country = 'aruba';
    if (code === 'AU') country = 'australia';
    if (code === 'AT') country = 'austria';
    if (code === 'AZ') country = 'azerbaijan';
    if (code === 'BS') country = 'bahamas';
    if (code === 'BH') country = 'bahrain';
    if (code === 'BD') country = 'bangladesh';
    if (code === 'BB') country = 'barbados';
    if (code === 'BY') country = 'belarus';
    if (code === 'BE') country = 'belgium';
    if (code === 'BZ') country = 'belize';
    if (code === 'BJ') country = 'benin';
    if (code === 'BM') country = 'bermuda';
    if (code === 'BT') country = 'bhutan';
    if (code === 'BO') country = 'bolivia';
    if (code === 'BA') country = 'bosnia-and-herzegovina';
    if (code === 'BW') country = 'botswana';
    if (code === 'BV') country = 'bouvet-island';
    if (code === 'BR') country = 'brazil';
    if (code === 'VG') country = 'british-virgin-islands';
    if (code === 'BN') country = 'brunei';
    if (code === 'BG') country = 'bulgaria';
    if (code === 'BF') country = 'burkina-faso';
    if (code === 'BI') country = 'burundi';
    if (code === 'KH') country = 'cambodia';
    if (code === 'CM') country = 'cameroon';
    if (code === 'CA') country = 'canada';
    if (code === 'CV') country = 'cape-verde';
    if (code === 'KY') country = 'cayman-islands';
    if (code === 'CF') country = 'central-african-republic';
    if (code === 'TD') country = 'chad';
    if (code === 'CL') country = 'chile';
    if (code === 'CN') country = 'china';
    if (code === 'CX') country = 'christmas-island';
    if (code === 'CC') country = 'cocos-islands';
    if (code === 'CO') country = 'colombia';
    if (code === 'KM') country = 'comoros';
    if (code === 'CD') country = 'congo';
    if (code === 'CG') country = 'congo';
    if (code === 'CK') country = 'cook-islands';
    if (code === 'CR') country = 'costa-rica';
    if (code === 'HR') country = 'croatia';
    if (code === 'CU') country = 'cuba';
    if (code === 'CY') country = 'cyprus';
    if (code === 'CZ') country = 'czech-republic';
    if (code === 'DK') country = 'denmark';
    if (code === 'DJ') country = 'djibouti';
    if (code === 'DM') country = 'dominica';
    if (code === 'DO') country = 'dominican-republic';
    if (code === 'EC') country = 'ecuador';
    if (code === 'EG') country = 'egypt';
    if (code === 'SV') country = 'el-salvador';
    if (code === 'GQ') country = 'equatorial-guinea';
    if (code === 'ER') country = 'eritrea';
    if (code === 'EE') country = 'estonia';
    if (code === 'ET') country = 'ethiopia';
    if (code === 'FO') country = 'faroe-islands';
    if (code === 'FK') country = 'falkland-islands';
    if (code === 'FJ') country = 'fiji';
    if (code === 'FI') country = 'finland';
    if (code === 'FR') country = 'france';
    if (code === 'GF') country = 'french-guiana';
    if (code === 'PF') country = 'french-polynesia';
    if (code === 'GA') country = 'gabon';
    if (code === 'GM') country = 'gambia';
    if (code === 'GE') country = 'georgia';
    if (code === 'DE') country = 'germany';
    if (code === 'GH') country = 'ghana';
    if (code === 'GI') country = 'gibraltar';
    if (code === 'GR') country = 'greece';
    if (code === 'GL') country = 'greenland';
    if (code === 'GD') country = 'grenada';
    if (code === 'GP') country = 'guadeloupe';
    if (code === 'GU') country = 'guam';
    if (code === 'GT') country = 'guatemala';
    if (code === 'GG') country = 'guernsey';
    if (code === 'GN') country = 'guinea';
    if (code === 'GW') country = 'guinea-bissau';
    if (code === 'GY') country = 'guyana';
    if (code === 'HT') country = 'haiti';
    if (code === 'VA') country = 'vatican-city';
    if (code === 'HN') country = 'honduras';
    if (code === 'HK') country = 'hong-kong';
    if (code === 'HU') country = 'hungary';
    if (code === 'IS') country = 'iceland';
    if (code === 'IN') country = 'india';
    if (code === 'ID') country = 'indonesia';
    if (code === 'IR') country = 'iran';
    if (code === 'IQ') country = 'iraq';
    if (code === 'IE') country = 'ireland';
    if (code === 'IM') country = 'isle-of-man';
    if (code === 'IL') country = 'israel';
    if (code === 'IT') country = 'italy';
    if (code === 'JM') country = 'jamaica';
    if (code === 'JP') country = 'japan';
    if (code === 'JE') country = 'jersey';
    if (code === 'JO') country = 'jordan';
    if (code === 'KZ') country = 'jazakhstan';
    if (code === 'KE') country = 'kenya';
    if (code === 'KI') country = 'kiribati';
    if (code === 'KP') country = 'north-korea';
    if (code === 'KR') country = 'south-korea';
    if (code === 'KW') country = 'kuwait';
    if (code === 'KG') country = 'kyrgyzstan';
    if (code === 'LA') country = 'lao';
    if (code === 'LV') country = 'latvia';
    if (code === 'LB') country = 'lebanon';
    if (code === 'LS') country = 'lesotho';
    if (code === 'LR') country = 'liberia';
    if (code === 'LY') country = 'libya';
    if (code === 'LI') country = 'liechtenstein';
    if (code === 'LT') country = 'lithuania';
    if (code === 'LU') country = 'luxembourg';
    if (code === 'MO') country = 'macao';
    if (code === 'MK') country = 'macedonia';
    if (code === 'MG') country = 'madagascar';
    if (code === 'MW') country = 'malawi';
    if (code === 'MY') country = 'malaysia';
    if (code === 'MV') country = 'maldives';
    if (code === 'ML') country = 'mali';
    if (code === 'MT') country = 'malta';
    if (code === 'MH') country = 'marshall-islands';
    if (code === 'MQ') country = 'martinique';
    if (code === 'MR') country = 'mauritania';
    if (code === 'MU') country = 'mauritius';
    if (code === 'YT') country = 'mayotte';
    if (code === 'MX') country = 'mexico';
    if (code === 'FM') country = 'micronesia';
    if (code === 'MD') country = 'moldova';
    if (code === 'MC') country = 'monaco';
    if (code === 'MN') country = 'mongolia';
    if (code === 'ME') country = 'montenegro';
    if (code === 'MS') country = 'montserrat';
    if (code === 'MA') country = 'morocco';
    if (code === 'MZ') country = 'mozambique';
    if (code === 'MM') country = 'myanmar';
    if (code === 'NA') country = 'namibia';
    if (code === 'NR') country = 'nauru';
    if (code === 'NP') country = 'nepal';
    if (code === 'NL') country = 'netherlands';
    if (code === 'NC') country = 'new-caledonia';
    if (code === 'NZ') country = 'new-zealand';
    if (code === 'NI') country = 'nicaragua';
    if (code === 'NE') country = 'niger';
    if (code === 'NG') country = 'nigeria';
    if (code === 'NU') country = 'niue';
    if (code === 'NF') country = 'norfolk-island';
    if (code === 'MP') country = 'northern-mariana-islands';
    if (code === 'NO') country = 'norway';
    if (code === 'OM') country = 'oman';
    if (code === 'PK') country = 'pakistan';
    if (code === 'PW') country = 'palau';
    if (code === 'PS') country = 'palestine';
    if (code === 'PA') country = 'panama';
    if (code === 'PG') country = 'papua-new-guinea';
    if (code === 'PY') country = 'paraguay';
    if (code === 'PE') country = 'peru';
    if (code === 'PH') country = 'philippines';
    if (code === 'PN') country = 'pitcairn-islands';
    if (code === 'PL') country = 'poland';
    if (code === 'PT') country = 'portugal';
    if (code === 'PR') country = 'puerto-rico';
    if (code === 'QA') country = 'qatar';
    if (code === 'RE') country = 'reunion';
    if (code === 'RO') country = 'romania';
    if (code === 'RU') country = 'russia';
    if (code === 'RW') country = 'rwanda';
    if (code === 'BL') country = 'saint-barthelemy';
    if (code === 'SH') country = 'saint-helena';
    if (code === 'KN') country = 'saint-kitts-and-nevis';
    if (code === 'LC') country = 'saint-lucia';
    if (code === 'MF') country = 'saint-martin';
    if (code === 'PM') country = 'saint-pierre-and-miquelon';
    if (code === 'VC') country = 'saint-vincent-and-the-grenadines';
    if (code === 'WS') country = 'samoa';
    if (code === 'SM') country = 'san-marino';
    if (code === 'ST') country = 'Sao Tome and Principe';
    if (code === 'SA') country = 'saudi-arabia';
    if (code === 'SN') country = 'senegal';
    if (code === 'RS') country = 'serbia';
    if (code === 'SC') country = 'seychelles';
    if (code === 'SL') country = 'sierra-leone';
    if (code === 'SG') country = 'singapore';
    if (code === 'SK') country = 'slovakia';
    if (code === 'SI') country = 'slovenia';
    if (code === 'SB') country = 'solomon-islands';
    if (code === 'SO') country = 'somalia';
    if (code === 'ZA') country = 'south-africa';
    if (code === 'GS') country = 'south-georgia';
    if (code === 'ES') country = 'spain';
    if (code === 'LK') country = 'sri-lanka';
    if (code === 'SD') country = 'sudan';
    if (code === 'SR') country = 'suriname';
    if (code === 'SJ') country = 'Svalbard & Jan Mayen-islands';
    if (code === 'SZ') country = 'swaziland';
    if (code === 'SE') country = 'sweden';
    if (code === 'CH') country = 'switzerland';
    if (code === 'SY') country = 'syria';
    if (code === 'TW') country = 'taiwan';
    if (code === 'TJ') country = 'tajikistan';
    if (code === 'TZ') country = 'tanzania';
    if (code === 'TH') country = 'thailand';
    if (code === 'TL') country = 'timor-leste';
    if (code === 'TG') country = 'togo';
    if (code === 'TK') country = 'tokelau';
    if (code === 'TO') country = 'tonga';
    if (code === 'TT') country = 'trinidad-and-tobago';
    if (code === 'TN') country = 'tunisia';
    if (code === 'TR') country = 'turkey';
    if (code === 'TM') country = 'turkmenistan';
    if (code === 'TC') country = 'turks-and-caicos-islands';
    if (code === 'TV') country = 'tuvalu';
    if (code === 'UG') country = 'uganda';
    if (code === 'UA') country = 'ukraine';
    if (code === 'AE') country = 'united-arab-emirates';
    if (code === 'GB') country = 'united-kingdom';
    if (code === 'US') country = 'united-states';
    if (code === 'VI') country = 'united-states-virgin-islands';
    if (code === 'UY') country = 'uruguay';
    if (code === 'UZ') country = 'uzbekistan';
    if (code === 'VU') country = 'vanuatu';
    if (code === 'VE') country = 'venezuela';
    if (code === 'VN') country = 'vietnam';
    if (code === 'WF') country = 'wallis-and-futuna';
    if (code === 'EH') country = 'western-sahara';
    if (code === 'YE') country = 'yemen';
    if (code === 'ZM') country = 'zambia';
    if (code === 'ZW') country = 'zimbabwe';
    return country;
  }

  let str1 = "https://assets.thebasetrip.com/api/v2/countries/flags/";
  let str2 = ".png";
  let srcOfFlag = str1.concat(codeToCountry(countryOfUSer)).concat(str2);

  let seenAt = Date(JSON.stringify(data?.createdAt));
  let followers = JSON.stringify(data.nbFollowing);
  let following = JSON.stringify(data?.nbFollowers);
  let isOnline = JSON.stringify(data?.online);
  console.log("is = "+isOnline)

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

        {/*-introduction */}
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
      {/* Here-i am displaying the component */}
    </div>
  );
};

export default LichessProfileComponent;
