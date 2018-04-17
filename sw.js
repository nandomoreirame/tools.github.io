importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404/index.html",
    "revision": "63c2941f88a673b78f3f69163087a3ce"
  },
  {
    "url": "assets/images/android-icon-144x144.png",
    "revision": "cd62fc44a6ddf853f8f3465d32dde609"
  },
  {
    "url": "assets/images/android-icon-192x192.png",
    "revision": "df307b127f634b18d23422e780367b82"
  },
  {
    "url": "assets/images/android-icon-36x36.png",
    "revision": "4843b7934cd9ef1c0965f17f642ac1b5"
  },
  {
    "url": "assets/images/android-icon-48x48.png",
    "revision": "ad2f0960b714e3f03f996b5c9047c909"
  },
  {
    "url": "assets/images/android-icon-72x72.png",
    "revision": "6f613cc3b2609bed78cc44bbfce95926"
  },
  {
    "url": "assets/images/android-icon-96x96.png",
    "revision": "e093404ea292e3e49bdffd373af5e7c1"
  },
  {
    "url": "assets/images/apple-icon-114x114.png",
    "revision": "c692088a279dc401903ff3aa7de973b1"
  },
  {
    "url": "assets/images/apple-icon-120x120.png",
    "revision": "900df3b3d339da3ff2232075132a94b8"
  },
  {
    "url": "assets/images/apple-icon-144x144.png",
    "revision": "cd62fc44a6ddf853f8f3465d32dde609"
  },
  {
    "url": "assets/images/apple-icon-152x152.png",
    "revision": "55d53180f99d1278b11b747a645111e3"
  },
  {
    "url": "assets/images/apple-icon-180x180.png",
    "revision": "7d5914bed0cc05939e9d90426afe190e"
  },
  {
    "url": "assets/images/apple-icon-57x57.png",
    "revision": "5121079e7c600d5bac64d19d46901643"
  },
  {
    "url": "assets/images/apple-icon-60x60.png",
    "revision": "cb47f7f919bf5537794536573fe2ce6b"
  },
  {
    "url": "assets/images/apple-icon-72x72.png",
    "revision": "6f613cc3b2609bed78cc44bbfce95926"
  },
  {
    "url": "assets/images/apple-icon-76x76.png",
    "revision": "e9118c8a2e7c5a8334d04836ddcb0ef4"
  },
  {
    "url": "assets/images/apple-icon-precomposed.png",
    "revision": "df307b127f634b18d23422e780367b82"
  },
  {
    "url": "assets/images/apple-icon.png",
    "revision": "df307b127f634b18d23422e780367b82"
  },
  {
    "url": "assets/images/clicksign-dashboard.png",
    "revision": "42bc1142f14f1084cbf460ef2c6e3775"
  },
  {
    "url": "assets/images/contabilizei-dashboard.png",
    "revision": "b3d68c087c2fa907887162cae3161f71"
  },
  {
    "url": "assets/images/controlle.png",
    "revision": "93c065eebcfd34564ac2d1710f86120d"
  },
  {
    "url": "assets/images/favicon-16x16.png",
    "revision": "6c8d7097bc7e0d8bcb00d694a75c2fb5"
  },
  {
    "url": "assets/images/favicon-32x32.png",
    "revision": "b78f61853d6587a7600d0a6bd1111267"
  },
  {
    "url": "assets/images/favicon-96x96.png",
    "revision": "e093404ea292e3e49bdffd373af5e7c1"
  },
  {
    "url": "assets/images/fundamental-icon.png",
    "revision": "eb1ab39ef9c9bcbf9547bb5441669913"
  },
  {
    "url": "assets/images/google-analytics-dashboard.png",
    "revision": "28537f1c8c82eba6e5936906f5ff85be"
  },
  {
    "url": "assets/images/google-optimize-dashboard.png",
    "revision": "0d6c39b96ed1b2e5d421f013dc88d7b1"
  },
  {
    "url": "assets/images/growth-logo.png",
    "revision": "47b7fee90bda6f9be50d35e67afbf555"
  },
  {
    "url": "assets/images/hero-image.png",
    "revision": "882b030384d4c200becd2b87e9389395"
  },
  {
    "url": "assets/images/hotjar-dashboard.png",
    "revision": "6dcd587ebc78339730b38e8d97c69a7d"
  },
  {
    "url": "assets/images/leadfeeder-dashboard.png",
    "revision": "b3629284c72af873cf66d4399a0e5d91"
  },
  {
    "url": "assets/images/mix-panel-dashboard.png",
    "revision": "af3e48ef16bfbb741cc4ceae6e237d74"
  },
  {
    "url": "assets/images/ms-icon-144x144.png",
    "revision": "cd62fc44a6ddf853f8f3465d32dde609"
  },
  {
    "url": "assets/images/ms-icon-150x150.png",
    "revision": "3a00854cd1ef6026a59ba63ef278cfe8"
  },
  {
    "url": "assets/images/ms-icon-310x310.png",
    "revision": "403d7c696ec6e966a44730d3df74a4ff"
  },
  {
    "url": "assets/images/ms-icon-70x70.png",
    "revision": "9e3ad17680ea108b2a491442174860f5"
  },
  {
    "url": "assets/images/optimizely-dashboard.png",
    "revision": "e5c7961cdf202ec6ef1426ae58e42d43"
  },
  {
    "url": "assets/images/pipedrive-dashboard.png",
    "revision": "c738474eb4d471c3eb0dbdb3e056e458"
  },
  {
    "url": "assets/images/visual-website-optimizer.png",
    "revision": "e511e01093b41c5c3667cd3aa4bed428"
  },
  {
    "url": "assets/javascripts/bundle.js",
    "revision": "70feebd4a5feeb377372bb117790c472"
  },
  {
    "url": "assets/javascripts/vendor.js",
    "revision": "21550ac1a89d2783f79e2e31195d50a2"
  },
  {
    "url": "basecamp/index.html",
    "revision": "30918566d3159d628be2491adae63deb"
  },
  {
    "url": "categoria/allinone/index.html",
    "revision": "cd66cfe73f48e457298496d81ab6ecf5"
  },
  {
    "url": "categoria/analytics/index.html",
    "revision": "f3e421cc7c3b500d7026f62425ba93a5"
  },
  {
    "url": "categoria/cro/index.html",
    "revision": "213b5bd17798de63395acf0842d42814"
  },
  {
    "url": "categoria/gestao/index.html",
    "revision": "5f2898942771237f238850fc6a054124"
  },
  {
    "url": "categoria/repositorios/index.html",
    "revision": "e34513dcadcd03d81281bd1cad4aae31"
  },
  {
    "url": "categoria/vendas/index.html",
    "revision": "b870386ace7acf1772037a041c7185c7"
  },
  {
    "url": "clicksign/index.html",
    "revision": "c9dfe32ce3e1377dd657bd0c4c87cdaf"
  },
  {
    "url": "codepen/index.html",
    "revision": "a56f7e5a8d8dac1ef919dd9154fd8d3e"
  },
  {
    "url": "contabilizei/index.html",
    "revision": "c49b4091eeedc0612ca9afdb616373f9"
  },
  {
    "url": "contribuir/index.html",
    "revision": "cb5f92b7ff53ee91bb0a0328a7f05fd0"
  },
  {
    "url": "controlle/index.html",
    "revision": "a9c846c77939b9c9e318738344c078eb"
  },
  {
    "url": "github/index.html",
    "revision": "75bc5b1ddbb9dcc5dd4332b2cb624992"
  },
  {
    "url": "google-analytics/index.html",
    "revision": "157dc39fa78f6bb62fd841148fe4705f"
  },
  {
    "url": "google-optimize/index.html",
    "revision": "4df2f11cb75028e7db077c577c50f128"
  },
  {
    "url": "hotjar/index.html",
    "revision": "1687b299bd8b1c9d302be22c26aec3dc"
  },
  {
    "url": "index.html",
    "revision": "8ae3ef6908ba627ce54c1939b8345812"
  },
  {
    "url": "leadfeeder/index.html",
    "revision": "904a2b4da37ede5eaf3fb445722c06a5"
  },
  {
    "url": "meetime/index.html",
    "revision": "20138b1e5ca6b41d8e34325cadcff218"
  },
  {
    "url": "mixpanel/index.html",
    "revision": "1632fded74fd621d084343103413e7bc"
  },
  {
    "url": "optimizely/index.html",
    "revision": "433d4ae11579195afe5c252a02dce0b0"
  },
  {
    "url": "p/2/index.html",
    "revision": "e454dd29a3b4a3acf0150109ae551501"
  },
  {
    "url": "pipedrive/index.html",
    "revision": "c74eeee38f2e6c53b891a2ae6b1bb9d9"
  },
  {
    "url": "pipz/index.html",
    "revision": "27e97c9ed15830ef3db1a65a26010d98"
  },
  {
    "url": "ramper/index.html",
    "revision": "5d14cdb19308362e22da99afe6352402"
  },
  {
    "url": "rdstation/index.html",
    "revision": "5165c154e483120a5ecab05ed0b1c5fb"
  },
  {
    "url": "reev/index.html",
    "revision": "6d28138ab06a2d1dd8274d729bbe7e9c"
  },
  {
    "url": "sobre/index.html",
    "revision": "58ea997cd7073ceeb7e9ea1549ac373d"
  },
  {
    "url": "trello/index.html",
    "revision": "d2d66cd25100ab7d80c16c39b301986d"
  },
  {
    "url": "visual-website-optimizer/index.html",
    "revision": "c01edeca1958b8137e2fedd72dcddae4"
  },
  {
    "url": "woodpecker/index.html",
    "revision": "d9b4a6744d134cede774bb9a5cc7c386"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
