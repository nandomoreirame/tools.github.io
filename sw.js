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
    "url": "_includes/footer.html",
    "revision": "38ae4117d8c13280fd8a4405168fbe92"
  },
  {
    "url": "_includes/head.html",
    "revision": "847e9969d01d343f503421b8f2252941"
  },
  {
    "url": "_includes/header.html",
    "revision": "c3dfa50bc731e2b6ce82ff8e42cf0f49"
  },
  {
    "url": "_includes/navbar.html",
    "revision": "80aa89b78ccaf17843ea745b87e9add0"
  },
  {
    "url": "_includes/pagination.html",
    "revision": "7001763c039b65ba2af1426231aad87e"
  },
  {
    "url": "_includes/search.html",
    "revision": "024cf8394b3865b652bd343ea1920ec6"
  },
  {
    "url": "_includes/sidebar.html",
    "revision": "b45707c871ef6899bf1cc6b141fd2dbc"
  },
  {
    "url": "_includes/toolsCard.html",
    "revision": "3b779587c6bf40f61240a4010f0c21fe"
  },
  {
    "url": "_layouts/category.html",
    "revision": "1496e0ca277cab410849d02df3c918dd"
  },
  {
    "url": "_layouts/default.html",
    "revision": "d619b6f02b85ef1f782742da0f73e866"
  },
  {
    "url": "_layouts/page.html",
    "revision": "eb4f078b6e2e5ea697a2d83eddb3c3f7"
  },
  {
    "url": "_layouts/post.html",
    "revision": "d00b9c71a823a6a9c4b742d4a3990495"
  },
  {
    "url": "_site/404/index.html",
    "revision": "1544a57d4fac00fd975d92110404d13f"
  },
  {
    "url": "_site/assets/javascripts/bundle.js",
    "revision": "157f1d4054334e5b580c44fc5152ac65"
  },
  {
    "url": "_site/assets/javascripts/vendor.js",
    "revision": "94b85c858278f5ec1efeabf573dda245"
  },
  {
    "url": "_site/assets/stylesheets/bundle.css",
    "revision": "94843487b28a0091278108de589fae20"
  },
  {
    "url": "_site/basecamp/index.html",
    "revision": "387de89237c286efd93c7cb1fae28756"
  },
  {
    "url": "_site/categoria/allinone/index.html",
    "revision": "cb8f6a1ce76e49f8ecc15e9b682ce067"
  },
  {
    "url": "_site/categoria/analytics/index.html",
    "revision": "77c397cb121699eb69df32e8b4f01e19"
  },
  {
    "url": "_site/categoria/gestao/index.html",
    "revision": "967a7cf8c33ed2dec0f088cc91ddcc79"
  },
  {
    "url": "_site/categoria/repositorios/index.html",
    "revision": "bb2567a40fda76e528bb8601564107b5"
  },
  {
    "url": "_site/categoria/vendas/index.html",
    "revision": "36738b65ea475cb4d48ff6e35efe41bc"
  },
  {
    "url": "_site/codepen/index.html",
    "revision": "d51ca4fa8401a3d89f05b5aa8cbeb922"
  },
  {
    "url": "_site/contribuir/index.html",
    "revision": "2c34e9168b44bdf37a70d6a744c2b010"
  },
  {
    "url": "_site/exemplo/index.html",
    "revision": "79c0d7cd76dcd44f5dddcb0fcf84bfe2"
  },
  {
    "url": "_site/github/index.html",
    "revision": "e731126ef0129ebf4f6a35817fbac00b"
  },
  {
    "url": "_site/google-analytics/index.html",
    "revision": "d883749ebeeb20add3704c5ca2bcd68a"
  },
  {
    "url": "_site/index.html",
    "revision": "812cd0399948d380e17dca74694017db"
  },
  {
    "url": "_site/meetime/index.html",
    "revision": "818e58ff8162da42308345f825cac41b"
  },
  {
    "url": "_site/mixpanel/index.html",
    "revision": "04fc3f2eb243610c4e058dc9f8629d6a"
  },
  {
    "url": "_site/p/2/index.html",
    "revision": "0e3d6867050235c01d1bfe309753e6d2"
  },
  {
    "url": "_site/pipz/index.html",
    "revision": "d2ccfaeef3fc59f3db7881349d16d673"
  },
  {
    "url": "_site/ramper/index.html",
    "revision": "381ff13b1dc715f2ad3ea3ac33be9c1d"
  },
  {
    "url": "_site/rdstation/index.html",
    "revision": "15053df16444f1ee1c716c0f6d768603"
  },
  {
    "url": "_site/reev/index.html",
    "revision": "c934aabc2e26a951bcd5a2ee5c9e0f28"
  },
  {
    "url": "_site/sobre/index.html",
    "revision": "e2eb7b4ab09fd4e39035b542da700749"
  },
  {
    "url": "_site/sw.js",
    "revision": "af420de1bd95c8066544f974359f796b"
  },
  {
    "url": "_site/trello/index.html",
    "revision": "a32007a6eca7f0c8a31481493d253135"
  },
  {
    "url": "_site/woodpecker/index.html",
    "revision": "376e79b33801b410e51b2863e2786f5a"
  },
  {
    "url": "_site/workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "404.html",
    "revision": "b1d41b7c9d9928f63618dbf0537277f7"
  },
  {
    "url": "assets/javascripts/bundle.js",
    "revision": "157f1d4054334e5b580c44fc5152ac65"
  },
  {
    "url": "assets/javascripts/vendor.js",
    "revision": "94b85c858278f5ec1efeabf573dda245"
  },
  {
    "url": "assets/stylesheets/bundle.css",
    "revision": "94843487b28a0091278108de589fae20"
  },
  {
    "url": "config.js",
    "revision": "c49faf6d9b8a688abbf69590d13217fe"
  },
  {
    "url": "gulpfile.js",
    "revision": "a20ba2e43669b7b590f9ad7dd2747109"
  },
  {
    "url": "html/index.html",
    "revision": "7d92ad57f49755321483d56b78be9184"
  },
  {
    "url": "index.html",
    "revision": "ce8845aa0334657c5e5dad62d37f9cdd"
  },
  {
    "url": "src/scripts/app.js",
    "revision": "42aec0ed448a2fc2c3154104398d552a"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
