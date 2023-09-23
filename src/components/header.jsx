import { useContext, useRef } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import close from "../assets/icon-close.svg";
import menu from "../assets/icon-menu.svg";
import avatar from "../assets/image-avatar.png";
import useIsMobile from "../utils/isMobile";
import units from "../utils/unitTracker";
import { products } from "../contexts/cartData";

export default function Header({ handleCart }) {
  let isMobile = useIsMobile();
  const navbar = useRef(null);
  let cartContent = useContext(products);
  const cartLength = units(cartContent);

  function toggleNav() {
    navbar.current.classList.toggle(
      "right-0",
      navbar.current.classList.contains("right-full"),
    );
    navbar.current.classList.toggle(
      "right-full",
      !navbar.current.classList.contains("right-0"),
    );
  }
  return (
    <header className="gap-h_gap md:gap-h_gap_md flex h-[86px] items-center bg-white px-[24px] md:h-[112px]">
      {isMobile && (
        <button onClick={toggleNav}>
          <img src={menu} />
        </button>
      )}
      <a href="/">
        <img src={logo} />
      </a>
      <nav
        ref={navbar}
        className="fixed right-full top-0 z-50 h-full w-full bg-black/75 transition-all duration-[.3s] md:static md:w-auto "
      >
        <div className="w-navbar p-navbar_p h-full bg-white md:w-auto md:p-0">
          {isMobile && (
            <button onClick={toggleNav} type="button" className="mb-[54px]">
              <img src={close} />
            </button>
          )}
          <div className="gap-navbar_links_gap flex flex-col md:h-full md:flex-row md:[&_a:hover]:border-[#FF7E1B] [&_a]:text-lg [&_a]:font-bold [&_a]:leading-[26px] [&_a]:text-[#1D2026] md:[&_a]:border-b-[4px] md:[&_a]:border-transparent">
            <a href="/" className="md:inline-flex md:items-center">
              Collections
            </a>
            <a href="/" className="md:inline-flex md:items-center">
              Men
            </a>
            <a href="/" className="md:inline-flex md:items-center">
              Women
            </a>
            <a href="/" className="md:inline-flex md:items-center">
              About
            </a>
            <a href="/" className="md:inline-flex md:items-center">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className="ml-auto flex items-center gap-[22px]">
        <button onClick={handleCart} className="relative">
          <span className="absolute right-[-35%] top-[-20%]  h-[13px] w-[19px]  rounded-[6.5px] bg-[#FF7E1B] text-[10px] font-bold text-white">
            {cartLength}
          </span>
          <img src={cart} />
        </button>
        <button>
          <img className="h-[24px] w-[24px]" src={avatar} />
        </button>
      </div>
    </header>
  );
}
