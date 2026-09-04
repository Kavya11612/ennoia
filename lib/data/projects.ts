import type { Project } from './types';

export const projects: Project[] = [
  {
    slug: 'verse',
    title: 'Verse — a functional beverage brand',
    brandName: 'Verse',
    projectType: 'hypothetical',
    sector: 'Consumer & CPG',
    practices: ['Brand Strategy', 'Visual Identity'],
    oneLiner: 'A functional-drinks brand crowded into the same clean-label shelf as everyone else.',
    featuredOrder: 1,
    selfSetBrief:
      'Design a position for a functional beverage brand entering a category where every competitor already claims "clean," "natural," and "no added sugar." The brief we set ourselves: find the one claim that is not yet owned, and build the brand as if the founder had to defend that claim under questioning, not just print it on a can.',
    categoryResearch: [
      'The functional beverage aisle in India has moved fast in three years — from a handful of imported electrolyte brands to a shelf of twenty, most launched by first-time founders with near-identical language: clean, natural, functional, no added sugar.',
      'Differentiation has collapsed into design alone. Pastel cans, lowercase wordmarks, and a single "hero ingredient" callout appear on almost every SKU we surveyed. When the words are the same, the shelf reads as one brand with twenty labels.',
      'Nobody in the set was talking about what the ingredient actually does inside the body, or over what timeframe. Function was implied, not explained.',
    ],
    findings: [
      'Founders in this category are optimising for shelf appeal before they have decided what the drink is actually for. The result is a wall of confident-looking cans that all answer a question nobody asked.',
      'The open position was mechanism, not mood — a brand willing to explain, specifically, what happens and when, rather than gesture at wellness in general.',
    ],
    direction:
      'Position Verse as the brand that explains itself. Where the category speaks in feelings, Verse speaks in mechanism — what is in the can, what it does, and on what timeline — without becoming a supplement label. The tone is a good pharmacist, not a wellness influencer: direct, a little dry, entirely un-precious about the health-halo language the category has worn out.',
    systemBody: [
      'The identity runs on a restrained two-colour system with a single accent reserved for the active ingredient of each variant — so the can communicates function before flavour, and the system scales to new SKUs without a redesign.',
      'Typography carries the "explains itself" idea directly: a condensed display face for the brand name, paired with a monospace data face for dosage, timing, and ingredient callouts — borrowed visual language from a lab label, not a lifestyle one.',
    ],
    appliedBody: [
      'Applied across can design, a three-SKU launch matrix, secondary packaging for retail, and a founder-facing one-pager explaining how the naming and claim architecture holds up under retail legal review.',
    ],
    whatWeWouldMeasure: [
      'Shelf differentiation in a blind category sort — would a shopper correctly separate Verse from five competitor cans without reading the wordmark.',
      'Claim comprehension — in a five-second exposure test, can a first-time shopper state what the product does and when they would take it.',
      'Repeat-purchase language in unprompted customer feedback — does "clean" or "mechanism" language recur.',
    ],
    scope: ['Brand strategy', 'Naming & claim architecture', 'Visual identity', 'Packaging system'],
  },
  {
    slug: 'northfield',
    title: 'Northfield — lending infrastructure for small manufacturers',
    brandName: 'Northfield',
    projectType: 'hypothetical',
    sector: 'Fintech & B2B Platforms',
    practices: ['Brand Strategy', 'Naming & Verification', 'Experience Design'],
    oneLiner: 'A B2B lending platform underwriting factories, wearing the visual language of a consumer app.',
    featuredOrder: 2,
    selfSetBrief:
      'A lending platform for small manufacturers needs to be trusted by two audiences at once — factory owners deciding whether to hand over financial data, and capital partners deciding whether to fund the book. The brief we set ourselves: build a brand that reads as institutional to a bank and legible to a machine-shop owner, without contradicting itself to either.',
    categoryResearch: [
      'Fintech-for-SMB brands in India default to the same visual register regardless of who is actually the borrower — rounded sans-serifs, a single saturated brand blue, dashboard screenshots of graphs trending up and to the right.',
      'That register was built for consumer neobanks convincing individuals to switch apps. Applied to underwriting for manufacturing businesses, it reads as thin — a factory owner evaluating a working-capital partner is not looking for delight.',
      'Category naming also collapsed toward the same pattern: compound words combining "capital," "flow," or "credit" with a generic tech suffix. Search and trademark clearance in this space is already crowded.',
    ],
    findings: [
      'Trust, in this category, is signalled by restraint, not warmth. The businesses evaluating Northfield read confidence into a brand that behaves like an institution — precise language, defensible numbers, no exclamation marks — more than one that behaves like an app.',
      'A cleared, ownable name mattered more here than in most categories, because "capital" and "flow" compounds were functionally unregisterable at this point without a costly opposition fight.',
    ],
    direction:
      'Position Northfield as infrastructure, not an app — closer to the language of a ratings agency than a fintech startup. The name itself does the differentiation work: no "capital," no "flow," a plain compound word that reads as a place, not a pitch. The identity is quiet on purpose; the product experience carries the actual clarity.',
    systemBody: [
      'A single typeface family across brand and product — no separate "marketing font" — so the pitch deck, the underwriting dashboard, and the loan agreement all read as one institution rather than a startup with a product bolted on.',
      'A restrained mark built from a single geometric device rather than an abstract logo, designed to survive being printed in one colour on a physical loan document — a real constraint most fintech identities never test against.',
    ],
    appliedBody: [
      'Applied to the wordmark and mark, a document system for loan agreements and term sheets, and an onboarding flow redesign for the borrower-facing dashboard, tested with a small panel of manufacturing-business owners for comprehension rather than aesthetic preference.',
    ],
    whatWeWouldMeasure: [
      'Time-to-comprehension on the first underwriting document — can a borrower correctly restate their repayment terms after one read.',
      'Trademark and domain clearance rate compared to the shortlisted alternatives that were rejected for conflict.',
      'Borrower-panel trust ranking of the identity against three anonymised competitor brands, blind.',
    ],
    scope: ['Naming & verification', 'Brand strategy', 'Visual identity', 'Product & document experience'],
  },
  {
    slug: 'almanac',
    title: 'Almanac — an independent stay in the Nilgiris',
    brandName: 'Almanac',
    projectType: 'hypothetical',
    sector: 'Hospitality & Travel',
    practices: ['Brand Strategy', 'Visual Identity', 'Experience Design'],
    oneLiner: 'A six-room independent stay competing for attention against boutique-hotel chains twenty times its size.',
    featuredOrder: 3,
    selfSetBrief:
      'A single, independently owned six-room property in the Nilgiris needs a brand that can hold its own against boutique-hotel groups with national marketing budgets — without pretending to be bigger than it is. The brief we set ourselves: make smallness the argument, not the apology.',
    categoryResearch: [
      'Independent Indian hospitality brands at this scale largely borrow the visual vocabulary of the groups they are competing against — the same muted sage-and-terracotta palette, the same serif wordmark, the same drone shot of a pool at golden hour.',
      'That borrowed vocabulary reads as aspiration toward scale the property does not have and, for most travellers researching a stay this size, does not want. The actual reason a guest picks a six-room property over a resort — the owner answers the phone, the property changes with the season, nothing is standardised — was almost never the thing being communicated.',
    ],
    findings: [
      'The travellers who book independent stays like this one are actively avoiding the group-hotel experience. A brand that looks like a smaller version of a chain is competing on the chain\u2019s terms and will lose on budget every time.',
      'The property\u2019s actual differentiator — a working relationship between the owner and the land, and a room count too small to standardise — was legible in conversation but invisible in the brand.',
    ],
    direction:
      'Build Almanac around documentation, not aspiration — treat the property like a place with a record being kept, not a destination being sold. The name itself signals this: a book of the year\u2019s patterns, not a superlative. Visually, the brand behaves like a field notebook the owner actually keeps — seasonal, specific, dated — rather than a evergreen hospitality campaign.',
    systemBody: [
      'A typographic system built around a single serif for long-form writing (the owner\u2019s seasonal notes, published as the site\u2019s primary content) and Ennoia\u2019s standard mono-label discipline for factual data — room availability, elevation, distance, weather — kept legible and un-precious.',
      'A muted, warm-neutral palette drawn directly from the property\u2019s own materials — stone, tea-garden green, red oxide flooring — photographed honestly rather than colour-graded toward a brand palette, consistent with §5.7.1.',
    ],
    appliedBody: [
      'Applied to a wordmark and mark, a seasonal-notes content format for the website in place of a conventional gallery-led homepage, and a signage and print system for on-property use.',
    ],
    whatWeWouldMeasure: [
      'Direct-booking share versus OTA-sourced bookings, as a proxy for whether the brand is doing differentiation work the OTA listing cannot.',
      'Time on the seasonal-notes content versus the room-gallery pages, to test whether documentation actually outperforms conventional gallery-led hospitality content.',
      'Guest survey: what one word would you use to describe Almanac, checked against the intended positioning.',
    ],
    scope: ['Brand strategy', 'Naming', 'Visual identity', 'Editorial & web experience'],
  },
  {
    slug: 'ferrous',
    title: 'Ferrous — circular steel for industrial buyers',
    brandName: 'Ferrous',
    projectType: 'hypothetical',
    sector: 'Climate & Industrial',
    practices: ['Brand Strategy', 'Visual Identity'],
    oneLiner: 'A recycled-steel supplier selling into procurement teams who do not care about sustainability marketing.',
    featuredOrder: 4,
    selfSetBrief:
      'A circular-steel supplier sells recycled structural steel to industrial procurement teams who buy on spec sheets, certification, and delivery reliability — not on climate language. The brief we set ourselves: build a brand for a genuinely sustainable product that never once asks the buyer to care about sustainability to say yes.',
    categoryResearch: [
      'Climate-adjacent B2B brands in this decade have converged on a single visual language — green accents, leaf-adjacent iconography, and mission statements placed above the product spec. Almost none of it was built for the buyer actually signing the purchase order.',
      'Structural steel procurement is a conservative, standards-driven process. Buyers cross-reference certification numbers against IS and ASTM codes before they read anything a brand says about itself. A green logo has no purchasing authority in that process.',
    ],
    findings: [
      'The sustainability story is true and commercially real — recycled steel from Ferrous has a materially lower embodied-carbon figure than primary steel — but it is a secondary reason to buy, not the opening argument, for this buyer.',
      'The open position was industrial legitimacy first, environmental credential second: a brand that could sit next to a primary-steel competitor\u2019s spec sheet and be taken exactly as seriously, with the carbon data available but not leading.',
    ],
    direction:
      'Position Ferrous as a steel supplier that happens to be circular, not a climate company that happens to sell steel. The identity draws from industrial signage and mill certification documents rather than climate-tech branding — flat, dense, data-forward — with the sustainability case made in a dedicated technical data sheet rather than the brand voice.',
    systemBody: [
      'A dense, functional grid system borrowed from mill test certificates, applied consistently across the identity so that Ferrous\u2019s own documents look native to the industry they are entering rather than imported from a different one.',
      'No colour usage outside Ennoia\u2019s working palette — deliberately not the green-and-leaf vocabulary the category defaults to — with the embodied-carbon comparison presented as a flat, direct chart rather than an emotive graphic.',
    ],
    appliedBody: [
      'Applied to a wordmark and mark, a technical data-sheet template, and a procurement-facing one-pager positioning the embodied-carbon figure as a secondary, verifiable line item rather than the headline.',
    ],
    whatWeWouldMeasure: [
      'Whether procurement contacts request the technical data sheet before or after the sustainability data sheet, as a read on which argument actually opens the conversation.',
      'Comprehension of certification claims in a buyer-panel review, tested against a primary-steel competitor\u2019s spec sheet for perceived legitimacy.',
    ],
    scope: ['Brand strategy', 'Visual identity', 'Technical documentation system'],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
