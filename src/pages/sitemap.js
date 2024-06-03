// pages/sitemap.js
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Head from "next/head";

const Sitemap = () => {
  // Sample array of sitemap URLs, replace with actual data
  const sitemapUrls = [
    "/sitemap.xml",
    //"/sitemap1.xml",
    //"/sitemap2.xml",
    //"/sitemap3.xml",
    // Add more URLs as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
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
      <div className="flex-grow px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Sitemap URLs</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sitemapUrls.map((url, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded">
              <a href={url} className="text-blue-500 hover:underline">{url}</a>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Sitemap;
