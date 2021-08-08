import React, {useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';



const LichessProfileComponent = () => {

    const [data,setData] = useState('');


    async function lichessProfile() {
        let res = await fetch(`https://lichess.org/api/user/nihalsarin2004`);
        res = res.json().then((json) => setData(json));
    }

    useEffect(()=> lichessProfile(),[]);

    let username =  JSON.stringify(data.username);
    let Blitz =  JSON.stringify(data.perfs.blitz.rating);
    let Rapid =  JSON.stringify(data.perfs.rapid.rating);
    let Bullet =  JSON.stringify(data.perfs.bullet.rating);

    return(
        <div>
            <Button className="lichess-button" onClick={()=>lichessProfile()} >Get Profile of Nihal Sarin</Button>
            <br/>
            Name : {username}
            Bullet rating : {Bullet}
            Blitz rating :{Blitz}
            Rapid rating : {Rapid}

        </div>
    )
};

export default LichessProfileComponent;