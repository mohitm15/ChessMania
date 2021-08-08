import React, {useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';

const TimeZoneComponent = () => {

    const [data, setData] = useState([]);
    const [city,setCity] = useState('');
    const [printCity, setPrintCity] = useState(false);

    // function getCity(val) {
    //     setCity(val.target.value);
    //     console.log(val.target.value);
    // }

    const clickfn = () =>
    {
        setPrintCity(true);
        if(printCity)
        {
            timeZone(city);
        }
    }


    async function timeZone(city) {
        await fetch(`http://worldtimeapi.org/api/timezone/Asia/${city}`)
        .then((response)=>response.json())
        .then((json)=>{
            //console.log(json);
            setData(json);
        })
    }



    useEffect(()=> {
            timeZone();
    },[])

    let mystr = JSON.stringify(data.datetime);

    console.log("city typed  =  "+city);
    
    const cityToCodeMatcher = (city) => {
        let code;
        if(city === "Kolkata") code='IN';
        else if(city === "Tokyo") code='JP';
        return code;
    }

    const readySRC = (city) => {
        let temp =  "https://www.countryflags.io/".concat(cityToCodeMatcher(city));
        return temp.concat("/shiny/64.png");
    }



    return(
        <>
        <div className="timezone">       
            <div id="timezone-input">
                <label>Type Asian City Here..
                    <br/>
                <input type="text" placeholder=" Type city here.." onChange={(event)=>setCity(event.target.value)}/>
                    <br/>
                <Button className="timezone-button" onClick={()=>clickfn()} >Get Current DateTime</Button>
                </label>
            </div>
            Date: {mystr?.slice(1,11)} <br/>
            Time: {mystr?.slice(12,20)} <br/>
            Timezone: {data.timezone}
            <div>
                <img src={readySRC({city})} alt="Country flag"/>
            </div>
        </div>
        </>
    );
    
}
export default TimeZoneComponent;