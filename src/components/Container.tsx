import dynamic from "next/dynamic";
import { Layout, Main } from "./Container.style";
import Footer from "./Footer";

const Nav = dynamic(() => import("./Nav"), { ssr: false });

export default function Container({ children }) {
  return (
    <Layout>
      {/* <div style={{ backgroundColor: "rgba(255, 255, 255, 1.0)" }}> */}
      <Nav />
      {/* </div> */}
      <Main>
        <div className="contents">{children}</div>
      </Main>
      <Footer />
    </Layout>
  );
}
