import React, { useContext } from "react";

import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loaading";
import { RoomContext } from "../Context";

const RoomContainer = () => {
  const { loading, rooms, sortedRooms } = useContext(RoomContext);

  return (
    <>
      {!loading ? (
        <>
          <RoomFilter rooms={rooms} />
          <RoomList rooms={sortedRooms} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default RoomContainer;
