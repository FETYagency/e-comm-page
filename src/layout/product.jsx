import { Fragment } from "react";
import Gallery from "../components/image";
import Article from "../components/article";

export default function Product() {
  return (
    <section className="md:flex md:items-center md:gap-[85px] md:pb-[90px] md:pt-[90px]">
      <Gallery />
      <Article />
    </section>
  );
}
