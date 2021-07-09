import React, {useState,useEffect} from 'react';

const TimeZoneComponent = () => {

    const [data, setData] = useState([]);

    const timeZone = () => {
        fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        .then((response)=>response.json())
        .then((json)=>{
            console.log(json);
            setData(json);
        })
    }

    useEffect(()=> {
            timeZone();
    },[])

    let mystr = JSON.stringify(data.datetime);

    return(
        <div className="timezone">       
            Date: {mystr} <br/>
            Time: {mystr} <br/>
            Timezone: {data.timezone}
        </div>
    );
    
}
export default TimeZoneComponent;