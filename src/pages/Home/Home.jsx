import React, { useRef } from "react";
import Inner from "../../components/Inner/InnerPage";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import BestSellers from "../../components/ProductsContainer/BestSellers/BestSellers";
import ContactHome from "../../components/Contact/ContactHome/ContactHome";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import { appState, productsData } from "../../data/productsList";
import { useScroll } from "framer-motion";

function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <>
      <Inner>
        <Header />
        <Hero />
        {/* <BestSellers /> */}
        <ProductsContainer
          array={appState.bestSellers}
          scroll={scrollYProgress}
        />
        <ContactHome />
        <Footer />
      </Inner>
    </>
  );
}

export default Home;
