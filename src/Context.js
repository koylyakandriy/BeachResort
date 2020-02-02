import React, { useState, useEffect } from "react";

import items from "./data";

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [minPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);

  const [values, setValues] = useState({
    type: "all",
    capacity: 1,
    price: 0
  });

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);

    let maxPrice = Math.max(...rooms.map(room => room.price));
    let maxSize = Math.max(...rooms.map(room => room.size));

    setValues({ ...values, price: maxPrice });

    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false);
    setMaxPrice(maxPrice);
    setMaxSize(maxSize);
  }, []);

  useEffect(() => {
    let tempRooms = [...rooms];
    if (values.type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === values.type);
    }

    if (values.capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= values.capacity);
    }

    tempRooms = tempRooms.filter(room => room.price <= values.price);
    setSortedRooms(tempRooms);
  }, [rooms, values.type, values.capacity, values.price]);

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

  const handleChange = ({ target }) => {
    console.log("target:", target);
    const { name, value, checked, type } = target;
    const isValue = type === "checkbox" ? checked : value;

    setValues({ ...values, [name]: isValue });
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        loading,
        getRoom,
        handleChange,
        values,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export { RoomProvider, RoomContext };
