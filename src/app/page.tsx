import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>Hello</div>
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
  );
}
