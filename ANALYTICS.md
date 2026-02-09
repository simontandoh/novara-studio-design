# Analytics

## Overview
Analytics is lightweight and privacy-conscious. Events are sent only if the following env vars are set:
- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_SITE_ID`

If unset, events are logged to the console in development only.

## Event Names
- `pageview` (automatic on route change)
  - Properties: `path`, `title`
- `cta_click`
  - Properties: `label`, `location`
- `nav_click`
  - Properties: `label`, `path`
- `form_submit_success`
  - Properties: `form`
- `form_submit_error`
  - Properties: `form`
- `scroll_depth`
  - Properties: `percent`

## Locations
- `hero`
- `home_cards`
- `cta_section`
