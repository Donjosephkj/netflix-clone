import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "../../axios";
import { imageUrl } from "../../constants/constants";
import "./RowPost.css";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((res) => {
        //console.log(res.data)
        setMovies(res.data.results);
      })
      .catch((err) => {
        //alert('network error')
      });
  }, [props.url]);
  const handleMovie = (id) => {
    console.log(id);
    
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          return (
            <div>
              <Link to="/movie">
                <img
                  key={props.key}
                  onClick={() => handleMovie(obj.id)}
                  className={props.isSmall ? "smallposter" : "poster"}
                  src={`${imageUrl + obj.backdrop_path}`}
                  alt=""
                />
              </Link>
            </div>
          );
        })}
      </div>
      
    </div>
    
  );
}

export default RowPost;
