import React from "react";


import { Container } from "react-bootstrap";                              
import Navigationbar from "./user/Navigationbar";
import Footer from "./Footer";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import SlideShow from "./SlideShow";
import Bannerlast from "./Bannerlast";
import CutPics from "./CutPics";
import LastPage from "./LastPage";


const Home = () => {
  return (
    <div style={{ background: "rgb(230, 230, 219)" }}>
      <Navigationbar />
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Container
          fluid
          className="d-flex align-items-center justify-content-center flex-wrap"
        >
        </Container>
      </div>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <SlideShow/>
      <CutPics/>
      <Bannerlast/>
      <Footer/>
      <LastPage/>
    </div>
  );
};

export default Home;