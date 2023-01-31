
import React, { useState } from "react";


const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
	{isReadMore ? text.slice(0, 150) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};



const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO YMC</h1>
            <p>
            <ReadMore>
            Yusuf Meherally Centre (YMC) was started in 1962 as a voluntary non-profit organization to commemorate the life and philosophical values of late Shri Yusuf Meherally, who was at the forefront of India’s struggle for independence.

In the words of late Dr. Zakir Hussain, the Vice-President of India, who formally inaugurated the Centre in 1966: “It was the primeval sorrow of man, for what men do to each other, knowingly or unknowingly, which moved him and not any idea of a more efficient and more utilitarian organization of industry and economy. This sorrow could have made him a philosopher, a man of religion, or a poet. Yusuf Meherally was more fortunate. It made him into a friend. His gift for friendship struck all who came into contact with him and it made his concern for them something deeply inspiring”. Late Shri Yusuf Meherally, a social leader and ex-Mayor of Mumbai coined the iconic slogan “Quit India” that would dominate the last years of India’s independence movement.
Yusuf Meherally Centre since then has taken several social initiatives in the field of education, health care, women empowerment and rural development, organizing youth, employment generation, environmental protection, re-popularizing the values of freedom movement and providing relief during natural calamities.

YMC believes that rural development should be mainstreamed. YMC also believes that employment generation, especially in rural areas, should be made a people’s movement. And hence YMC exhorts its members/friends/ visitors to Tara etc., to buy some khadi every year, give preference to gramodyog products, use hand-made paper for visiting &amp; greeting cards, eat organic foods, gift Indian handicrafts and contribute resources for rural development.


              </ReadMore>
            </p>
            <div className="about__btn">
              <a href="/about" className="btn btn-smart">
                Explore
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="https://secureservercdn.net/160.153.138.94/x9a.171.myftpupload.com/wp-content/uploads/2021/03/1932441_964077983606213_521449607747527425_n-2-1.jpg" alt="Pizza" />

            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
