import React from "react";
import star from "../assets/cards/star.png";

export default function Card(props) {
  const badgeText = !props.openSpots
    ? "SOLD OUT"
    : props.location === "Online"
    ? "ONLINE"
    : false;

  return (
    <section className="card">
      <img src={props.coverImg.src} alt={props.coverImg.alt}></img>
      <section className="text">
        <section className="status">
          {badgeText && <section className="badge">{badgeText}</section>}
          <img src={star} alt="star icon" className="star"></img>
          <span className="overall-rating">{props.stats.rating} </span>
          <span className="review-count">({props.stats.reviewCount})</span>
          <span className="divider-dot"></span>
          <span className="location">{props.location}</span>
        </section>
        <p className="title">{props.title}</p>
        <p className="pricing">
          <span className="price">From ${props.price}</span> / person
        </p>
      </section>
    </section>
  );
}
