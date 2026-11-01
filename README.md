# Wander Journal website — setup guide

A rebuild of your Wix site in plain HTML/CSS/JS, with Stripe checkout. It has no backend, no monthly fees and no build step.

## What's in here

| File / folder | What it is |
|---|---|
| `index.html`, `shop.html`, `about.html`, `contact.html`, `privacy-policy.html` | Main pages |
| `wander-journal.html`, `tri-colour-pack.html`, `quad-colour-pack.html` | Product pages |
| `thank-you.html` | Page customers see after paying |
| `assets/js/config.js` | **The only file you need to edit**: Stripe links and contact form settings |
| `assets/css/styles.css` | Colours and fonts (set at the top) |
| `assets/img/` | Your photos, resized for the web |
| `product-page/`, `category/`, `contact-10.html`, `general-8.html`, `cart-page.html` | Redirect old Wix links to the new pages |

**Preview it locally:** double-click `index.html`. Until you add the Stripe links, the Buy buttons show "Coming soon".

---

## 1. Set up Stripe

1. Create an account at [stripe.com/au](https://stripe.com/au). Finish verification and add your bank account for payouts.
2. **Create 6 products** (Product catalogue → Add product), all priced in AUD:
   - Wander Journal – Pink, Green, Blue, Grey: **$30** each
   - Wander Journal – Tri-colour Pack: **$70**
   - Wander Journal – Quad-colour Pack: **$80**

   Add a photo to each one. You can use the files in `assets/img`.
3. **Create a Payment Link for each product** (Payment Links → New). On each link:
   - Turn on *Let customers adjust quantity*. Max 10 is a sensible limit.
   - Turn on *Collect customers' addresses* → **Billing and shipping**, then pick the countries you ship to.
   - Add a **shipping rate**, for example "Standard (Australia)". Stripe charges it once per order, not per journal.
   - Optional: require a phone number (couriers like having one) and allow promotion codes.
   - **After payment:** choose not to show Stripe's confirmation page and redirect to `https://www.wanderjournalglobal.com/thank-you.html`. Until your domain is connected, use your GitHub Pages address instead.
4. **Paste the 6 links** into `assets/js/config.js`. Each one looks like `https://buy.stripe.com/...`.
5. **Turn on email receipts** for customers (Settings → Customer emails). Also turn on payment notifications for yourself so you get an email for every order.
6. **Test before going live.** Switch Stripe to *Test mode*, make test links (they start with `https://buy.stripe.com/test_`) and pay with card `4242 4242 4242 4242`, any future expiry date and any CVC. Once it works, replace them with live links.

**Fulfilling orders:** each payment in the Stripe Dashboard shows the items, quantity and shipping address. Post the journals and email the customer their tracking number.

**Stock:** Payment Links don't count inventory. When something sells out, write `'sold-out'` as its link in `config.js` (the button changes to "Sold out") and deactivate that link in Stripe.

**Fees:** about 1.65% + 30c per Australian card payment and no monthly fee. Check [stripe.com/au/pricing](https://stripe.com/au/pricing) for current rates.

## 2. Contact form (optional)

It already works: **Send** opens the visitor's email app, addressed to wanderjournalglobal@gmail.com.
If you'd rather receive messages directly, create a free form at [formspree.io](https://formspree.io) and paste its endpoint into `contactFormEndpoint` in `config.js`.

## 3. Publish on GitHub Pages (free)

Everything in this folder is safe to make public. Stripe Payment Links and a Formspree address are meant to be public, and there are no passwords or keys.

**Option A: GitHub Desktop (easiest)**
1. In GitHub Desktop, choose **File → Add Local Repository**, select this folder and click **create a repository** when it offers.
2. Name it `wanderjournal`. Leave everything else as is.
3. Click **Publish repository** and **untick "Keep this code private"**. GitHub Pages is only free for public repositories.

**Option B: in the browser**
1. On github.com, click **New repository**, name it `wanderjournal`, set it to **Public** and create it.
2. Click **uploading an existing file**.
3. Open this folder, select **everything inside it** (not the folder itself) and drag it onto the page. `index.html` must end up at the top level of the repository.
4. Click **Commit changes**. The site has under 100 files, so one upload is enough.

**Turn the site on**
1. In the repository, go to **Settings → Pages**.
2. Under *Build and deployment*, choose **Deploy from a branch**, then branch **main** and folder **/(root)**, and click **Save**.
3. After a minute or two the site is live at `https://<your-username>.github.io/wanderjournal/`.

**Making changes later:** open any file on github.com, click the pencil icon, edit and commit. This is the quickest way to paste your Stripe links into `assets/js/config.js`.

## 4. Connect wanderjournalglobal.com

> **Update (Nov 2026):** wanderjournalglobal.com has expired, so the steps below no longer apply as written. Links, social previews and the sitemap use `https://wanderjournal.github.io` for now. When you connect a domain, replace that address in every file, and add the DNS records wherever you bought the domain.

The domain is billed separately from your Wix plan, so first check it hasn't expired (Wix → Domains). You don't need to transfer it away from Wix.

1. **GitHub:** Settings → Pages → *Custom domain* → enter `www.wanderjournalglobal.com` and save.
2. **Wix:** Domains → ⋯ next to the domain → **Manage DNS records**:
   - **A records** for the root domain (`@`), replacing Wix's own:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME** for `www` → `<your-username>.github.io`
3. Wait for the changes to spread. It can take up to 48 hours.
4. Back in GitHub Pages, tick **Enforce HTTPS** once it becomes available.
5. Update the "After payment" redirect on your Stripe links to the real domain if you used the GitHub address.
6. Once the new site is live, **unpublish the Wix site** so Google doesn't index two copies.

## 5. Making changes later

- **Prices:** change them in Stripe *and* in the HTML. Search the files for the old price (e.g. `80`): it appears on the product page, the home and shop cards, and in each page's `"price"` and `data-price` values.
- **Sales:** create a discount code in Stripe (Product catalogue → Coupons), then put the same code and the sale dates in `promo` in `assets/js/config.js`. During those dates a popup and the top bar advertise it. Add `?preview-sale` to any page address to preview it.
- **Text:** edit the `.html` files directly.
- **Colours and fonts:** the top of `assets/css/styles.css`. Button text on beige is dark so it's easy to read. Set `--on-beige: #FAFAFA;` to go back to the white text your Wix site used.
- GitHub Pages caches files for about 10 minutes, so edits can take a moment to show up.
