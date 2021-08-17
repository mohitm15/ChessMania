import React from 'react';
import FAQdata from '../components/FAQData';

const FAQPage = () => (
        
        <>
            <div>
                <h1>Frequently Asked Questions</h1>
                <br />
                
                <hr />
                
                <section>
                    <>
                        {FAQdata.map((item,key)=> (
                            <div key={key}>
                                <h3>{item.sno}. {item.ques}</h3>
                                <p>{item.ans}</p>
                                <hr/>
                            </div>
                        ))}
                    </>
                </section>
            </div>
        </>
);

export default FAQPage;