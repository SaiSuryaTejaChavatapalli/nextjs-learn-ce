import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-3xl underline text-red-600">Hello</div>
      <div className="flex">
        <div>
          <Link href="/test">Test</Link>
        </div>
        <div>
          <Link href="/blogs">Blogs</Link>
        </div>
        <div>
          <Link href={"/about"} replace>
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
