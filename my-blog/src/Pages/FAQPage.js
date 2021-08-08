import React from 'react';
import LichessProfileComponent from '../components/lichessProfile';

const FAQPage = () => {
    let a=1;
    
    return (
        <>
            <div>
                <h1>Frequently Asked Questions</h1>
                <br />
                
                <hr />
                <section>
                    <div>
                        <h3>{a}. What are Live Ratings?</h3>
                        <p>
                            Live ratings are daily updates of the chess ratings of top players. Usually such ratings are updated within 
                            1 minute of a game finishing, if it is played in a top tournament. 
                            Live Ratings are based on official ratings (FIDE ratings) which are updated once a month.
                        </p>
                    </div>
                    <hr/>
                    <div>
                        <h3>{++a}. Playing vs Computer</h3>
                        <p>
                            You can play a game against our computer at 2700chess.com/play-computer using different levels whose strengths 
                            range from 1400 elo to 2800 elo. Also you can play a training game from any position of your favorite game in 
                            our chess database. But please note, we recommend using a desktop computer when playing vs Computer since it 
                            usually takes less time to process a position, especially at the higher levels.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h3>{++a}. Sometimes I see that the last move in a game is a weird move with the King moving to the center, like Kd4, Ke5, Ke5 or Kd5. Why is that?</h3>
                        <p>
                        It happens when the arbiter puts the King/s into the center after a game finishes. Sometimes this happens before 
                        a result is actually recorded and that's why we can see an odd King move as the last game move.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h3>{++a}. Can you tell me about Chess Leagues?</h3>
                        <p>
                        Chess Leagues are team events inside a country. Sometimes they are played over many months with one round per month, 
                        and take place on a weekend, but sometimes it is played every day like a usual chess tournament. A player is not obligated 
                        to participate in the entire tournament, unlike typical non-team tournaments.
                        </p>
                    </div>
                    <hr />
                </section>
            </div>
            <div>
                <LichessProfileComponent />
            </div>
        </>
    )
};

export default FAQPage;