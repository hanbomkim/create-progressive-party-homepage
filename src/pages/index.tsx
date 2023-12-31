import dynamic from "next/dynamic";
import Head from "next/head";

const Nav = dynamic(() => import("@/components/Nav"), { ssr: false });
const Temporarypage = dynamic(() => import("@/components/Temporarypage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {/* <Nav /> */}
      {/* <Fullpage /> */}
      <Temporarypage />
    </>
  );
}
