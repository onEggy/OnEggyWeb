import { Inter } from "next/font/google";
import Head from "next/head";
import Landing from "./home/landing";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <div>
      <Head>
        <title>OnEggy</title>
      </Head>
      <Landing />
    </div>
  );
}
