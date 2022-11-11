import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { FaRegSmileBeam } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

import styled from "styled-components";
const Travel = styled.div`
  .review_cont {
    background: #fff;
    border-radius: 12px;
    padding: 22px 14px;
    margin-top: 20px;
  }

  .review {
    display: flex;
    gap: 30px;
  }

  .left {
    width: 27%;
  }

  .right {
    width: 72%;
  }

  .first {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 14px;
  }

  .first > h1 {
    font-size: 44px;
    font-weight: normal;
    margin: 0;
  }

  .first small {
    color: #2a6ec1;
  }

  .second {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .count_review {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .count_review > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .third {
    margin-top: 45px;
    display: grid;
    grid-template-columns: 49% 49%;
    grid-template-rows: 70px 70px;
    gap: 2%;
  }

  .third p {
    font-size: 13.5px;
  }

  .right,
  .right > div {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .right > div {
    border-bottom: 1px solid #9fa0a1;
    padding: 5px 12px 12px 12px;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .right h3,
  h4 {
    margin: 0px;
  }

  .right > button {
    width: 122px;
    padding: 9px;
    color: #2a6ec1;
    background: #fff;
    border: 1px solid #2a6ec1;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.5px;
  }

  .right > button:hover {
    background: #eaf2fc;
  }
`;

const reviews = [
  {
    user: "Kulwinder",
    date: "28 Aug 2021",
    comment:
      "Disliked: Staff & service, property conditions & facilities, room comfort",
    time: "Stay one night",
    rating: 1,
    likes: 1,
  },
  {
    user: "JOSEPH MICHAEL",
    date: "26 Aug 2021",
    comment:
      "Liked: Cleanliness, staff & service, property conditions & facilities",
    time: "Stay three night",
    rating: 4,
    likes: 3,
  },
  {
    user: "Balachandran",
    date: "18 Aug 2021",
    comment:
      "Liked: Cleanliness, staff & service, amenities, property conditions & facilities",
    time: "Stay two night",
    rating: 4,
    likes: 2,
  },
  {
    user: "Arshaan",
    date: "12 Aug 2021",
    comment:
      "Liked: Cleanliness, property conditions & facilities, room comfort",
    time: "Stay one night",
    rating: 3,
    likes: 2,
  },
  {
    user: "Aditya",
    date: "7 Aug 2021",
    comment: "Disliked: Staff & service",
    time: "Stay one night",
    rating: 2,
    likes: 1,
  },
];

const Review = () => {
  let totalReview = Math.floor(Math.random() * 300 + 299);
  let excellent = Math.floor(totalReview / 2) + 20;
  let good = Math.floor(excellent / 2) - 10;
  let okay = Math.floor(good / 2) + 20;
  let poor = Math.floor(okay / 2) - 10;
  let terrible = Math.floor(poor / 2);

  return (
    <Travel className="review_cont">
      <div className="review">
        <div className="left">
          <div className="first">
            <h1>3.9</h1>
            <div>
              <h3 style={{ margin: "0" }}>Good</h3>
              <small>{totalReview} reviews</small>
            </div>
          </div>
          <div className="second">
            <div className="count_review">
              <div>
                <small>5 - Excellent</small>
                <small style={{ fontWeight: "bold" }}>{excellent}</small>
              </div>
              <ProgressBar
                percent={(excellent / totalReview) * 100}
                filledBackground="navy"
                height="8px"
              />
            </div>
            <div className="count_review">
              <div>
                <small>4 - Good</small>
                <small style={{ fontWeight: "bold" }}>{good}</small>
              </div>
              <ProgressBar
                percent={(good / excellent) * 100}
                filledBackground="navy"
                height="8px"
              />
            </div>
            <div className="count_review">
              <div>
                <small>3 - Okay</small>
                <small style={{ fontWeight: "bold" }}>{okay}</small>
              </div>
              <ProgressBar
                percent={(okay / good) * 100}
                filledBackground="navy"
                height="8px"
              />
            </div>
            <div className="count_review">
              <div>
                <small>2 - Poor</small>
                <small style={{ fontWeight: "bold" }}>{poor}</small>
              </div>
              <ProgressBar
                percent={(poor / good) * 100}
                filledBackground="navy"
                height="8px"
              />
            </div>
            <div className="count_review">
              <div>
                <small>1 - Terrible</small>
                <small style={{ fontWeight: "bold" }}>{terrible}</small>
              </div>
              <ProgressBar
                percent={(terrible / poor) * 100}
                filledBackground="navy"
                height="8px"
              />
            </div>
          </div>
          <div className="third">
            <div>
              <h3>4.6/5</h3>
              <p>Cleanliness</p>
            </div>
            <div>
              <h3>4.6/5</h3>
              <p>Staff & Service</p>
            </div>
            <div>
              <h3>4.6/5</h3>
              <p>Amenities</p>
            </div>
            <div>
              <h3>4.5/5</h3>
              <p>Property conditions & facilities</p>
            </div>
          </div>
        </div>
        <div className="right">
          {reviews.map((review, index) => (
            <div div key={index} className="abc">
              <h3>
                {review.rating}/5{" "}
                {review.rating === 5
                  ? "Excellent"
                  : review.rating === 4
                  ? "Good"
                  : review.rating === 3
                  ? "Okay"
                  : review.rating === 2
                  ? "Poor"
                  : "Terrible"}
              </h3>
              <h4>{review.user}</h4>
              <p style={{ marginTop: "-10px" }}>{review.date}</p>
              <div className="flex">
                {review.rating > 2 ? (
                  <FaRegSmileBeam />
                ) : (
                  <SentimentVeryDissatisfiedIcon style={{ fontSize: "19px" }} />
                )}
                <small>{review.comment}</small>
              </div>
              <small>{review.time}</small>
              <div className="flex" style={{ color: "#2A6EC1" }}>
                <AiFillLike style={{ fontSize: "20px", cursor: "pointer" }} />
                <small>{review.likes}</small>
              </div>
            </div>
          ))}
          <button>See all reviews</button>
        </div>
      </div>
    </Travel>
  );
};

export default Review;
