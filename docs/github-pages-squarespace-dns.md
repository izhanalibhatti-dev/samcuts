# GitHub Pages + Squarespace DNS Setup

Use this when Squarespace manages the domain DNS and GitHub Pages hosts the website.

## 1. GitHub Repository Settings

1. Push this repo to GitHub.
2. Open the repo on GitHub.
3. Go to `Settings` -> `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. If you have a custom domain, add it in the `Custom domain` field.
6. Enable `Enforce HTTPS` after GitHub finishes the DNS check.

## 2. Optional Custom Domain Variable

If you want the deployment workflow to add a `CNAME` file automatically:

1. Go to `Settings` -> `Secrets and variables` -> `Actions`.
2. Open the `Variables` tab.
3. Add a repository variable:
   - Name: `CUSTOM_DOMAIN`
   - Value: your domain, for example `samscutsburnley.co.uk`

## 3. Squarespace DNS Records

In Squarespace, open:

`Domains` -> your domain -> `DNS Settings` -> `Custom Records`

Remove old website records that conflict with GitHub Pages:

- Old `A` records for `@`
- Old `CNAME` records for `www`
- Old Cloudflare-specific website records

Keep email records if you use email on the domain:

- `MX`
- `TXT`
- SPF
- DKIM
- DMARC

Add these records for the root domain:

```txt
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

Add this record for `www`:

```txt
Type: CNAME
Host: www
Value: YOUR-GITHUB-USERNAME.github.io
```

Example:

```txt
Type: CNAME
Host: www
Value: izhan.github.io
```

Do not include the repo name in the CNAME value.

## 4. GitHub Pages Domain Choice

Recommended:

- Set GitHub Pages custom domain to your root domain, for example `samscutsburnley.co.uk`.
- GitHub can redirect `www.samscutsburnley.co.uk` to the root domain when both DNS records are configured.

## 5. Local Test

Run:

```sh
npm run build:github-pages
npm run preview:github-pages
```

## 6. SEO Domain Update

Before launch, update the placeholder schema domain in `src/routes/index.tsx`:

```ts
image: "https://samscuts.example/og.jpg",
"@id": "https://samscuts.example",
url: "https://samscuts.example",
```

Replace it with the live domain.
