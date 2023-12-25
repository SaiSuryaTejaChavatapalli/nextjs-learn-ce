import React from "react";
import wondersImgs, { wonderImg } from "../wonders";
import Image from "next/image";

const Photo = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const photoInfo: wonderImg = wondersImgs.find((img) => img.id === id)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <h2 className="text-center text-3xl font-bold mx-4">
          {photoInfo.name}
        </h2>
        <Image src={photoInfo.src} alt={photoInfo.name} className="" />
        <div className="bg-white py-4">
          <h3>{photoInfo.location}</h3>
          <h3>{photoInfo.photographer}</h3>
        </div>
      </div>
    </div>
  );
};

export default Photo;
