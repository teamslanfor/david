# David Smith's Garden Centre (Wilberfoss, York) – website

## Quick start (no tools needed)
The `website/` folder is the complete site, with every file at the top level and no sub-folders:
index.html, about.html, services.html, gallery.html, contact.html, 404.html,
styles.css, main.js, chatbot.js, site-config.js, the images, site.webmanifest, robots.txt and sitemap.xml.

- **Open locally:** double-click `index.html`.
- **GitHub + Vercel:** upload ALL files from `website/` (or the WEBSITE zip) to the TOP of the repository, not inside a folder. In Vercel choose Framework Preset "Other", with no build command and no output directory.
- **Netlify:** drag the `website` folder onto app.netlify.com/drop.
- **cPanel:** upload all files into `public_html`.

## Enquiry form – one-time activation
The form and chat assistant email enquiries to davidsmithnurseries@gmail.com through FormSubmit. The FIRST time the
form is used, FormSubmit sends an activation email to that inbox (check spam). Click "Activate" once; after that every
enquiry arrives by email.

## Where the details came from
- Phone, email and the 5 greenhouse and shop photos: supplied by the client. The photos were upscaled and gently enhanced, and a screenshot zoom icon was cropped out.
- Address (Butts Lane, Hull Road, Wilberfoss, York YO41 5NT), product range and the 3 customer reviews: Garden Centre Guide (gardencentreguide.co.uk/david-smith-garden-centre-york). The Yell page blocks automated access.
- Garden ideas photos (cottage garden, alliums, lawn, compost, trowel) are royalty-free stock, labelled as illustrative.

## Please confirm with the client
- **Opening hours:** not available, so the site says "seasonal, please call to check". Send the hours and they can be added everywhere.
- **Reviews:** quoted from Garden Centre Guide. Check the wording against the original before launch, and add Google or Yell reviews if wanted.
- **Product range:** check that the six sections match what's sold, e.g. pond supplies, furniture and varnishes.
- **Domain:** www.davidsmithgardencentre.co.uk is a placeholder. Update `url` in `src/site.config.js`.

## Editing (optional, needs Node.js)
Sources are in `src/` and `public/assets/`. Run `npm run build` and then `node flatten.js` to regenerate `website/`.
The `server.js` file adds an optional live AI chat (needs ANTHROPIC_API_KEY).
