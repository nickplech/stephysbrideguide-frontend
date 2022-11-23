"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_HeroSlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-awesome-slider"
var external_react_awesome_slider_ = __webpack_require__(6318);
var external_react_awesome_slider_default = /*#__PURE__*/__webpack_require__.n(external_react_awesome_slider_);
;// CONCATENATED MODULE: external "react-awesome-slider/dist/autoplay"
const autoplay_namespaceObject = require("react-awesome-slider/dist/autoplay");
var autoplay_default = /*#__PURE__*/__webpack_require__.n(autoplay_namespaceObject);
;// CONCATENATED MODULE: ./components/HeroSlider.js





const fadeOut = external_styled_components_.keyframes` {
  from { opacity: 1.0; }
  to   { opacity: 0.0; }
}`;
const fadeIn = external_styled_components_.keyframes` {
  from { opacity: 0.0; }
  to   { opacity: 1.0; }
}`;
const scroller = external_styled_components_.keyframes` {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}`;
const SliderDiv = external_styled_components_default().div.withConfig({
    componentId: "sc-3287dd62-0"
})`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;

  .shorten {
    height: 100vh;
  }
  .arrow {
    height: 50%;
  }
  .awssld__bullets {
    transform: translateY(-50px) scale(0.6);
    z-index: 100;
    color: rgba(222, 222, 222, 0.7);
  }
  .awssld__bullets button {
    background: rgba(222, 222, 222, 0.8);
  }
  .awssld__bullets--active {
    transform: scale(1.2);
  }

  a {
  padding-top: 0px;
  position: absolute;
  bottom:  0px;

  z-index: 800;
  display: flex;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #503931;
  font : normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
width: 100px;
height: 100px;
&:hover {
  cursor: pointer;
}
  }
   span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 2px solid #503931;
    border-bottom: 2px solid #503931;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: ${scroller} 3s infinite;
    animation: ${scroller} 3s infinite;
    box-sizing: border-box;

  }
  .aws-btn {


    --loader-bar-color: rgba(255,255,255,0);
    --loader-bar-height: 0px;
    }
  .awssld--animated {
    will-change: opacity;
    visibility: visible; }
  .awssld--moveRight {
    animation: ${fadeIn} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95) ;
  }
  .awssld--moveLeft {
    -webkit-animation:  ${fadeIn} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95);
            animation:  ${fadeIn} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95); }
  .awssld--exit {
    z-index: 0; }
    .awssld--exit.awssld--moveLeft {
      -webkit-animation:  ${fadeOut} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95);
              animation:  ${fadeOut} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95); }
    .awssld--exit.awssld--moveRight {
      -webkit-animation:  ${fadeOut} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95);
              animation:  ${fadeOut} 3s cubic-bezier(0.5, 0.075, 0.25, 0.95); }
   .awssld__timer {
               opacity: 0;
              }
`;
const Opaque = external_styled_components_default().div.withConfig({
    componentId: "sc-3287dd62-1"
})`
opacity: 1;
position: absolute;
width: 100%;
height: 100%;
background: rgba(245,245,245,.5);
z-index: 50;
`;
const Title = external_styled_components_default().div.withConfig({
    componentId: "sc-3287dd62-2"
})`
  display: flex;
  // width: 100%;

  position: absolute;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 60;
  letter-spacing: 4px;

 color: ${(props)=>props.theme.black};


  .box {



    display: flex;
    flex-flow: column;
    justify-contents: center;
    align-items: center;
    text-align: center;
margin: 0 auto;

  }
  img {
    width: 400px;
    display: flex;
    margin: 0 auto;
    transform: translateX(-2px)  ;
    @media (min-width: 0px) and (max-width: 768px) {
      width: 90%;
      max-width: 400px;
    }
  }


  h2 {
    font-size: 1em;
color: #000000;
    font-family: 'Comfortaa';
    width: 100%;
    text-align: center;
text-transform: uppercase;
font-weight: 900;

  }

  .arrow-down {
    width: 33px;
    height: 33px;
    border: 3px solid #333;
    border-left: 0;
    border-top: 0;
bottom: 0;
     transform: rotate(45deg);
     &:hover {
       cursor: pointer;
     }
  }
`;
const AutoplaySlider = autoplay_default()((external_react_awesome_slider_default()));
const HeroSlider = function(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SliderDiv, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/../static/stephysbrideguidelogodarkbrown.png",
                            alt: "stephys bride guide"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "wedding planning | styling | coordination"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Opaque, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AutoplaySlider, {
                className: "shorten aws-btn",
                play: true,
                cancelOnInteraction: false,
                buttons: false,
                bullets: false,
                interval: 10000,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-src": "/../static/stephysbrideguide-olivia.jpeg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-src": "/../static/stephysbrideguide-alexa.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-src": "/../static/stephysbrideguide-tristan-olivia.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-src": "/../static/stephysbrideguide-julya-jack.JPG"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-src": "/../static/stephysbrideguide-noel-david.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-src": "/../static/stephysbrideguide-heather-tablescape.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-src": "/../static/stephysbrideguide-bouqet.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        "data-src": "/../static/stephysbrideguide-heather-drew.jpg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "scroll-down-button",
                onClick: props.arrowClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
            })
        ]
    });
};
/* harmony default export */ const components_HeroSlider = (HeroSlider);


/***/ }),

/***/ 7175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeroSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2625);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7060);
/* harmony import */ var _Reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(494);
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7040);
/* harmony import */ var _Instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ContactForm__WEBPACK_IMPORTED_MODULE_3__]);
_ContactForm__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function HomePage() {
    // const inquiryRef = useRef(null)
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const arrowClick = ()=>{
        ref.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    console.log(arrowClick);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HeroSlider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                arrowClick: arrowClick
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Intro__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ref: ref
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Reviews__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ContactForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Instagram__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Instagram)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const Div = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-3fe4bb15-0"
})`
width: 80%;



margin: 50px auto;
position: relative;
margin-bottom:30px;
@media (min-width: 361px) and (max-width: 900px) {

    width: 90%;
}
.lightwidget__lightbox-caption {
    font-family: 'Comfortaa';
}
iframe .lightwidget__lightbox-caption {
    font-family: 'Comfortaa';
}
p {


font-family: 'Comfortaa';
width: 80%;
opacity:.6;
letter-spacing: 3px;
color: ${(props)=>props.theme.third};
margin-bottom:20px;
text-transform: uppercase;
}
`;
const styles = {
    width: "100%",
    border: 0
};
function Instagram() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Div, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                src: "https://cdn.lightwidget.com/widgets/lightwidget.js"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                src: "//lightwidget.com/widgets/8a7bafaa68d0564c98fd89d193228571.html",
                scrolling: "no",
                allowtransparency: "true",
                className: "lightwidget-widget",
                style: styles
            })
        ]
    });
};


/***/ }),

/***/ 7040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const SectionBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-e72ac477-0"
})`
display: flex;

flex-flow: column;
margin: 150px auto 90px;
justify-content: center;
align-items: center;

.top {
min-width: 320px;
width: 60%;
max-width: 900px;
  text-align: center;



  opacity:.6;
  letter-spacing: 3px;
  color: ${(props)=>props.theme.third};

  text-transform: uppercase;

}
.line {
  background: ${(props)=>props.theme.second};
  height: 2px;
  width: 250px;

  opacity:.3;
}
.line2 {
  background: ${(props)=>props.theme.second};
  height: 2px;
  width: 150px;
  margin-bottom:70px;
  opacity:.3;
}

`;
const Services = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-e72ac477-1"
})`
display: grid;
  grid-template-columns: 45% 1fr;
  width: 100%;
  margin-bottom: 160px;
  align-items: center;
  justify-content: center;
  background:  rgba(237, 222, 213, .4);
  position: relative;
  overflow: hidden;
  @media (min-width: 0px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .col {
    grid-column: 1;
    margin: 0 auto;
    padding: 20px;
    @media (min-width: 0px) and (max-width: 768px) {
      grid-column: 1;
      grid-row: 2;
    }

  }
  .right-align {
    text-align: right;
    @media (min-width: 0px) and (max-width: 768px) {
     text-align: left;
    }
  }
h2 {
  position: absolute;
  font-family: 'Amelaryas';
  font-size:40px;
  z-index: 50;
justify-self: left;

  line-height: 50px;
  transform: translateY(25px) translateX(10px);
  // color: ${(props)=>props.theme.third};
margin: 0;
@media (min-width: 0px) and (max-width: 768px) {
font-size: 30px;
}
}
  .col2 {
position: relative;
    grid-column: 2;
    display: grid;
    justify-content: right;
    align-items: top                     ;
    margin: 0 auto;

grid-row: 1;
@media (min-width: 0px) and (max-width: 768px) {
  grid-column: 1;
  grid-row: 1;
}
   }
  img {
    height: 500px;
    position: relative;

    overflow: hidden;
    margin: 60px auto;
    @media (min-width: 0px) and (max-width: 768px) {
     margin: 60px auto 10px;
    }
  }
  h3 {

    font-size: 12px;
    margin-bottom: 0;
    margin-top: 30px;
    color: #503931;
    font-family: 'Amelaryas';

  }
  p {
    font-size: 13px;
    line-height: 17px;
    color: #503931;
    padding-left: 20px;

  }

`;
const GoToMe = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-e72ac477-2"
})`
position: absolute;

height: 20px;
width: 20px;
`;
const Intro = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GoToMe, {
                ref: ref
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SectionBlock, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "line"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Helping couples put together an event that revolves around the love they share brings me so much joy. I feel honored to be able to provide my guidance, passion + industry knowledge to the couples I work with, always making it my priority to ensure a beautiful wedding day that will be cherished forever!"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "line2"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Services, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "right-align",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "Full Service Planning & Design"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "For couples who would like guidance throughout the wedding planning process including securing and managing a dream team of vendors, keeping you on track with budget, monthly to do lists and assistance with every design detail along the way bringing your vision to life."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "right-align",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "  Partial Planning"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "For the couples who have started planning but need assistance securing the rest of your vendors and pulling together a cohesive vision and help filling in the missing pieces! "
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "right-align",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: " Wedding Management & Coordination"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Enjoy the final months leading up to your wedding and know all the remaining tasks and logistics will be handled by me. All your hard work planning can be confidently handed over to me to be executed and ensure a flawless wedding day. You can probably write the coordination package best since you help so much the day of."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Planning Services"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/../static/stephysbrideguide-terranea.png",
                                alt: "invitation suite picture"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);


/***/ }),

/***/ 494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6318);
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider__WEBPACK_IMPORTED_MODULE_3__);






const SectionBlock = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-664c34b-0"
})`
width: 100%;
display: flex;
position: relative;
.small-screen {
  display: none;
   @media (min-width: 0px) and (max-width: 768px) {
     display: block;
    font-size: 30px;
    position: absolute;
    font-family: 'Amelaryas';
    margin: 0;
    z-index: 50;
     transform: translateY(-45px) translateX(10px);
   }
}

`;
const SliderDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-664c34b-1"
})`
  width: 100%;
position: relative;
  display: grid;
  grid-template-columns: 1fr 40%;
  justify-content: center;
  align-items: top;
  @media (min-width: 0px) and (max-width: 768px) {
    display: flex;
    flex-flow: column;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
 }
  .shorten {
    height: 100%;
    @media (min-width: 0px) and (max-width: 768px) {
   grid-row: 1;
   height: 300px;
   }
  }

  .awssld__bullets button {
    transform: translateY(-45px);
    z-index: 300;
    transition: .5s;
width: 10px;
height: 10px;
&:hover {
  transform:translateY(-45px) scale(1.1);
}
      }


  .awssld__controls button {
top: 94%;
@media (min-width: 0px) and (max-width: 768px) {
  top: 90%;

   }
  }


          .large-screen {
                position: absolute;
                font-family: 'Amelaryas';
                font-size:45px;
                margin: 0;
                z-index: 50;
                 transform: translateY(-70px) translateX(20px);
                 @media (min-width: 0px) and (max-width: 768px) {
                display: none;

              }
              }
              .aws-btn {

                --control-button-opacity: 1;
                --organic-arrow-thickness: 2px;
                --organic-arrow-border-radius:0px;
                --organic-arrow-height: 20px;
                --organic-arrow-color: white;
                --control-button-width: 10%;
                --control-button-height: 8%;
                --control-button-background: rgba(0,0,0,.5);
                --control-bullet-color: rgba(245,245,245,.5);
                --control-bullet-active-color:  rgba(245,245,245,1);
                --loader-bar-color: rgba(255,255,255,0);
                --loader-bar-height: 0px;

                }
                .awssld__controls__arrow-left, .awssld__controls__arrow-right {
                  height: 10px;
                }
                .awssld__next,.awssld__prev {
                  height: 25px;
                  width: 80px;
                }
`;
const Slide = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-664c34b-2"
})`
position: relative;
z-index: 1;

`;
const TextSide = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-664c34b-3"
})`
display: flex;
flex-flow: column;
grid-column: 2;
padding: 0 30px;

justify-content: center;



@media (min-width: 0px) and (max-width: 768px) {
margin-top: 30px;
padding: 0 60px;

  }
.diane {
  display: block;
  font-family: 'Comfortaa';
  // text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 900;
  line-height: 17px;
  width: 100%;
  position: relative;
  text-align: left;
  z-index: 500;
  transform: translate3d(0, 0, 0);
  opacity: 1;
  color: ${(props)=>props.theme.third};
  transition: transform 0.45s cubic-bezier(0.15, 0.3, 0.15, 1), opacity 0.35s ease-out;
  @media (min-width: 0px) and (max-width: 768px) {

    text-align: center;
      }
  &:before {
    content: '            ';
    position: absolute;

    background-image: url("/../static/quotes.svg");
    background-repeat: no-repeat;

    height: 80px;
    width: 100px;
    background-color: transparent;
    transform: translateY(-30px) translateX(-10px);
    opacity: .3;
  }
}
.name {
  display: block;

  position: relative;
  font-size: 2.1rem;
  font-weight: 900;
color: ${(props)=>props.theme.third};
text-align: right;
  font-family: "Tomatoes";
  transform: translateY(-4px) translateX(-10px);
}
img {
  position: absolute;
  height: 80px;

  opacity: .3;
  transform: translateY(-30px) translateX(-10px);
}
`;
const data = [
    {
        name: "Diane Levy",
        text: "Stephy was an absolute dream to work with! She is everything that I wanted in a wedding planner + more. She gave us very helpful and detailed information, was always extremely communicative, helped calm me down when the stressful moments arose, and was there to navigate every aspect of my wedding. Nick, her husband was also amazing, extremely hardworking, and so great to work with. I am sad that my wedding is over and I won\u2019t be working with her anymore!! My special day seriously wouldn\u2019t have been what it was without stephy and I am forever grateful...100/100 !"
    },
    {
        name: "Noel Larson",
        text: "I can't say enough amazing things about sweet, sweet Stephy! The moment I got on an intro call with Stephy, I knew she was the one I wanted by my side through this wedding planning process. Not only is she amazing at what she does, she is truly the most genuine, selfless, kind, communicative, even-keeled and hard working person there is! Our wedding was pushed due to COVID and she always made me feel like I was her top priority, no matter where I was in the process. She was extremely organized and professional throughout the entire process, while also making me feel like I had a built in best friend along the way. Whenever I needed help or was feeling anxious about any planning decisions, she was always available to hop on a call, or chat via text or email. I was pretty much in contact with Stephy every single day for months leading up to the wedding. Towards the final months of the wedding planning process, I was so exhausted with making small decisions around decor items etc. and Stephy stepped in to help make final decisions on linens, chargers, day-of items, repurposing florals etc., I knew I could full trust her. She truly went above and beyond in every way and we're so grateful to her (and to her husband, Nick) for all of their help, support, and guidance over the past couple of years. I could go on and on, but in short, Stephy is the absolute best!"
    },
    {
        name: "Shannon Jackson",
        text: "I cannot recommend Stephy enough! I had been following Stephy\u2019s Bride Guide on instagram years before getting engaged, & had always dreamed of having a wedding as beautiful as those she had planned! After getting engaged, there was no easier choice than to hire Stephy as our planner. Our planning journey was so easy, enjoyable and stress free! She was available 24/7 for questions, and was so incredibly supportive through our wedding planning and replanning after our postponement (thanks covid!). Stephy has a wealth of knowledge and the best eye for design & went above and beyond with her duties on the day of! Our wedding day was more beautiful than I ever could\u2019ve imagined!! Thank you Stephy for making our wedding day so wonderful!"
    },
    {
        name: "Kristine Kollenda",
        text: "Stephy was the best wedding coordinator we could've possibly hired!!! We wanted to hire a 'month-of' coordinator to help finalize our plans already set in place and she provided service at least 3 months ahead of our wedding date. She was always available to take our calls, texts, and emails without hesitation or complaint! She helped us come up with ideas for decor and was always so kind and helpful! Literally, she went above and beyond what we hired her for! She is a true professional and our wedding couldn't have gone more perfectly at the Ole Hanson Beach Club! We can't thank her and her husband, Nick, enough for going above and beyond and making our wedding day perfect!"
    },
    {
        name: "Alexa Jesko",
        text: "I had briefly interviewed a few other planners, but once I talked with Stephy who was so warm and bubbly - I knew she was the one. From the beginning, Stephy was incredibly organized, professional, and communicative. It was clear to me she has great style and completely understood my wedding vision aesthetic, so I felt completely confident trusting her with any design input or ideas. Any time I had questions or wanted to meet with Stephy to talk through some details- she readily made herself available to hop on a call and help sort it out. When my first florist mock-up wasn't quite the look I had envisioned, Stephy graciously took over and communicated with the utmost professionalism to make sure we could get a redo of the mockup that we loved. Even when there was a last-minute hiccup with another vendor the day before the wedding- Stephy stepped in and truly saved the day. She helped our day go as seamlessly and perfectly as we could have imagined and helped bring our vision to life! I can't imagine this planning process without her- I would recommend Stephy without hesitation!"
    }
];
const Reviews = function() {
    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: selectedSlide , 1: setSelectedSlide  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    console.log(sliderRef.current && sliderRef.current);
    const changeText = (bride)=>{
        // const slideNumber = sliderRef.current?.
        console.log(bride.nextMedia.reviewtext);
        setSelectedSlide(bride.nextMedia.reviewtext);
    };
    // useEffect(() => {
    //   if (selectedSlide === null)  return
    //   console.log('useeffect')
    // changeText(selectedSlide)
    // }, [selectedSlide])
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SectionBlock, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "small-screen",
                children: "Client Sentiments"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SliderDiv, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "large-screen",
                        children: "Client Sentiments"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_awesome_slider__WEBPACK_IMPORTED_MODULE_3___default()), {
                        ref: sliderRef,
                        className: "shorten aws-btn",
                        play: false,
                        selected: true,
                        buttons: true,
                        bullets: true,
                        mobileTouch: true,
                        onTransitionRequest: changeText,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                reviewtext: 0,
                                "data-src": "/../static/stephysbrideguide-review.jpg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                reviewtext: 2,
                                "data-src": "/../static/stephysbrideguide-shannon-review-resize.jpg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                reviewtext: 1,
                                "data-src": "/../static/stephysbrideguide-noel-review-2.jpg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                reviewtext: 3,
                                "data-src": "/../static/stephysbrideguide-olivia-review.jpg"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                reviewtext: 4,
                                "data-src": "/../static/stephysbrideguide-alexa-review.jpg"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TextSide, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "diane",
                                children: data[selectedSlide].text
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "name",
                                children: data[selectedSlide].name
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reviews);


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7175);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_HomePage__WEBPACK_IMPORTED_MODULE_2__]);
_components_HomePage__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                title: "Stephys Bride Guide",
                description: "Wedding Planning, Styling + Coordination in Southern California.",
                canonical: "https://www.stephysbrideguide.com/"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HomePage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 825:
/***/ ((module) => {

module.exports = require("graphql-tag");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6318:
/***/ ((module) => {

module.exports = require("react-awesome-slider");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [60], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();