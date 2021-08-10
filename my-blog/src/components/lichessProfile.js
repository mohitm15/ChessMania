import React, {useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';



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
    let followers = JSON.stringify(data.nbFollowers);

    let blitzData = JSON.stringify(data?.perfs?.blitz);
    let bulletData = JSON.stringify(data?.perfs?.bullet);
    let rapidData = JSON.stringify(data?.perfs?.rapid);


    function getData(val) {
        //console.log(val.target.value);
        setInputData(val.target.value);
        setPrint(false);
    }

    return(
        <div>
            <div>
                <input type="text" onChange={getData} placeholder="search..."/>
            </div>
            <Button className="lichess-button" onClick={()=>lichessProfile(inputData)} >Get Profile</Button>
            <br/>
            Name : {username} <br/>
            No of followers : {followers} <br/>
            Blitz rating : {blitzData} <br/>
            Bullet rating : {bulletData} <br/>
            Rapid rating : {rapidData} <br/>
        </div>
    )
};

export default LichessProfileComponent;