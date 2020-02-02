import React from "react";

import Room from "./Room";

const RoomList = ({ rooms }) => {
  return (
    <>
      {rooms.length !== 0 ? (
        <section className="roomslist">
          <div className="roomslist-center">
            {rooms.map(room => (
              <Room key={room.id} room={room} />
            ))}
          </div>
        </section>
      ) : (
        <div className="empty-search">
          <h3>unfortunately no rooms matched your search parameters</h3>
        </div>
      )}
    </>
  );
};

export default RoomList;
