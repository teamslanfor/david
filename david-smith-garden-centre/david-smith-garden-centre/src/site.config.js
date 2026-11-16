/**
 * Business details – David Smith's Garden Centre, Wilberfoss, York.
 * Sources: client-supplied phone, email and photos; address, product range and reviews from Garden Centre Guide
 * (https://www.gardencentreguide.co.uk/david-smith-garden-centre-york). The Yell page blocks automated access.
 * Edit here, then `npm run build` and `node flatten.js`. Items marked CONFIRM should be checked with the client.
 */
module.exports = {
  name: 'David Smith’s Garden Centre',
  shortName: 'David Smith’s',
  brandSub: 'Garden Centre · Wilberfoss, York',
  lang: 'en-GB',
  locale: 'en_GB',
  phoneFormat: 'UK',
  url: 'https://www.davidsmithgardencentre.co.uk', // placeholder domain – CONFIRM
  area: 'York, Wilberfoss, Stamford Bridge, Pocklington and East Yorkshire',
  phone: '01759 388863',
  phoneIntl: '+441759388863',
  phoneHref: 'tel:+441759388863',
  whatsapp: '',
  whatsappNumber: '',
  address: { street: 'Butts Lane, Hull Road, Wilberfoss', city: 'York', region: 'North Yorkshire', postcode: 'YO41 5NT', country: 'GB' },
  addressLine: 'Butts Lane, Hull Road, Wilberfoss, York YO41 5NT',
  mapQuery: 'David Smith Garden Centre, Butts Lane, Hull Road, Wilberfoss, York YO41 5NT',
  yell: 'https://www.yell.com/biz/david-smith-s-garden-centre-york-1032721/',
  reviewSiteName: 'Yell',
  // Opening hours not supplied – the site says "call to check". CONFIRM and fill in.
  hours: [],
  openFrom: null, openTo: null,
  hoursShort: '',
  hoursLabel: '',
  openingHoursSchema: '',
  rating: null,
  // Real reviews from Garden Centre Guide (quoted as published there).
  reviews: [
    { name: 'Jackie Thrower', text: 'Always there to assist with advice and lifting heavy stuff into the car....well worth a visit', when: 'July 2021', source: 'Garden Centre Guide' },
    { name: 'Donald Cameron', text: 'Great range of plants that are at a very sensible price.', when: 'August 2018', source: 'Garden Centre Guide' },
    { name: 'Susan Hewitt', text: 'Very good for getting some items not stocked elsewhere.', when: 'July 2021', source: 'Garden Centre Guide' },
  ],
  contactName: 'David',
  schemaType: 'GardenStore',
  schemaDescription: 'Family garden centre and nursery in Wilberfoss near York: bedding and patio plants, hanging baskets, trees and shrubs, perennials, houseplants, compost and lawn care, pond supplies, pots, garden furniture, tools and ornaments.',
  footerAbout: 'A friendly, family garden centre in Wilberfoss near York. Greenhouses full of plants we’re proud of, sensible prices and help carrying it all to your car.',
  ctaTitle: 'Come and see what’s in flower',
  ctaText: 'Call us to check what’s in stock, order hanging baskets, or ask a gardening question.',
  ctaButton: 'Send an enquiry',
  headerCta: 'Get directions',
  headerCtaHref: 'https://www.google.com/maps/dir/?api=1&destination=Butts%20Lane%2C%20Hull%20Road%2C%20Wilberfoss%2C%20York%20YO41%205NT',
  manifestShort: 'David Smith’s',
  license: '',
  nav: { services: 'Plants & Products', about: 'About', portfolio: 'Gallery' },
  // Enquiries are emailed here via FormSubmit. The FIRST submission sends a one-time activation email – click it once.
  email: 'davidsmithnurseries@gmail.com',
  formEndpoint: null,
  socials: [],
};
if (!module.exports.formEndpoint && module.exports.email) {
  module.exports.formEndpoint = 'https://formsubmit.co/ajax/' + module.exports.email;
}
