import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Up Coming" fetchUrl={requests.requestUpcoming} />
      <Row rowID="2" title="Top Rated" fetchUrl={requests.requestTopRated} />
      <Row
        rowID="3"
        title="Now Playing"
        fetchUrl={requests.requestNowPlaying}
      />
      <Row rowID="4" title="Popular" fetchUrl={requests.requestPopular} />
    </>
  );
};

export default Home;
