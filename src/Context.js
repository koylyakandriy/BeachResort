import React, { useState, useEffect } from "react";

import items from "./data";

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);

    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setLoading(false);
  }, []);

  const formatData = items => {
    return items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      return { ...item.fields, images, id };
    });
  };

  const getRoom = slug => {
    let tempRoom = [...rooms];
    return tempRoom.find(room => room.slug === slug);
  };

  return (
    <RoomContext.Provider
      value={{ rooms, sortedRooms, featuredRooms, loading, getRoom }}
    >
      {children}
    </RoomContext.Provider>
    // <RoomContext.Provider value={info}>{children}</RoomContext.Provider>
  );
};

// const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomContext };
