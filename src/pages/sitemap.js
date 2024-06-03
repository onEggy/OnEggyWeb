// pages/sitemap.js
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Head from "next/head";

const Sitemap = () => {
  return (
    <div>
      <Head>
        {/* Embed sitemap generator code */}
        <script
          id="mysitemapgenerator_loadcorsdata"
          data-token="ceb620f77f14f824d9cc8c0138aee5bd"
          data-domain="www.mysitemapgenerator.com"
          src="https://cdn.mysitemapgenerator.com/api/embedmap.m.js"
        />
      </Head>
      <Navbar />
      {/* Blank body */}
      {/* You can add additional content if needed */}
      <Footer />
    </div>
  );
};

export default Sitemap;
