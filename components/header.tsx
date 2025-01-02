// import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
      <div className="flex gap-3 relative z-10">
      <Link href="/auth">Auth</Link>
      <Link href="/auth/role">Role</Link>
      <Link href="/auth/driver">Driver</Link>
    </div>
  );
}
