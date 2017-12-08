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
    "revision": "93ae2ce4ac968571116ef25903198136"
  },
  {
    "url": "_includes/head.html",
    "revision": "0c9649b9a9e713a6e59f350e42fd342b"
  },
  {
    "url": "_includes/header.html",
    "revision": "9f763a8410f70ee751230a5dfedfa4e0"
  },
  {
    "url": "_includes/pagination.html",
    "revision": "8813651d650c5a105148a3fd221f7ab6"
  },
  {
    "url": "_includes/search.html",
    "revision": "024cf8394b3865b652bd343ea1920ec6"
  },
  {
    "url": "_includes/sidebar.html",
    "revision": "e4cd0673ddebfd0d01939fd281ab9c68"
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
    "revision": "4af1d794a272892fe55c084e6f15954e"
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
    "url": "como-contribuir.html",
    "revision": "a166a5db186d3f566c01143cdf7936ee"
  },
  {
    "url": "config.js",
    "revision": "0f517d349b460218d14d69009ca7fafe"
  },
  {
    "url": "gulpfile.js",
    "revision": "c833053975589ab09056ca6c6596adbc"
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
