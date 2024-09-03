import {
  FaPlaneDeparture,
  FaHotel,
  FaTrainSubway,
  FaUmbrellaBeach,
} from "react-icons/fa6";
import {
  BsTaxiFront,
  BsBusFront,
  BsCurrencyExchange,
  BsTicketDetailed,
  BsFileMedical,
  BsFillFileEarmarkPersonFill,
} from "react-icons/bs";
import { GiIndianPalace } from "react-icons/gi";
import { MdOutlineCardGiftcard } from "react-icons/md";

export const mainServices = [
  {
    name: "flight",
    logo: <FaPlaneDeparture />,
  },
  {
    name: "hotels",
    logo: <FaHotel />,
  },
  {
    name: "trains",
    logo: <FaTrainSubway />,
  },
  {
    name: "holiday",
    logo: <FaUmbrellaBeach />,
  },
];

export const otherServicesMenu = [
  {
    name: "airport cabs",
    logo: <BsTaxiFront />,
  },
  {
    name: "homestay & villas",
    logo: <GiIndianPalace />,
  },
  {
    name: "bus",
    logo: <BsBusFront />,
  },
  {
    name: "giftcards",
    logo: <MdOutlineCardGiftcard />,
  },
  {
    name: "forex card & currency",
    logo: <BsCurrencyExchange />,
  },

  {
    name: "train pnr status",
    logo: <BsTicketDetailed />,
  },

  {
    name: "travel insurance",
    logo: <BsFileMedical />,
  },

  {
    name: "visa services",
    logo: <BsFillFileEarmarkPersonFill />,
  },
];

const largeScreenServices = [
  {
    name: "flight",
    logo: <FaPlaneDeparture />,
  },
  {
    name: "hotels",
    logo: <FaHotel />,
  },
  {
    name: "trains",
    logo: <FaTrainSubway />,
  },
  {
    name: "homestay & villas",
    logo: <GiIndianPalace />,
  },
  {
    name: "bus",
    logo: <BsBusFront />,
  },
];
