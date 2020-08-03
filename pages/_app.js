import "../styles/reset.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faMapMarkerAlt,
    faPhone,
    faAt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faCcVisa,
    faCcMastercard,
    faCcAmex,
    faCcDiscover,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faMapMarkerAlt,
    faPhone,
    faAt,
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube,
    faCcVisa,
    faCcMastercard,
    faCcAmex,
    faCcDiscover,
    faFacebookF
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
