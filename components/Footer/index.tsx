import Likes from "@components/Likes";
import { Instagram, Twitter, Burger } from "@components/Icons";

export const Footer = () => (
    <>
        <div className="flex">
            <a
                key="Instagram"
                href="https://www.instagram.com/solotiips"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-600 m-6"
                >
                <Instagram />
            </a>            
            <a
                key="Burger"
                href="https://www.buymeacoffee.com/viistorrr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600 m-2"
            >
                <Burger />
            </a>
            <Likes />
        </div>
        <div className="flex-col items-center justify-center text-sm text-sky-900 hover:text-sky-700 py-2">
            <i>
                <a
                    href="https://viistorrr.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    viistorrr
                </a>
            </i>
            👨🏾‍💻
        </div>
    </>
)
