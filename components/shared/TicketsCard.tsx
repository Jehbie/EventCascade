import React from "react";
import Image from "next/image";

interface TicketCardProps {
  _id: string;
  createdAt: string;
  stripeId: string;
  totalAmount: string;
  event: {
    _id: string;
    title: string;
    description: string;
    location: string;
    imageUrl: string;
    startDateTime: string;
    endDateTime: string;
    price: string;
    isFree: boolean;
    url: string;
    category: string;
    organizer: any;
    createdAt: string;
    __v: number;
  };
  buyer: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  createdAt,
  stripeId,
  event,
  buyer,
}) => {
  const {
    title,
    description,
    location,
    imageUrl,
    startDateTime,
    endDateTime,
    price,
    isFree,
    url,
    category,
    organizer,
  } = event;

  return (
    <div className="bg-white py-10 px-5 rounded-lg shadow-lg overflow-hidden max-w-[600px] sm:max-w-[400px] max-h-[340px] sm:max-h-[600px]">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title || "Event Image"}
          width={500}
          height={200}
          className="w-full object-fill h-64"
        />
      )}
      <div className="p-4">
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
        {description && (
          <p className="text-gray-700 mb-2">
            {" "}
            <span className="font-medium">Description: </span>
            {description}
          </p>
        )}
        {category && (
          <p className="text-gray-700 mb-2">
            {" "}
            <span className="font-medium">Category: </span>
            {category}
          </p>
        )}
        {location && (
          <p className="text-gray-600 mb-2">
            {" "}
            <span className="font-medium">Venue: </span> {location}
          </p>
        )}
        {startDateTime && (
          <p className="text-gray-600 mb-2">
            {" "}
            <span className="font-medium">Start Date: </span>
            {new Date(startDateTime).toLocaleDateString()}{" "}
            {new Date(startDateTime).toLocaleTimeString()}
          </p>
        )}
        {endDateTime && (
          <p className="text-gray-600 mb-2">
            {" "}
            <span className="font-medium">End Date: </span>
            {new Date(endDateTime).toLocaleDateString()}{" "}
            {new Date(endDateTime).toLocaleTimeString()}
          </p>
        )}
        {price && <p className="text-gray-600 mb-2">Price: £{price}</p>}
        {isFree && <p className="text-gray-700 font-bold mb-2">Type: Free</p>}
        {!isFree && <p className="text-gray-700 font-bold mb-2">Type: Paid</p>}
        {/* Uncomment these if you need to show stripeId, buyer, and createdAt */}
        {/* {stripeId && (
          <p className="text-gray-600 mb-2">
            {" "}
            <span className="font-medium">Stripe ID: </span>
            {stripeId}
          </p>
        )}
        {buyer && (
          <p className="text-gray-600 mb-2">
            {" "}
            <span className="font-medium">Buyer: </span>
            {buyer}
          </p>
        )}
        {createdAt && (
          <p className="text-gray-600 mb-2">
            {" "}
            <span className="font-medium">Created At: </span>
            {new Date(createdAt).toLocaleDateString()}{" "}
            {new Date(createdAt).toLocaleTimeString()}
          </p>
        )} */}
      </div>
    </div>
  );
};

export default TicketCard;



