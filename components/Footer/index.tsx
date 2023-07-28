import Likes from "@components/Likes";
import { Instagram, Twitter, Burger } from "@components/Icons";

export const Footer = () => (
    <>
    <div className="flex items-center align-center">
        <div className="mx-2">
          <a
            key="Instagram"
            href="https://www.instagram.com/iprogresodelano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:text-sky-600"
          >
            <Instagram />
          </a>
        </div>
        <div className="mx-2">
          <a
            key="Twitter"
            href="https://twitter.com/intent/tweet?text=https://www.progresodelano.info/ @iprogresodelano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600"
          >
            <Twitter />
          </a>
        </div>
        <div className="mr-2">
          <a
            key="Burger"
            href="https://www.buymeacoffee.com/viistorrr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600"
          >
            <Burger />
          </a>
        </div>
        <Likes />
        </div>
      <div className="flex-col items-center justify-center text-sm text-sky-900 hover:text-sky-700 py-2">
        <a
          href="https://www.viistorrr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.viistorrr.com
        </a>
      </div>
    </>
)