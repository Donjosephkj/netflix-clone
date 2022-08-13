import React from "react";
import "./Movie.css";
import play from "../../../src/Icons/play.png";
import addto from "../../../src/Icons/Addto.png";
import YouTube from "react-youtube";


function Movie() {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="container">
      <div className="banner">
        <div className="fade">
          <img
            className="movieposter"
            src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:600/h:889/q:75/https://bleedingcool.com/wp-content/uploads/2022/05/FTe6Z_MVEAArAVK-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="middle">
        <h6 className="title1">Movie Name</h6>
        <div className="buttonrow">
          <button className="genre-buttons">genre</button>
          <button className="genre-buttons">genre</button>
          <button className="genre-buttons">genre</button>
        </div>
        <p className="durationreleaserating">
          Duration | Release Date | Rating
        </p>
        <div className="playbuttons">
          <button className="play">
            <img src={play} alt="" className="icon" />
            &emsp;Play
          </button>
          <button className="play">
            <img src={addto} alt="" className="icon" />
            &emsp;Add To
          </button>
        </div>
        <div className="overview">
          <h3 className="overviewtitle">OverView</h3>
          <p className="overviewcontent">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <h3 className="overviewtitle">Trailer</h3>
          <YouTube opts={opts} />
          <h3 className="overviewtitle">Cast</h3>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/220px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg"
            alt=""
            className="castimage"
          />
          <h4 className="actorname">Chris Hemsworth</h4>
          <p className="charactername">Thor Odinson</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
