# Notio Consulting

Website for [notio.uk](https://notio.uk), covering independent consultancy for:

- assisted living, warden call and telecare;
- door entry and access control;
- the 2027 digital phone switchover;
- fire and smoke detection;
- housing providers, RTM companies, residents and families.

## Run locally

Node.js 22.13 or later is required.

```bash
npm ci
npm run dev
```

The local address is normally `http://localhost:3000`.

## Check the website

```bash
npm run build
```

This produces the Cloudflare-compatible build used by OpenAI Sites.

## Publish with GitHub Pages

The repository includes a GitHub Actions workflow that builds and publishes a
static version of the same website.

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Let the `Deploy Notio to GitHub Pages` workflow complete.
5. In **Settings → Pages**, set the custom domain to `notio.uk`.
6. Add the required GitHub Pages records at the domain's DNS provider.
7. Once GitHub confirms the DNS check, enable **Enforce HTTPS**.

The site is fully static on GitHub Pages. The enquiry form prepares an email to
`hello@notio.uk` in the visitor's email application; it does not store enquiry
data on the website.

## Main content

- `app/page.tsx` — home page
- `app/assisted-living/page.tsx`
- `app/door-entry-systems/page.tsx`
- `app/digital-switchover-2027/page.tsx`
- `app/smoke-detection-systems/page.tsx`
- `app/privacy-policy/page.tsx`
- `app/globals.css` — brand styling and responsive layout
- `public/` — supplied Notio logo, opening animation and social card

## Update contact details

The current website uses `hello@notio.uk`, matching the existing Notio website.
Search the project for that address if it needs to be changed later.
