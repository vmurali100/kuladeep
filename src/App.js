import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";

import { connect } from "react-redux";
import { showDrop, collapseAll } from "./actions";

function App({ items }) {
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setSuggestions(items);
  });

  const handleMouseOver = index => {
    dispatch(showDrop(index));
  };
  const handleMouseOut = ele => {
    dispatch(collapseAll(ele));
  };
  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div
      className="container"
      onClick={e => {
        handleMouseOut(e.target);
      }}
    >
      {suggestions.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <Slider {...settings}>
          {suggestions.map((current, index) => (
            <div
              className="out"
              key={current.id}
              onMouseOver={e => {
                handleMouseOver(index);
              }}
              onMouseOut={e => {}}
            >
              <div className="card">
                <img
                  className="rounded-circle"
                  alt={"users here"}
                  src={`https://source.unsplash.com/random/${current.id}`}
                  height={56}
                  width={56}
                />
                <div className="card-body">
                  <h5 className="card-title">{current.username}</h5>
                  <small className="card-text text-sm-center text-muted">
                    In your contacts
                  </small>
                  <h2>{current.isOpen}</h2>
                </div>
              </div>
              {current.isOpen && (
                <div
                  style={{
                    width: "200px",
                    height: "150px",
                    overflow: "scroll"
                  }}
                  className="myDiv"
                >
                  <ul>
                    <li>item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
function mapStateToProps(state) {
  console.log(state);
  return {
    items: state.items
  };
}
export default connect(mapStateToProps, { showDrop })(App);
