import { useRef } from "react";
import useIsMobile from "../utils/isMobile";
import next from "../assets/icon-next.svg";
import prev from "../assets/icon-previous.svg";

import p1 from "../assets/image-product-1.jpg"
import p1_thumb from "../assets/image-product-1-thumbnail.jpg"

import p2 from "../assets/image-product-2.jpg"
import p2_thumb from "../assets/image-product-2-thumbnail.jpg"

import p3 from "../assets/image-product-3.jpg"
import p3_thumb from "../assets/image-product-3-thumbnail.jpg"

import p4 from "../assets/image-product-4.jpg"
import p4_thumb from "../assets/image-product-4-thumbnail.jpg"

const images = [
  {
    id: 1,
    url: p1,
    thumbnail: p1_thumb,
  },
  {
    id: 2,
    url: p2,
    thumbnail: p2_thumb,
  },
  {
    id: 3,
    url: p3,
    thumbnail: p3_thumb,
  },
  {
    id: 4,
    url: p4,
    thumbnail: p4_thumb,
  },
];
export default function Gallery() {
  const isMobile = useIsMobile();
  const refs = useRef(null);
  const currImg = useRef(1);
  function scrollToId(dir, id) {
    const map = getMap();
    let img;
    if (dir === "next") {
      img = currImg.current + 1;
      currImg.current = Math.min(img, map.size);
    } else if (dir === "prev") {
      img = currImg.current - 1;
      currImg.current = Math.max(img, 1);
    }
    let node = map.get(dir ? currImg.current : id);
    node.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  }
  function getMap() {
    if (!refs.current) {
      // Initialize the Map on first usage.
      refs.current = new Map();
    }
    return refs.current;
  }
  const img_compo = images.map((per) => (
    <img
      ref={(node) => {
        const map = getMap();
        if (node) {
          map.set(per.id, node);
        } else {
          map.delete(per.id);
        }
      }}
      className="h-full w-full flex-shrink-0 flex-grow-0 basis-auto object-cover"
      key={per.id}
      src={per.url}
    />
  ));
  return (
    <div className="relative">
      <button
        onClick={() => scrollToId("prev")}
        className="absolute left-[12px] top-[50%] grid h-[40px] w-[40px] place-items-center rounded-full bg-white transition-transform duration-[.1s] active:translate-x-[-5px] md:hidden"
      >
        <img src={prev} />
      </button>
      <button
        onClick={() => scrollToId("next")}
        className="absolute right-[12px] top-[50%] grid h-[40px] w-[40px] place-items-center rounded-full bg-white transition-transform duration-[.1s] active:translate-x-[5px] md:hidden"
      >
        <img src={next} />
      </button>
      <div className="flex h-[300px] w-full overflow-hidden rounded-[10px] md:h-[445px] md:w-[445px]">
        {img_compo}
      </div>

      {!isMobile && (
        <div className="mt-[32px] flex gap-[32px]">
          {images.map((per) => {
            return (
              <button
                className="group relative h-[88px] w-[88px] overflow-hidden rounded-[10px] border-[2px] border-transparent transition-all duration-[.4s] focus:border-[#FF7E1B]"
                onClick={() => scrollToId(false, per.id)}
              >
                <span className="absolute inset-0 transition-all duration-[.4s]  group-focus:bg-white/75"></span>
                <img src={per.thumbnail} alt="" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
