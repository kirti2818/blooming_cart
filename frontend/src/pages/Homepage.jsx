import { Box } from "@chakra-ui/react";
import CardSection from "../components/landingPage/CardSection";
import ImageSection from "../components/landingPage/ImageSection";
import SearchSection from "../components/landingPage/SearchSection";
import TopSection from "../components/landingPage/TopSection";
import Flower_Data1, { Flower_Data2, Flower_Data3 } from "../assets/Data";
import ReviewSection from "../components/landingPage/ReviewSection";
// import {CartProvider} from "react-use-cart"

export default function Homepage() {
  return (
    <Box mb="100px" className="container">
      <TopSection></TopSection>
      <SearchSection />
      <CardSection
        details={Flower_Data1}
        title="Send Flowers & Exclusive Gifts"
      />
      <ImageSection img="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt64459623f6fc0d1d/63c6bd5c1bb5c94c86d1ce46/deal-of-the-day-floral-embrace-zone-10-banner-fy23-3999.jpg?quality=70&auto=webp&optimize={medium}" />
      <CardSection
        details={Flower_Data2}
        title="Offer Comfort With Sympathy Flowers & Gifts"
      />
      <ImageSection img="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltc6be2f7123f7d41d/63a5fb562735331089d8a157/marketplace-gifts-and-more-zone-10-banner-spa-fy23.jpg?quality=70&auto=webp&optimize={medium}" />
      <CardSection
        details={Flower_Data3}
        title="Explore Our Self-Care Essentials"
      />
      <ImageSection img="https://images.contentstack.io/v3/assets/blt89dbf1c763ec00a6/bltfa36f70965e48481/6222b7ed6f0333490a0e7fd1/1400x200_IMCBnr_NonMem2.jpg?quality=80&auto=webp&optimze={medium}" />
      <ReviewSection /> 
    </Box>
  );
}
