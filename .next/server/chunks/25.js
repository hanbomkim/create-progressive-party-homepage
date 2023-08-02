"use strict";
exports.id = 25;
exports.ids = [25];
exports.modules = {

/***/ 25:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/Container.style.ts

const Layout = (styled_default()).div`
  height: auto;
`;
const Main = (styled_default()).main`
  min-height: calc(100vh - 110px - 112px);
  display: flex;
  align-items: center;
  margin-top: 110px;

  .contents {
    padding: 2rem 1rem;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

;// CONCATENATED MODULE: ./src/components/Footer.style.ts

const FooterContainer = (styled_default()).footer`
  height: 112px;
  padding: 24px 12px;
  text-align: center;
  width: 100%;
  border-top: 1px solid var(--border-color);
`;
const FooterUnderline = (styled_default()).div`
  max-width: 720px;
  margin: 0 auto;
`;
const Copyright = (styled_default()).div`
  color: var(--text-base-90);
  font-size: 1.3rem;
`;

;// CONCATENATED MODULE: ./src/components/Footer.tsx


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx(FooterContainer, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(FooterUnderline, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Copyright, {
                children: "국민주권당(준)"
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Container.tsx




const Nav = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\Container.tsx -> " + "./Nav"
        ]
    },
    ssr: false
});
function Container({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "contents",
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;