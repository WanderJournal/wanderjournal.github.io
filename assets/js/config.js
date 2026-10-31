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
    'wander-journal-pink':  '',
    'wander-journal-green': '',
    'wander-journal-blue':  '',
    'wander-journal-grey':  '',
    'tri-colour-pack':      '',
    'quad-colour-pack':     ''
  },

  /*
   * Contact form (optional).
   * Leave contactFormEndpoint empty and "Send" opens the visitor's email app, addressed to contactEmail.
   * To receive messages without that step, create a free form at formspree.io and paste its
   * endpoint here, e.g. 'https://formspree.io/f/abcdwxyz'.
   */
  contactFormEndpoint: 'https://formspree.io/f/xjyyawol',
  contactEmail: 'wanderjournalglobal@gmail.com'
};
