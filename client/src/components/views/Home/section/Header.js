import React from "react";


const Header = () => {
  return (
    <div className="banner">
    
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Yusuf Meherally Centre</h3>
            <h1>Non-Profit Organization</h1>
            <p>
            Yusuf Meherally Centre (YMC) was started in 1962 as a voluntary non-profit organization to commemorate the life and philosophical values of late Shri Yusuf Meherally, 
            who was at the forefront of India’s struggle for independence.
            </p>
            <div className="banner__btn">
              <a href="https://razorpay.com/payment-button/pl_H6hURmbnqyT0ut/view/?utm_source=payment_button&utm_medium=button&utm_campaign=payment_button" className="btn btn-smart">
                Donate Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
