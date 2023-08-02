(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/fonts.css
var fonts = __webpack_require__(361);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: ./src/data/metadata.ts
const metadata = {
    meta: {
        url: "www.jugwon.kr",
        title: "(가칭)국민주권당 준비위원회",
        description: "(가칭)국민주권당의 당원이 되어주세요."
    }
};
/* harmony default export */ const data_metadata = (metadata);

;// CONCATENATED MODULE: ./next-seo.config.js

const SEO = {
    titleTemplate: "국민주권당 - %s",
    defaultTitle: data_metadata.meta.title,
    description: data_metadata.meta.description,
    canonical: data_metadata.meta.url,
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: data_metadata.meta.url,
        site_name: data_metadata.meta.title,
        images: [
            {
                url: `${data_metadata.meta.url}/imgs/landing1stImage.png`,
                width: 850,
                height: 650,
                alt: `jugwon.kr`
            }
        ]
    }
};
/* harmony default export */ const next_seo_config = (SEO);

;// CONCATENATED MODULE: ./src/pages/_app.tsx




// import { Suspense } from "react";

function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
                ...next_seo_config
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 361:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(464));
module.exports = __webpack_exports__;

})();