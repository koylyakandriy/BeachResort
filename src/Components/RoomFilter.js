import React, { useContext } from "react";

import Title from "../Components/Title";
import { RoomContext } from "../Context";

const RoomFilter = ({ rooms }) => {
  const {
    loading,
    handleChange,
    values,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    setMinSize,
    setMaxSize,
  } = useContext(RoomContext);

  const getUnique = (items, value) => [
    ...new Set(items.map(item => item[value]))
  ];

  const types = ["all", ...getUnique(rooms, "type")];
  const people = getUnique(rooms, "capacity");

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={values.type}
            className="form-control"
            onChange={handleChange}
          >
            {types.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={values.capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">room price ${values.price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={values.price}
            className="form-control"
            onChange={handleChange}
            step="10"
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="minSize"
              value={minSize}
              className="size-input"
              onChange={({ target }) => setMinSize(target.value)}
            />

            <input
              type="number"
              name="maxSize"
              id="maxSize"
              value={maxSize}
              className="size-input"
              onChange={({ target }) => setMaxSize(target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={values.breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={values.pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RoomFilter;
