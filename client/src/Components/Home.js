import React from "react";
import HomePageHero from "./sub-comp/HomepageHero";
import FavPodcast from "./sub-comp/FavPodcast";
function Home() {
  return (
    <div>
      <HomePageHero />
      <div className="row">
        <div className="col-7 body-box shadow text-light ml-5">
          <div className="title col-12 border-bottom">Project-x</div>
          <div className="body mt-3 ml-3">
            <div className="row">
              Live through the stories and journeys we write about. Project-x
              foucuses on the need to preserve, protect, and explore our natural
              world through the power of media. Our team curates vivid stories
              of our Earth, so that all readers can experiance the joys of
              exploration through their computer. In addition, we tackle and
              advocate for cleaner praticies and sustainable resources.
            </div>
          </div>
        </div>
        <div className="col-3 offset-1 mt-3 border-bottom border-top">
          <FavPodcast />
        </div>
      </div>
    </div>
  );
}

export default Home;
