# Aya Club — Project Context for Executor Session

## Who is the user?
Khalid (aldaeer.khaled@gmail.com) — co-founder/operator of Aya (aya.app), a Saudi Arabian fashion e-commerce startup.

## What is Aya?
- Multi-vendor abaya & fashion marketplace (not a single brand — aggregates 20+ brands/designers)
- Focused on Saudi Arabia, ships across Gulf (UAE, Kuwait, Qatar, Bahrain, Oman, Egypt, Jordan)
- Sells 30,000+ items/month
- Main products: abayas (primary), perfumes, nail polish, accessories
- Website: https://www.aya.app
- Built on Shopify

## The Core Problem
Aya's customer repeat purchase rate is only **11%** — meaning ~89% of all customers (20,000+) have bought only once and never returned. This is well below fashion industry benchmarks (20-25% average, 40-70% for top performers like Shein, FIGS, Lululemon).

This is measured **lifetime** (no time window) — meaning even with unlimited time to return, only 11% came back. This makes it a genuine retention problem, not a measurement artifact.

## What We Have Researched (Research Session Summary)
This session (the research engine) has already covered:

1. **Benchmarks** — Repeat purchase rates across fashion (Lululemon 72%, FIGS 60%, Zappos 50%, Everlane 45%, Shein 40%) and e-commerce (Amazon Prime 93% renewal, Chewy 90% revenue from existing customers, Wayfair 80% of orders from repeats)

2. **Low-frequency category context** — Abayas behave like shoes or eyewear (Warby Parker), not like Shein's daily-scroll fast fashion. Purchase frequency is seasonal/occasion-driven (Ramadan, Eid, weddings). Warby Parker gets 50% repeat in 24 months. Aya should benchmark against low-frequency comps, not daily-use ones.

3. **Loyalty/subscription program research** — Deep-dived 5 fashion companies:
   - **Shein**: Free VIP tiers (S0-S3 by spend) + paid SHEIN Club ($6.99/quarter or $19.99/year) for 5% discount + free shipping
   - **ASOS**: Paid Premier ($19/year, unlimited express delivery) + free ASOS World loyalty tiers (Stylist→Curator→Icon→A-Lister by annual spend)
   - **Zalando**: Started with paid €14.95/year subscription → **scrapped it in 2024**, converted to free 4-tier points program (points from purchases + engagement like newsletter signup, birthday, body measurements)
   - **Rent the Runway**: Subscription IS the product ($89-$235/month for rotating designer closet) + tenure-based RTR Rewards
   - **H&M**: Fully free, 2 tiers (Core → Plus at 500 pts), 1pt per $1, bonus points for non-purchase actions (recycling, referrals, profile completion), sustainability-linked

4. **Amazon Prime deep-dive**:
   - Launched 2005 at $79/year, now $139/year
   - Prime members spend 2x more ($1,400 vs $700/year) and order 7x more (100+ vs 14 times/year)
   - Subscription fee revenue = only 6.96% of Amazon's total revenue — the fee itself is near break-even; real value is the retail sales it drives
   - Cost per Prime member estimated ~$130-140/year (mostly shipping subsidy); program operates near break-even
   - Key lesson: Prime works because it removes friction on a daily-use category. Less directly applicable to abayas.

5. **Key strategic conclusion from research**: Every top loyalty performer uses a **free, tiered program** as the core, with an optional cheap paid add-on. Zalando actively reversed a paid subscription. For Aya — a newer brand in a low-frequency category — the research strongly points toward a **free loyalty tier system** as the starting point, not a paid subscription.

## The "Aya Club" Concept
The working name for Aya's customer retention initiative. No mechanics are finalized yet — we are in the strategy/discovery phase.

## The First Thing to Build — "Try Before You Buy" Waitlist Dashboard
Khalid wants to **test the concept** of a "Try Before You Buy" feature:
- Customer signs up on a waitlist
- Aya sends her 3 abayas to try at home
- She picks the one(s) she wants, pays for those
- Returns the rest

To validate demand before committing to logistics, Khalid wants to build a **waitlist dashboard** with:

### Customer-facing page (public):
- Branded landing page explaining the Try Before You Buy concept
- Signup form collecting: name, email, phone, city, abaya size, style preferences
- Confirmation screen after signup
- Should feel premium, on-brand (Aya is elegant, feminine, Saudi fashion)

### Admin dashboard (internal):
- View all waitlist signups in a table
- Key stats: total signups, new this week
- Per-signup: name, email, phone, city, size, style preferences, date joined, status
- Status management per row (Waiting → Contacted → Trial Sent → Completed / Returned)
- Search/filter functionality
- CSV export

### Tech stack chosen:
- React + Vite (standalone, no Shopify integration needed yet)
- Tailwind CSS for styling
- React Router for page navigation (/waitlist = customer page, /admin = admin view)
- localStorage for data persistence (no backend — this is a concept test)
- lucide-react for icons

### Brand direction:
- Elegant, feminine, premium feel
- Color palette: warm gold (#C9A96E) as primary, off-white/cream background, dark charcoal text
- Arabic fashion sensibility — clean, not cluttered
- The product is for Gulf/Saudi women

## My Role vs Your Role
- **This session (research engine):** strategy, benchmarks, competitor analysis, program design thinking, answering "what should we build and why"
- **Your session (executor):** build the actual product — code, files, UI, deployment

## What to Build First
Start with the **Try Before You Buy waitlist dashboard** described above. The project folder is at:
`/Users/khalid/Desktop/AYA/Aya club`

A Vite React project has been partially initialized there (npm install was run, react-router-dom and lucide-react are installed, Tailwind setup was interrupted). Check the current state with `ls` and `cat package.json` before starting.

## Questions You Should NOT Ask Khalid
- What is Aya? (answered above)
- What is the retention problem? (answered above)
- What tech stack? (React + Vite + Tailwind + localStorage — decided)
- What features? (listed above)
- Should it look premium? (yes, always — it's a Saudi fashion brand)
