# cainelli.dev

Personal website built with Astro and deployed to Cloudflare Workers.

## Spotify latest track

The site-wide Spotify float requests `/api/spotify/recent.json` once when it
initializes. The on-demand endpoint refreshes Spotify authorization on the
server and caches the latest successful track in Cloudflare's Cache API for 15
minutes. Empty history, missing configuration, and Spotify errors hide the
float without affecting statically generated pages.

Create a Spotify app with an exact redirect URI and authorize it using the
Authorization Code flow with the `user-read-recently-played` scope. Keep these
values server-side only:

```text
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
SPOTIFY_REFRESH_TOKEN
```

For local development, place the values in `.env`. For Cloudflare, add each
value separately with `wrangler secret put <NAME>` or through the Workers
dashboard. Never expose them through `PUBLIC_` variables.

Spotify refresh tokens for this integration expire after six months. When the
float stops appearing because authorization has expired, repeat the
Authorization Code flow and replace `SPOTIFY_REFRESH_TOKEN`. Rotate the client
secret immediately if it is ever disclosed.
