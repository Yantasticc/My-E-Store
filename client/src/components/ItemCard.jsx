import React from 'react';

const ItemCard = ({ image, name, price }) => {
  return (
    <div className="w-64 h-80 m-4 rounded overflow-hidden shadow-lg">
      <div className="h-40 overflow-hidden">
        <img className="object-cover w-full h-full" src={image} alt={name} />
      </div>
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="font-bold text-xl mt-4">
          ${price}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
