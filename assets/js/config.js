/* =============================================================
   Wander Journal — site settings
   This is the only file you need to edit to start taking orders.
   ============================================================= */
window.WJ_CONFIG = {
  /*
   * Stripe Payment Links — paste each link between the quotes.
   * Stripe Dashboard → Payment Links → open a link → Copy.
   * Test-mode links start with https://buy.stripe.com/test_ — swap them for live links before launch.
   * Leave a link empty ('') and its button shows "Coming soon"; write 'sold-out' to show "Sold out".
   */
  paymentLinks: {
    'wander-journal-pink':  'https://buy.stripe.com/7sYcN5eK07sm1od5o8g7e00',
    'wander-journal-green': 'https://buy.stripe.com/7sY28r45mbIC9UJ2bWg7e01',
    'wander-journal-blue':  'https://buy.stripe.com/28E9AT59qeUOaYN5o8g7e03',
    'wander-journal-grey':  'https://buy.stripe.com/3cIaEX8lCcMG1odeYIg7e02',
    'tri-colour-pack':      'https://buy.stripe.com/8x200j1Xe13Y6Ix03Og7e04',
    'quad-colour-pack':     'https://buy.stripe.com/bJecN559qh2WaYN3g0g7e05'
  },

  /*
   * Contact form (optional).
   * Leave contactFormEndpoint empty and "Send" opens the visitor's email app, addressed to contactEmail.
   * To receive messages without that step, create a free form at formspree.io and paste its
   * endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'.
   */
  contactFormEndpoint: 'https://formspree.io/f/xjyyawol',
  contactEmail: 'wanderjournalglobal@gmail.com',

  /*
   * Sale popup — advertises a discount code you've created in Stripe (Product catalogue → Coupons).
   * The code must match Stripe exactly. From the start date to the end date (inclusive), each visitor
   * sees a popup once and the top bar mentions the code. Outside those dates nothing shows, so you can
   * set up the next sale early. Set show to false to switch it off.
   * Preview it any time by adding ?preview-sale to a page address, e.g. https://wanderjournal.github.io/?preview-sale
   */
  promo: {
    show: true,
    title: 'Black Friday Sale',
    text: '20% off everything',
    code: 'BLACKFRIDAY20',
    starts: '2026-11-01',  // first day of the sale (YYYY-MM-DD)
    ends: '2026-12-07'     // last day of the sale
  }
};
