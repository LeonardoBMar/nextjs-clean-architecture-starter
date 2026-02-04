import Link from "next/link";
export default function Home() {
  return (
    <div >
      <main>
        <Link href="/users">Go to Users</Link>
      </main>
    </div>
  );
}
