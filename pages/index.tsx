import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Repro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Repro</h1>

        <p>
          Link to Protected Page: <Link href="/protected">Protected Page</Link>
        </p>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <p>
            Link to Sign-In Page: <Link href="/sign-in">Sign In</Link>
          </p>
          <p>
            Link to Sign-In Page With Redirect: <Link href="/sign-in?redirect_url=/protected">Sign In</Link>
          </p>
          <p>
            Link to Sign-Up Page: <Link href="/sign-up">Sign Up</Link>
          </p>
          <p>
            Link to Sign-Up Page With Redirect: <Link href="/sign-up?redirect_url=/protected">Sign In</Link>
          </p>
        </SignedOut>
      </main>
    </div>
  );
};

export default Home;
