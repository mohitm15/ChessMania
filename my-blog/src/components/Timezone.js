import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const TimeZoneComponent = () => {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");
  const [printCity, setPrintCity] = useState(false);

  // function getCity(val) {
  //     setCity(val.target.value);
  //     console.log(val.target.value);
  // }

  const clickfn = () => {
    setPrintCity(true);
    if (printCity) {
      timeZone(city);
    }
  };

  async function timeZone(city) {
    await fetch(`http://worldtimeapi.org/api/timezone/Asia/${city}`)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setData(json);
      });
  }

  useEffect(() => {
    timeZone();
  }, []);

  let mystr = JSON.stringify(data.datetime);

  //console.log("city typed  =  "+city);

  const cityToCodeMatcher = (city) => {
    let code;
    if (city === "Kolkata") code = "IN";
    else if (city === "Almaty") code = "KZ";
    else if (city === "Amman") code = "JO";
    else if (city === "Ashgabat") code = "TM";
    else if (city === "Baghdad") code = "IQ";
    else if (city === "Baku") code = "AZ";
    else if (city === "Bangkok") code = "TH";
    else if (city === "Beirut") code = "LB";
    else if (city === "Bishkek") code = "KG";
    else if (city === "Brunei") code = "BN";
    else if (city === "Damascus") code = "SY";
    else if (city === "Dhaka") code = "BD";
    else if (city === "Dili") code = "TL";
    else if (city === "Dushanbe") code = "TJ";
    else if (city === "Jakarta") code = "ID";
    else if (city === "Jerusalem") code = "IL";
    else if (city === "Kabul") code = "AF";
    else if (city === "Kathmandu") code = "NP";
    else if (city === "Kuala_Lumpur") code = "MY";
    else if (city === "Pyongyang") code = "KP";
    else if (city === "Manila") code = "PH";
    else if (city === "Riyadh") code = "SA";
    else if (city === "Sanghai") code = "CN";
    else if (city === "Seoul") code = "KR";
    else if (city === "Singapore") code = "SG";
    else if (city === "Taipei") code = "TW";
    else if (city === "Tashkent") code = "UZ";
    else if (city === "Tbilisi") code = "GE";
    else if (city === "Tehran") code = "IR";
    else if (city === "Thimphu") code = "BT";
    else if (city === "Tokyo") code = "JP";
    else if (city === "Ulaanbaatar") code = "MN";
    else if (city === "Yerevan") code = "AM";
    else code = "IN";
    return code;
  };

  const readySRC = (city) => {
    let temp = "http://www.geognos.com/api/en/countries/flag/".concat(cityToCodeMatcher(city));
    return temp.concat(".png");
  };

  return (
    <>
      <div className="timezone">
        <div id="timezone-input">
          <label>
            Type Asian City Here..
            <br />
            <input
              type="text"
              placeholder=" Type city here.."
              onChange={(event) => setCity(event.target.value)}
            />
            <br />
            <Button className="timezone-button" onClick={() => clickfn()}>
              Get Current DateTime
            </Button>
          </label>
        </div>
        Date: {mystr?.slice(1, 11)} <br />
        Time: {mystr?.slice(12, 20)} <br />
        Timezone: {data.timezone}
        <div>
          <img src={readySRC(city)} alt="Country flag" />
        </div>
      </div>
    </>
  );
};
export default TimeZoneComponent;
