// pages/sitemap.js
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Sitemap = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Embed sitemap generator code */}
      <script
        id="mysitemapgenerator_loadcorsdata"
        data-token="ceb620f77f14f824d9cc8c0138aee5bd"
        data-domain="www.mysitemapgenerator.com"
        src="https://cdn.mysitemapgenerator.com/api/embedmap.m.js"
      />
      <Footer />
    </div>
  );
};

export default Sitemap;
