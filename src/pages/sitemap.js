// pages/sitemap.js
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Sitemap = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div id="mysitemapgenerator_loadcorsdata" data-token="6a3b469f166e1080690423656d946be4" data-domain="www.mysitemapgenerator.com"></div>
      <script src="https://cdn.mysitemapgenerator.com/api/embedmap.m.js"></script>
      <Footer />
    </div>
  );
};

export default Sitemap;
