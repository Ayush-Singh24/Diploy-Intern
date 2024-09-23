import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import FooterLinks from "./FooterLinks";
import { footerLinks } from "../utils/constants";

export type FooterLinksType = {
  heading: string;
  links: string[];
};

const aboutSite: string[] = [
  "Intellectual Property Policy",
  "Terms of Service",
  "Privacy Policy",
  "Security",
];

export default function Footer() {
  return (
    <>
      <section className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-wrap items-center justify-between w-full gap-10">
          <a href="/">
            <img src="/logo.svg" className="h-10" />
          </a>
          <div className="flex items-center gap-3 text-primary-1 *:cursor-pointer *:transition-all hover:*:scale-105 hover:*:text-primary-2">
            <Facebook size={35} />
            <Instagram size={35} />
            <Linkedin size={35} />
            <Twitter size={35} />
            <Youtube size={35} />
            <Mail size={35} />
          </div>
        </div>
        <div className="flex flex-wrap w-full my-24">
          {footerLinks.map((footerLink, idx) => (
            <FooterLinks key={idx} item={footerLink} />
          ))}
        </div>
      </section>
      <footer className="flex flex-col items-center w-full gap-5 py-10 text-sm bg-grayBG">
        <div className="flex gap-5 text-black-5 hover:*:text-primary-1 *:transition-colors *:cursor-pointer flex-wrap justify-center">
          {aboutSite.map((item, idx) => (
            <a key={idx}>{item}</a>
          ))}
        </div>
        <p className="text-black-1">© Made By Ayush Singh</p>
      </footer>
    </>
  );
}
