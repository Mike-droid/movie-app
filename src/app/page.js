import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>hello world!</h1>
      <Link href={"/movies"}>Go to movie list</Link>
    </>
  );
}
