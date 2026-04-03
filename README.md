# Nguyen Chau Linh Portfolio

Portfolio-first Next.js application for [nguyenchaulinh.vercel.app](https://nguyenchaulinh.vercel.app), with a recruiter-facing homepage plus a few experimental side experiences that still live inside the same repo.

## Live Site

- Portfolio: [nguyenchaulinh.vercel.app](https://nguyenchaulinh.vercel.app)

## What Is In This Repo

This codebase currently contains three main experience groups:

- `/`  
  The primary portfolio homepage with art-cartoon direction, live product highlights, case studies, and contact sections.

- `/typing`  
  A typing practice mini app powered by the quote API route.

- `/userdatapuller`  
  A browser and location info experiment that combines client-side signals, mapping, and server-side enrichment.

It also includes:

- `/privacy-policy`
- `/squiz-matrix/privacy-policy`
- `/api/typing/[minLength]`
- `/api/userInfoByIP/[userInfo]`
- `/api/userInfoByLatLon/[lat]/[lon]`

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- AOS
- Vercel Analytics
- Vercel Speed Insights
- React Leaflet / Leaflet
- Google Geocoding API

## Project Structure

```text
pages/
  index.tsx                      portfolio homepage
  typing/                        typing mini app
  userdatapuller/                browser/location experiment
  api/                           server routes for quote + user info

components/
  Home/                          homepage sections, art direction, loader, mini-game
  Header/ Footer/                shared portfolio shell
  TypingProject/                 typing app UI and helpers
  DataPullerProject/             user data puller UI and helpers
  Icons/                         shared icons

lib/
  userInfo.ts                    shared IP/geocoding helpers for API routes

public/
  img/                           portraits and product screenshots
  resume.pdf                     public resume linked from the site
```

## Environment Variables

Create a `.env.local` file in the project root when needed.

```bash
NEXT_PUBLIC_GA_TRACKING_ID=
NEXT_PUBLIC_BLACKLIST_COUNTRIES=
GOOGLE_GEOCODING_API_KEY=
```

Notes:

- `NEXT_PUBLIC_GA_TRACKING_ID` is optional and enables Google Analytics script loading.
- `NEXT_PUBLIC_BLACKLIST_COUNTRIES` is optional and controls the maintenance fallback for blacklisted countries on the homepage.
- `GOOGLE_GEOCODING_API_KEY` is the preferred server-side key for the geocoding routes.
- There is a temporary fallback to `NEXT_PUBLIC_KEY_GOOGLE_API` for backward compatibility with older local setups.

## Local Development

### Requirements

- Node.js `>=22.x`
- npm

### Install

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and Production Commands

Build the project:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## External Services and APIs

- `https://api.ipify.org`  
  Used client-side to resolve the current IP address before hitting internal user info routes.

- `http://ip-api.com/json/:ip`  
  Used on the server to enrich IP data with region/city/timezone details.

- Google Geocoding API  
  Used on the server to derive ZIP or postal code from latitude and longitude.

- `https://api.quotable.io/random`  
  Used by the typing API route to fetch quote content, then sanitized before returning to the client.

## API Routes

### `GET /api/typing/[minLength]`

Returns a sanitized quote payload for the typing mini app.

Example response:

```json
{
  "quote": "Sample quote text",
  "author": "author-slug"
}
```

### `GET /api/userInfoByIP/[userInfo]`

Returns IP-based location and timezone details plus ZIP code enrichment from Google Geocoding.

### `GET /api/userInfoByLatLon/[lat]/[lon]`

Returns only the resolved ZIP code.

Example response:

```json
{
  "zipcode": "100000"
}
```

## Notes About Experimental Subpages

- `/typing` and `/userdatapuller` are intentionally kept in the repo as side experiences and technical experiments.
- The homepage at `/` is still the main recruiter-facing journey.
- Shared cleanup work in this repo tries to preserve these experiments without letting them dictate the architecture of the homepage.

## Deployment

The production site is deployed on Vercel. A standard Vercel setup works as long as the required environment variables are available.
