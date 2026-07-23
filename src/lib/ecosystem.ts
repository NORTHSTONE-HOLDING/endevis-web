/**
 * ENDEVIS Application Ecosystem
 *
 * ENDEVIS Sp. z o.o. is the company / software publisher — not a product.
 * All applications are published under the ENDEVIS brand and are designed
 * to be discoverable through FlowStore (the ecosystem marketplace).
 *
 * To add a new application:
 * 1. Add an entry to `products` (or `upcomingProducts` while in development)
 * 2. Add translated copy under `products.items.<id>` in each dictionary
 * 3. Optionally register an accent in `accentTokens`
 *
 * New apps should be FlowStore-compatible by design (licenses, orgs, billing).
 */

export type ProductAccent = "red" | "blue" | "emerald" | "gold";

export type ProductIconName =
  | "Store"
  | "FileText"
  | "Database"
  | "Calendar"
  | "Plus";

export type EcosystemProduct = {
  id: string;
  name: string;
  href: string;
  domain: string;
  accent: ProductAccent;
  icon: ProductIconName;
  /** Marketplace gateway apps sort first */
  role: "marketplace" | "application";
  featured?: boolean;
};

export const accentTokens: Record<
  ProductAccent,
  {
    hex: string;
    rgb: string;
    label: string;
  }
> = {
  red: { hex: "#E5484D", rgb: "229, 72, 77", label: "Marketplace" },
  blue: { hex: "#4C8DFF", rgb: "76, 141, 255", label: "Documents" },
  emerald: { hex: "#34D399", rgb: "52, 211, 153", label: "Data" },
  gold: { hex: "#C9A34E", rgb: "201, 163, 78", label: "Events" },
};

/**
 * Live ENDEVIS applications — display order is intentional.
 * FlowStore first (gateway), then domain apps.
 */
export const products = [
  {
    id: "flowstore",
    name: "FlowStore",
    href: "https://flowstore.cz",
    domain: "flowstore.cz",
    accent: "red",
    icon: "Store",
    role: "marketplace",
    featured: true,
  },
  {
    id: "paperflow",
    name: "PaperFlow",
    href: "https://paperflow.cz",
    domain: "paperflow.cz",
    accent: "blue",
    icon: "FileText",
    role: "application",
  },
  {
    id: "feedflow",
    name: "FeedFlow",
    href: "https://feedflow.cz",
    domain: "feedflow.cz",
    accent: "emerald",
    icon: "Database",
    role: "application",
  },
  {
    id: "eventflow",
    name: "EventFlow",
    href: "https://eventflow.cz",
    domain: "eventflow.cz",
    accent: "gold",
    icon: "Calendar",
    role: "application",
  },
] as const satisfies readonly EcosystemProduct[];

export type ProductId = (typeof products)[number]["id"];

/**
 * Reserved future application names — architecture-ready placeholders.
 * These remain FlowStore-compatible when published.
 */
export const futureProductNames = [
  "SiteFlow",
  "FoodFlow",
  "CRMFlow",
  "HRFlow",
  "StockFlow",
  "ProjectFlow",
  "FleetFlow",
  "FinanceFlow",
  "AI Studio",
] as const;

export const companyRoles = [
  "AI Software Company",
  "Software Publisher",
  "Cloud Platform Provider",
  "Creator of AI Business Applications",
] as const;
