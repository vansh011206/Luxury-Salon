export interface NavItem {
  name: string;
  path: string;
}

export const headerLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Bridal", path: "/bridal" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export const footerLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Bridal Studio", path: "/bridal" },
  { name: "Our Artists", path: "/team" },
  { name: "Gallery", path: "/gallery" },
  { name: "Membership", path: "/membership" },
  { name: "Gift Cards", path: "/gift-cards" },
  { name: "The Journal", path: "/blog" },
  { name: "Retail Boutique", path: "/products" },
  { name: "Contact Us", path: "/contact" },
];

// Compatibility alias
export const navigationLinks = headerLinks;
