import Image from "next/image";
import wondersImages from "./wonders";
import Link from "next/link";

const Home = () => {
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl text-center font-bold my-4 text-pink-700">
        New Wonders of World
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wondersImages.map((wonder) => {
          const { name, src, id } = wonder;
          return (
            <Link key={id} href={`/photo-feed/${id}`}>
              <Image
                src={src}
                alt={name}
                className="object-cover aspect-square w-full rounded-lg"
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
