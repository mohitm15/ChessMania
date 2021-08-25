import React from 'react';
import FAQdata from '../components/FAQData';
import GalleryComponent from '../components/Gallery';


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
            <div>
                <GalleryComponent />
            </div>
        </>
);

export default FAQPage;