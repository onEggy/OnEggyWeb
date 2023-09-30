import '@/styles/globals.css'
import '@/styles/tailwind.css'
import '@/styles/style.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


config.autoAddCss = false; 

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
