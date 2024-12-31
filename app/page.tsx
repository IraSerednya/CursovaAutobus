// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <main className="flex gap-3">
      <Link href="/auth">Auth</Link>
      <Link href="/auth/role">Role</Link>
      <Link href="/auth/driver">Driver</Link>

      </main>
      <footer className="">
      
      </footer>
    </div>
  );
}
