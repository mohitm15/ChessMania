import React, { useEffect } from "react";
import FAQdata from "../components/FAQData";
import GalleryComponent from "../components/Gallery";

const FAQPage = () => {
  useEffect(() => {
    document.title = "ChessMania - FAQ";
  }, []);

  return (
    <>
      <div>
        <h1 className='topheading'>Frequently Asked Questions</h1>
        <br />

        <hr />

        <section>
          <>
            {FAQdata.map((item, key) => (
              <div key={key}>
                <h3>
                  {item.sno}. {item.ques}
                </h3>
                <p>{item.ans}</p>
                <hr />
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
};

export default FAQPage;
