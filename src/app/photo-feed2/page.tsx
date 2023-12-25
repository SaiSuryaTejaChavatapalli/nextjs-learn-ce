import Image from "next/image";
import wondersImgs from "./wonders";
import Link from "next/link";

const PhotoFeed2 = () => {
  return (
    <div>
      <h1 className="text-3xl text-fuchsia-900 text-center my-4 font-bold">
        New Wonders of the world
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-2">
        {wondersImgs.map((img) => (
          <Link key={img.id} href={`/photo-feed2/${img.id}`}>
            <Image
              src={img.src}
              alt={img.name}
              className="object-cover w-full aspect-square rounded-lg hover:scale-105 transition-all"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotoFeed2;
