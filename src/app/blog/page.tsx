import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

export default function Blog() {
    return(
      <>
        <h1>Blog</h1>
        <Link href="/">Go to home</Link>
      </>
    );
  }