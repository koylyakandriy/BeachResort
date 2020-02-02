import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import defaultBcg from "../images/room-1.jpeg";
import { RoomContext } from "../Context";
import Banner from "../Components/Banner";
import StyledHero from "../Components/StyledHero";

const SingleRoom = ({ match }) => {
  const { loading, getRoom } = useContext(RoomContext);
  const [slug] = useState(match.params.slug);
  const [background] = useState(defaultBcg);

  const room = !loading && getRoom(slug);

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfest,
    pets,
    images
  } = room;

  return (
    <>
      {!room ? (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      ) : !loading ? (
        <>
          <StyledHero img={images[0] || background}>
            <Banner title={`${name} room`}>
              <Link to="/rooms" className="btn-primary">
                back to rooms
              </Link>
            </Banner>
          </StyledHero>
          <section className="single-room">
            <div className="single-room-images">
              {images.map((item, index) => (
                <img key={index} src={item} alt={name} />
              ))}
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
              </article>
              <article className="info">
                <h3>info</h3>
                <h6>price: ${price}</h6>
                <h6>size: {size} SQFT</h6>
                <h6>
                  max capacity:{" "}
                  {capacity >= 1 ? `${capacity} people` : `${capacity} person`}
                </h6>
                <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                <h6>{breakfest && "free breakfast included"}</h6>
              </article>
            </div>
          </section>
          <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
              {extras.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};

export default SingleRoom;
