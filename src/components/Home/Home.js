import React, { useEffect, useState } from "react";
import "./Home.css";
import heroImg from "../../images/1.jpg";
import Review from "../Review/Review";
import { Link } from "react-router-dom";
const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("review.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
        
    },[]);
    return (
        <div className="container">
            <div className="hero-section row mt-4">
                <div className="col-md-8">
                    <h1>Your Best Phone</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Cumque fuga temporibus recusandae, facere nostrum
                        pariatur asperiores quia nam sequi ipsam odit earum
                        voluptates suscipit similique soluta magni quae a
                        dolorem dolore eum atque.
                    </p>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={heroImg} alt="" />
                </div>
            </div>
            <div className="review-section my-5">
                <h2 className="mb-5">Customers Review</h2>
                <div className="review-container row">
                    {reviews.map((review) => (
                        <Review key={review.id} review={review}></Review>
                    ))}
                </div>
                <div className="review-btn">
                    <Link to="/reviews">See All Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
