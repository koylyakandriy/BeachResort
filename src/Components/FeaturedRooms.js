import React, { useContext } from "react";

import { RoomContext } from "../Context";
import Room from "./Room";
import Loading from "./Loaading";
import Title from "./Title";

const FeaturedRooms = () => {
  const { featuredRooms, loading } = useContext(RoomContext);

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {!loading ? (
          featuredRooms.map(room => <Room key={room.id} room={room} />)
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default FeaturedRooms;
