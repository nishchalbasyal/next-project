import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home_container">
      <h1>Welcome TO The Project</h1>
       <Link href="/post"> Visit Posts </Link>
    </div>
  );
}
