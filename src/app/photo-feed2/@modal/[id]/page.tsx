import Modal from "@/components/modal";
import Image from "next/image";
import React from "react";
import wondersImgs, { wonderImg } from "../../wonders";

const page = ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const photoImg: wonderImg = wondersImgs.find((img) => img.id === id)!;
  return (
    <Modal>
      <Image src={photoImg?.src} alt={photoImg?.name} />
      <h3>{photoImg.name}</h3>
      <h3>{photoImg.location}</h3>
    </Modal>
  );
};

export default page;
