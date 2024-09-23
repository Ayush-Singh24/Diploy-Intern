import { FooterLinksType } from "../types/types";

interface FooterLinksProps {
  item: FooterLinksType;
}
export default function FooterLinks({ item }: FooterLinksProps) {
  return (
    <ul className="flex flex-col text-sm w-1/2 gap-5 md:gap-3 pt-5 text-left lg:w-1/4 hover:[&>li]:text-primary-2 [&>li]:cursor-pointer [&>li]:transition-colors">
      <h4 className="font-semibold">{item.heading}</h4>
      {item.links.map((link: string) => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  );
}
