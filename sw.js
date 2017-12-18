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
    "revision": "b36cde93652bef15a63b211d3bcc2a4e"
  },
  {
    "url": "_includes/head.html",
    "revision": "8dd307493ac8a44ca9be4d8d469ffbdb"
  },
  {
    "url": "_includes/header.html",
    "revision": "8734ff306106635cc40adc6ccbf4f08f"
  },
  {
    "url": "_includes/pagination.html",
    "revision": "2bd59cbe38ad6d804a67d138e26987bf"
  },
  {
    "url": "_includes/search.html",
    "revision": "024cf8394b3865b652bd343ea1920ec6"
  },
  {
    "url": "_includes/sidebar.html",
    "revision": "7fd553b22fccee5cbe13cb83183a0689"
  },
  {
    "url": "_includes/toolsCard.html",
    "revision": "3b779587c6bf40f61240a4010f0c21fe"
  },
  {
    "url": "_layouts/category.html",
    "revision": "2fe96b17032f0e3e15657af529328033"
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
    "revision": "5bb27017da5d95faccf8d96a38cbc3f7"
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
    "revision": "a6e341bdb9d3a3e515767d36f18cca47"
  },
  {
    "url": "_site/categoria/allinone/index.html",
    "revision": "486546dbca161d46a33159fd2b5f1dc3"
  },
  {
    "url": "_site/categoria/analytics/index.html",
    "revision": "9ee12eafc1eda111557cd68a6d98b8d2"
  },
  {
    "url": "_site/categoria/gestao/index.html",
    "revision": "19e75eb31572e5fcb7aaa6fa49b22030"
  },
  {
    "url": "_site/categoria/repositorios/index.html",
    "revision": "b853116ba89caac9933c9be192c38092"
  },
  {
    "url": "_site/categoria/vendas/index.html",
    "revision": "cdacde70090f4945bd44f39ede34c99a"
  },
  {
    "url": "_site/contribuir/index.html",
    "revision": "beb58e5181ec709da6a1d6eda3e31e54"
  },
  {
    "url": "_site/index.html",
    "revision": "303ef3afd8f59e6de2bf43c579bb0776"
  },
  {
    "url": "_site/p/2/index.html",
    "revision": "a8be0a3720af740e3c0fa0de536b9d10"
  },
  {
    "url": "_site/sobre/index.html",
    "revision": "bdb7885a6f5893d3d75a95685799f25d"
  },
  {
    "url": "_site/sw.js",
    "revision": "5a7e687575c038003a4734bbbf6807e7"
  },
  {
    "url": "_site/welcome-to-jekyll.0/index.html",
    "revision": "b821201e084eb0b53d892d193f85005d"
  },
  {
    "url": "_site/welcome-to-jekyll.01/index.html",
    "revision": "b972b50138523e9e536411f7ffd93eb1"
  },
  {
    "url": "_site/welcome-to-jekyll.02/index.html",
    "revision": "7047c5b171249a0a589b26a2001982c3"
  },
  {
    "url": "_site/welcome-to-jekyll.03/index.html",
    "revision": "b34d0360327459c8801fd6a1d0af1c63"
  },
  {
    "url": "_site/welcome-to-jekyll.04/index.html",
    "revision": "4d31a5e3d0f3e29bb26dd9107cfc1d1e"
  },
  {
    "url": "_site/welcome-to-jekyll.05/index.html",
    "revision": "56327262408ed028d65477549d7c59e0"
  },
  {
    "url": "_site/welcome-to-jekyll.06/index.html",
    "revision": "6ed49d2a92553797a84d7fb0ad533bd1"
  },
  {
    "url": "_site/welcome-to-jekyll.07/index.html",
    "revision": "90f377c9b631c9290afd5cf8a3eaea1c"
  },
  {
    "url": "_site/welcome-to-jekyll.08/index.html",
    "revision": "b1026de530cc01b8e2adf0e9f6f476f5"
  },
  {
    "url": "_site/welcome-to-jekyll.09/index.html",
    "revision": "47308334b2a85b4a73daf2ef6930aae2"
  },
  {
    "url": "_site/welcome-to-jekyll.10/index.html",
    "revision": "f48948f9d942bddec5e2d2efaae8dff5"
  },
  {
    "url": "_site/welcome-to-jekyll.11/index.html",
    "revision": "4b919ea9518e0433846aaf6261037301"
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
    "revision": "ac975ed57d7f3e0dee27ad54cf5fe9c0"
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
