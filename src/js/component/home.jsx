import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container p-5">
        <Jumbotron />

        <div className="row row-cols-1 row-cols-md-3 g-4 gap-3 d-flex justify-content-center justify-content-md-between">
          <Card titulo="titulo1" contenido="xxxxxxxxxsaaaaaaaaaaa" />
          <Card titulo="titulo2" contenido="sssssssssssssssssssss" />
          <Card titulo="titulo3" contenido="dddddddddddddddddddd" />
          <Card titulo="titulo4" contenido="sssssssssssssssssssss" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
