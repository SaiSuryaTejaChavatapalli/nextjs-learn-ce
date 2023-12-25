import Image from "next/image";
import wondersImages, { WonderImage } from "@/app/photo-feed/wonders";
import Modal from "@/components/modal";
type PhotoParams = {
  params: {
    photoId: string;
  };
};
const PhotoPage = ({ params: { photoId } }: PhotoParams) => {
  const photo: WonderImage = wondersImages.find(
    (image) => image.id === photoId
  )!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
};

export default PhotoPage;
