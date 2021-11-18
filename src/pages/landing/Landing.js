import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { enableCorporateTheme } from "../../redux/actions/themeActions";
import NavHomePage from '../../components/NavHomePage';
import BookingInjection from '../../components/BookingInjection';
import Homepage from '../../components/Homepage';
import News from '../../components/News';
import "../../assets/css/pages/Landingpage.css";
import "../../assets/css/components/Homepage.css";
const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableCorporateTheme());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div>
        <div className = "header-container" >
           <NavHomePage/>
        </div>
        <div className="body-container">
          <div className="Carousel">
              <Homepage/>
          </div>
            {/* <BookingInjection/> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default connect()(Landing);
