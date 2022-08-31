'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3ec49696502b39f8b28cb3d477b80b8e",
".git/config": "aa287f527c59cb73d3ee8ed8c3789155",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f13e42210f5ad638d3b6c373a902a9c2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec63b9816d386c8ef721dbed7b2ec282",
".git/logs/refs/heads/master": "ec63b9816d386c8ef721dbed7b2ec282",
".git/logs/refs/remotes/origin/master": "af74b1ff3f0738988f091bc5292bc2d2",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/b2f86dc67bc30b6e1848697bd360cb77241209": "4ba9b381128eee12bad0f635d9c64432",
".git/objects/07/fa709f31541b4bfc86c36081185a417c1530f3": "4e2c8aae83b7f45a376e0c2be5f01987",
".git/objects/10/3031608581d0e868c923a31713421dfcc2b1f7": "31a9caffebb3863380a8cab556a07a4a",
".git/objects/1c/bde27a685912958ad89bf56133a61c0b7b8edb": "3024b2d101d1dee963203188185ac8b2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/57025e9339f2e83bbfaccdfea642ef7c6e437f": "caef96c2651d79b3ffe2d806ff7dd585",
".git/objects/23/f31e4aa2d4e7693d76b8e4b4eb41c36351b493": "53a770cb80e4b45a8fdce26619ea5546",
".git/objects/2d/488919dc5707d029d5cfd1c76bddd75dd9dfd5": "7e949b45febff21ce995afa67ef5a9ab",
".git/objects/3d/95f47b00af6e87a6d0f8ad442006cf757592d5": "98b13137385be1d504a0bacd5e5bcbc0",
".git/objects/3d/d1c5604a13d3d10513ea4c29a958e6e38479cc": "438af1cac298684502107c7a9feb9332",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4e/de048b5498a6289476a7478576ecc48597454f": "7ea97ee14f43a7020ec671fdf663c687",
".git/objects/51/453549918a5fb00b32a3ef185d774c2ad28da1": "94f1b8b679fc1ab89119a460165f0951",
".git/objects/54/9c6e85026857fa7affe2dc9349ef37d4879acf": "e3a99d6c90b6507d63e21a6bb131cbea",
".git/objects/56/4cdee398b5a53c5bb61990676cbb74c3d989fe": "c0bf1f75c88a46e7ab7ec9d7b8861262",
".git/objects/5d/16d2bdfdfeb0a7c1266aeed2a32588f8ccf4ff": "267ce657329b27528b23f0d04765bcca",
".git/objects/61/f413bd017984c0c6378dbe2e173d229da5e5b3": "28535cc515e6705ad0068944b7f7d318",
".git/objects/66/a8d7ae97541905d898df1e9dccd7bea18c5158": "9d7f7182b71243619312300efe456b26",
".git/objects/70/6aa9fe6cfb29f6ea768604da27d58c51da977d": "eba76b7be6b66ffeaebe81d32a3bb652",
".git/objects/77/18a10c7dfbf7b4e9760acfc93f08101f6fdd8a": "7e0b444f27d71cb61aef7ea1e91c88a4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/a8d4ed12676c5b89b2094d61de476c5094bd89": "512e08088e606a392fb1832f604e1b11",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5cac07895adedc62c98f8d0ed0e1bbf1655214": "7c2a84bd784b13ed63cace5d617b8058",
".git/objects/92/cbc77718985cf799e3072df2158afc7430cb94": "7a064188249be19232c40380a155ad51",
".git/objects/9d/8206dc7d96f137c12baef295cfd8ab09f7939c": "71aeaef589b43c3742a0fd6a507140db",
".git/objects/9e/a5c1e457df1def26c7c0fda5f0f956b3dd35d0": "2227516b2950e1ae2f03103b60787f2d",
".git/objects/9f/26eca199ebb22f550cd10875fa975ff46570d3": "c97025c4c9647140448da9caaf032120",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/6b692849fed5f928c6597795e2e945bef75b43": "ecf5b103049fb4a7838de49e81b33ff8",
".git/objects/a7/ae5533b5526dbf6c3eb0b3e5116372e2b3b5c1": "5ad5f777dfadd78ebf341d845717b623",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/21ea14201f40063777cb03790a25d41c9f3ceb": "2f3c0da3b5d1671ef6a56752ff2f6919",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3d5f96f156105592fe9ca37e5b9a40b4f8e252": "bb4af91076fcc7a6d8db7ae651473ded",
".git/objects/bc/15011567416806e22bfa21c1465d7b358c0300": "cbdbe2eeb18683c129ebe1dccbb5d829",
".git/objects/bc/c0d6a684d6f9ff5b7bb5f8cefe2ab92cd50e1b": "774bd9522a390ef628375061de7c7662",
".git/objects/c2/7d70d3cc8cc48c441973b0231b0a70c0afc48f": "c621cd1d4c4663969b4b98cce265f319",
".git/objects/c4/99cf4e966fa13f08417abffcc301ae258a52c2": "0e3a2a5eb213fbdf48dc03dd39a26899",
".git/objects/c6/388c73c0979b37e9140c66065805d3b2cdf0af": "1560ab8c6f02b792ab07e2ac8dfcce03",
".git/objects/ca/6ebaba586a81ad904001cad7e2df7579ab5585": "e5638422ccc7483fdc9017ff28e932a1",
".git/objects/ce/5721b1143bcd7c227c6928406a1ea9edae65c7": "509cac83d69cf30f92cd8776573abc20",
".git/objects/ce/60fb7678284602c3c09d96651c58dc386a0345": "345d103c9e5222b5895c5ab34c1ce3cc",
".git/objects/cf/7c9c372675e5f9d2701800aac0619d3a7a5d93": "8fb88d352c110ecc5b0f49fdce803e55",
".git/objects/d4/96ea411b0437a04c165bbc2f2798900d84418e": "adef6f329db7df1c5d68df97f47e2674",
".git/objects/e0/735830f85f7b2a19fdfe6abe28a63b66b0f0b1": "c30131ba2644febdc6dfb390c19b1f8f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/7f3fe8bae3405e81a488c931468bd184a6bef1": "b454daec946abbb91bb0427d7df00c8c",
".git/objects/f1/dc823d2eae649b50d2f7ccc26013971c85a17d": "fc36cd18f79a499296ab44cf4afd04b3",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/762584505dafae2cea8480bae7e79bed605858": "efec25acf0f666f395903ebc92f62cda",
".git/objects/f4/c9e7904af41b4eed892ae2d434e70be01086a6": "de90a4d0df53246a4daf99902967a961",
".git/objects/f8/6ae59080b5bab86d89015f4e22c06806a9e8b0": "6077c20c6d328370285c534a005de084",
".git/refs/heads/master": "9a9d445e12e07d180b20f4a6e9123bb8",
".git/refs/remotes/origin/master": "9a9d445e12e07d180b20f4a6e9123bb8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1e73320490355e62fa1e848ba074c198",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "790fb8c44514c479a65313242bcf410f",
"/": "790fb8c44514c479a65313242bcf410f",
"main.dart.js": "8fcbec15c8bf85c28d7ed62b510e8f43",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
