import Header from "./Header";
import Footer from "./Footer";
import Subscriber from "./Subscriber";
import LogoSlider from "./LogoSlider";

const partners = [
  {
    id: 1,
    name: "axis",
    url: "/images/partner/axis.png",
  },
  {
    id: 2,
    name: "schneider",
    url: "/images/partner/schneider.svg",
  },
  {
    id: 3,
    name: "honeywell",
    url: "/images/partner/honeywell.png",
  },
  {
    id: 4,
    name: "rs",
    url: "/images/partner/rs.png",
  },
  {
    id: 5,
    name: "leviton",
    url: "/images/partner/leviton.png",
  },
  {
    id: 6,
    name: "hikvision",
    url: "/images/partner/hikvision.png",
  },
  {
    id: 7,
    name: "burndy",
    url: "/images/partner/burndy.png",
  },
  {
    id: 8,
    name: "fluke",
    url: "/images/partner/fluke.png",
  },
  {
    id: 9,
    name: "himel",
    url: "/images/partner/himel.png",
  },
  {
    id: 10,
    name: "ideal",
    url: "/images/partner/ideal.png",
  },
  {
    id: 11,
    name: "moteco",
    url: "/images/partner/moteco.png",
  },
  {
    id: 12,
    name: "hoshan",
    url: "/images/partner/hoshan.png",
  },
  {
    id: 13,
    name: "juffali",
    url: "/images/partner/juffali.png",
  },
];

const clients = [
  {
    id: 1,
    name: "saudi_aramco",
    url: "/images/client/saudi_aramco.png",
  },
  {
    id: 2,
    name: "binyah",
    url: "/images/client/binyah.svg",
  },
  {
    id: 3,
    name: "alkifah",
    url: "/images/client/alkifah.png",
  },
  {
    id: 4,
    name: "rawabi",
    url: "/images/client/rawabi.png",
  },
  {
    id: 5,
    name: "sadara",
    url: "/images/client/sadara.png",
  },
  {
    id: 6,
    name: "arcon",
    url: "/images/client/arcon.png",
  },
  {
    id: 7,
    name: "nesma",
    url: "/images/client/nesma.png",
  },
  {
    id: 8,
    name: "bawani",
    url: "/images/client/bawani.png",
  },
  {
    id: 9,
    name: "acc",
    url: "/images/client/acc.png",
  },
  {
    id: 10,
    name: "tamimi",
    url: "/images/client/tamimi.png",
  },
  {
    id: 11,
    name: "sendan",
    url: "/images/client/sendan.png",
  },
  {
    id: 12,
    name: "isam",
    url: "/images/client/isam.png",
  },
  {
    id: 13,
    name: "binladin",
    url: "/images/client/binladin.png",
  },
  {
    id: 14,
    name: "neom",
    url: "/images/client/neom.png",
  },
  {
    id: 15,
    name: "masco",
    url: "/images/client/masco.png",
  },
  {
    id: 13,
    name: "sic",
    url: "/images/client/sic.jpg",
  },
  {
    id: 16,
    name: "carrefour",
    url: "/images/client/carrefour.png",
  },
];

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <LogoSlider data={clients} text={"Our Happy Clients"} />
      <LogoSlider data={partners} text={"Our Partners"} />

      <Footer />
    </>
  );
};

export default Layout;
