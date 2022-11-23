"use strict";
exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 7060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(825);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6494);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const CREATE_SUBMISSION = (graphql_tag__WEBPACK_IMPORTED_MODULE_4___default())`
  mutation CREATE_SUBMISSION(
    $firstName: String!
    $lastName: String!
    $fianceFirst: String!
    $mobilePhone: String!
    $email: String!
    $eventDate: DateTime
    $venue: String!
    $serviceRequested: String
    $additionalInfo: String
  ) {

    createSubmission(
      data: {
    firstName: $firstName
    lastName: $lastName
    fianceFirst: $fianceFirst
    mobilePhone: $mobilePhone
    email: $email
    venue: $venue
    eventDate: $eventDate
    serviceRequested: $serviceRequested
    additionalInfo: $additionalInfo
    }
  ) {
    id
    firstName
    lastName
    fianceFirst
    mobilePhone
    email
    venue
    eventDate
    serviceRequested
    additionalInfo
  }
  }
`;
const loading = styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;
const ThankYouMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-eff9cc23-0"
})`
width: 100%;

position: relative;
background:  ${(props)=>props.theme.primary};
  margin: 30px auto 110px;
display: flex;
flex-flow: column;
justify-contents: center;
align-items: center;
text-align: center;
user-select: none;
h4 {
  font-family: 'Tomatoes';
  width: 60%;
  margin: 30px auto 10px;
  opacity:.6;
  line-height: 20px;
font-size: 30px;
  color: ${(props)=>props.theme.third};
}
p {
      font-family: 'Comfortaa';
  line-height: 14px;
  letter-spacing: 3px;
  font-size: 16px;
  }
  span {
    font-family: 'Comfortaa';
line-height: 14px;
letter-spacing: 3px;
font-size: 18px;}


`;
const Layout = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-eff9cc23-1"
})`
  width: 100%;

position: relative;

  margin: 100px auto 50px;
display: flex;
flex-flow: column;
justify-contents: center;
align-items: center;
text-align: center;

.getintouch {
  font-family: 'Comfortaa';
  width: 80%;
  opacity:.6;
  letter-spacing: 3px;
  color: ${(props)=>props.theme.third};
  margin-bottom:20px;
  text-transform: uppercase;

  @media (min-width: 0px) and (max-width: 768px) {
  display: none;
  }

}

.line {
  background: ${(props)=>props.theme.second};
  height: 2px;
  width: 250px;
  margin-bottom: 10px;
  opacity:.3;
  @media (min-width: 0px) and (max-width: 768px) {
    display: none;
    }
}
.line2 {
  background: ${(props)=>props.theme.second};
  height: 2px;
  width: 150px;
  margin-bottom:70px;
  opacity:.3;
  @media (min-width: 0px) and (max-width: 768px) {
    display: none;
    }
}

`;
const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default().form.withConfig({
    componentId: "sc-eff9cc23-2"
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  width:60%;

  min-width: 500px;
  background: white;

  margin: 0px auto;

  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  position: relative;
  @media (min-width: 0px) and (max-width: 768px) {
    min-width: 340px;
    width: 90%;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    }
  &:after {
    content: 'Get In Touch';
    position: absolute;
    font-family: 'Amelaryas';
    font-size: 40px;
    transform: rotate(90deg);
    top:155px;
    right: -240px;
    margin: 0 auto;
    color: ${(props)=>props.theme.second};
    @media (min-width: 0px) and (max-width: 768px) {
      display: none;

       }
  }
  &:before {
    display: none;

    @media (min-width: 0px) and (max-width: 768px) {
      display: block;

    content: 'Get In Touch';
    position: relative;
    font-family: 'Amelaryas';
    font-size: 30px;
    transform: translateY(-20px);
    top: 0px;
line-height: 15px;

    color: ${(props)=>props.theme.second};

       }
  }
  .side-one {
    grid-column: 1;
  }
  .side-two {
    grid-column: 2;
    @media (min-width: 0px) and (max-width: 768px) {
     grid-column: 1;
      }
  }
  .both-sides {
    grid-column: 1/3;
  }
  .error-msg {
    line-height: 10px;
    font-size: 10px;
    margin: 0;
    color: red;
    position: absolute;
    transform: translateY(-30px);
  }
  label {
    display: block;
    line-height: 18px;

    margin: 0 auto;
    text-align: left;
    width: 100%;
    font-family: 'Comfortaa';
    opacity: 0.7;
    position: relative;
    letter-spacing: 3px;
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-bottom: ${(props)=>props.errormsg && props.errormsg.type.length > 1 ? "20px" : "0px"};
    color: ${(props)=>props.theme.second};
  }
  .placeholder_option {
    color: rgba(255,255,255,.5);
  }
  .getintouch-smallscreen {
    display: none;
    font-family: 'Comfortaa';

  opacity:.6;
  letter-spacing: 3px;
  color: ${(props)=>props.theme.third};
  margin-bottom:20px;
  text-transform: uppercase;

  @media (min-width: 600px) and (max-width: 768px) {
    display: block;
    grid-column: 1;
  font-size: 11px;
  }
  @media (min-width: 0px) and (max-width: 599px) {
    display: block;
    font-size: 9px;
    grid-column: 1;
    width:100%;
    }
  }
  input,
  select {
    padding-left: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    font-size: 1.5rem;
    margin-bottom: 30px;

    font-family: 'Comfortaa';
    background: transparent;
    border-radius: 3px;
    border: 2px solid ${(props)=>props.theme.primary};
    /* border-radius: 5px; */
    /* margin-top: 0.8rem; */
    width: 100%;
    &:focus {
      outline: 0;
      border: 2px solid ${(props)=>props.theme.second};
    }
  }
.theSelector {
  grid-column: 1/3;
}
  .button-52 {
    font-size: 16px;
    font-weight: 200;
    color: black;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 13px 20px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
&:after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: 1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
&:hover:after {
    top: 0px;
    left: 0px;
  }
}

  @media (min-width: 768px) {
    .button-52 {
      padding: 13px 50px 13px;
    }
  }
}

.button-48 {
  appearance: none;
  border-width: 0;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
   font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: .3em;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 1.5em 2.2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),background-color 100ms cubic-bezier(.694, 0, 0.335, 1),color 100ms cubic-bezier(.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
  grid-column: 1;
  width: 120px;
  height: 40px;
  justify-self: left;
  background-color: ${(props)=>props.theme.primary};
font-family: 'Comfortaa';
}

.button-48:before {
  animation: opacityFallbackOut .5s step-end forwards;
  backface-visibility: hidden;
  background-color: #bea8a7ff;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
  width: 100%;
}

.button-48:hover:before {
  animation: opacityFallbackIn 0s step-start forwards;
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

.button-48:after {
  background-color: #FFFFFF;
}

.button-48 span {
  z-index: 1;
  position: relative;
}
.submit-button {
  border-radius: 5px;
  text-align: center;
  color: black;
  grid-column: 2;
  width: 50%;
  display: flex;
justify-self: right;
transition:  0.7s;
height: 30px;
  justify-content: center;
  text-transform: uppercase;
  font-family: 'Comfortaa';
  align-items: center;
line-height: 8px;
padding: 8px 2px;
&:hover {
  cursor: pointer;
  box-shadow: 0px 4px 6px -3px rgba(20,20,20,.1);
  // transform: scale(1.1);
}
}
  textarea {
    resize: none;
    min-height: 100px;
    margin-top: 0px;
    font-family: 'Comfortaa';
    font-size: 20px;
    border-radius: 3px;
    border: 2px solid ${(props)=>props.theme.primary};
    width: 100%;
    padding-left: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    font-size: 1.5rem;
    margin-bottom: 20px;
    background: transparent;

    &:focus {
      outline: 0;
      border: 2px solid ${(props)=>props.theme.second};
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    margin-top: 1rem;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      margin-bottom: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        ${(props)=>props.theme.second} 0%,
        ${(props)=>props.theme.primary} 50%,
        ${(props)=>props.theme.second} 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;
function ContactForm() {
    const { register , handleSubmit , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
    const [createSubmission, { data , loading , error  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(CREATE_SUBMISSION, {
    });
    console.log(errors);
    const onSubmit = async (data)=>{
        await createSubmission({
            variables: {
                firstName: data.firstName,
                lastName: data.lastName,
                fianceFirst: data.fianceFirst,
                email: data.email,
                venue: data.venue,
                mobilePhone: data.mobileNumber,
                serviceRequested: data.serviceRequested,
                additionalInfo: data.additionalInfo
            }
        });
    };
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: "loading"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Layout, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "line"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "getintouch",
                    children: [
                        "Please send inquiries with the following form ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "I look forward to speaking with you!  "
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "line2"
                }),
                data && !loading && !error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ThankYouMessage, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                            children: [
                                "Thank you ",
                                data.firstName && data.firstName
                            ]
                        }),
                        "   ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Your inquiry has been sent!",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "  Please expect a response in the next ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "48"
                                }),
                                " hours "
                            ]
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Form, {
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "getintouch-smallscreen",
                            children: [
                                "Please send inquiries with the following form ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "I look forward to speaking with you!  "
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            htmlFor: "firstname",
                            className: "side-one",
                            children: [
                                "First Name",
                                errors.firstName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "error-msg",
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    errormsg: errors.firstName,
                                    name: "firstname",
                                    type: "text",
                                    "aria-invalid": errors.firstName ? "true" : "false",
                                    ...register("firstName", {
                                        required: true,
                                        maxLength: 80
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            htmlFor: "lastname",
                            className: "side-two",
                            children: [
                                "Last Name",
                                errors.lastName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "error-msg",
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    errormsg: errors.lastName,
                                    name: "lastname",
                                    type: "text",
                                    ...register("lastName", {
                                        required: true,
                                        maxLength: 100
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            htmlFor: "fianceFirst",
                            className: "side-one",
                            children: [
                                "Fiance's name",
                                errors.fianceFirst && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "error-msg",
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    errormsg: errors.fianceFirst,
                                    name: "fianceFirst",
                                    type: "text",
                                    ...register("fianceFirst", {
                                        required: true
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            htmlFor: "email",
                            className: "side-two",
                            children: [
                                "Email",
                                errors.email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "error-msg",
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    errormsg: errors.email,
                                    name: "email",
                                    type: "text",
                                    ...register("email", {
                                        required: true,
                                        pattern: /^\S+@\S+$/i
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            htmlFor: "mobileNumber",
                            className: "side-one",
                            children: [
                                "Mobile Number",
                                errors.mobileNumber?.type === "required" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "error-msg",
                                    children: "This field is required"
                                }) : "",
                                errors.mobileNumber?.type === "minLength" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "error-msg",
                                    children: "Must be 10 digit number"
                                }) : "",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    errormsg: errors.mobileNumber,
                                    name: "mobileNumber",
                                    type: "tel",
                                    ...register("mobileNumber", {
                                        required: true,
                                        minLength: 10,
                                        maxLength: 16,
                                        pattern: ".?(\\d{3}).*(\\d{3}).*(\\d{4})"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            htmlFor: "date",
                            className: "side-two",
                            children: [
                                "Date of Wedding",
                                errors.date && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "error-msg",
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    errormsg: errors.date,
                                    name: "date",
                                    type: "datetime",
                                    ...register("date", {
                                        required: true
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            className: "theSelector",
                            htmlFor: "serviceRequested",
                            children: [
                                "Planning Package",
                                errors.serviceRequested && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "error-msg",
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                    errormsg: errors.serviceRequested,
                                    name: "serviceRequested",
                                    type: "text",
                                    ...register("serviceRequested", {
                                        required: true
                                    }),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "fullService",
                                            children: "Full Service Planning + Styling"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "partial",
                                            children: "Partial Planning"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "coordination",
                                            children: "Wedding Management + Coordination"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            value: "tbd",
                                            children: "I Need to Ask Some Further Questions Regarding Your Services"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            htmlFor: "venue",
                            className: "both-sides",
                            children: [
                                "Venue",
                                errors.venue && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "error-msg",
                                    children: "This field is required"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    name: "venue",
                                    type: "text",
                                    placeholder: "If you don't have a venue, briefly describe what you're looking for",
                                    ...register("venue", {
                                        required: true
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                            htmlFor: "additionalInfo",
                            className: "both-sides",
                            children: [
                                "Any Additional Information?",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    ...register("additionalInformation", {}),
                                    name: "additionalInfo",
                                    type: "text",
                                    placeholder: "Is there anything else you'd like to share?"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            type: "submit",
                            className: "button-48",
                            role: "button",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text",
                                    children: "Submit "
                                }),
                                " "
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const loader = styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes`
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
`;
const Loadz = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-fe580b69-0"
})`
  .loading-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

  }

  .loading-text {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    color: #999;
    width: 100px;
    height: 30px;
    margin: ${(props)=>props.name ? "-7px 0 0 48px" : "-7px 0 0 -34px"};
    line-height: 12px;

    text-align: center;
    font-size: 14px;
  }

  .loading-content {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;  z-index:999999;
    width: 170px;
    height: 170px;
    margin: -85px 0 0 -85px;
    border: 3px solid #f00;
    &:after {
      content: '';
      position: absolute;
      border: 3px solid #0f0;
      left: 15px;
      right: 15px;
      top: 15px;
      bottom: 15px;
    }
    &:before {
      content: '';
      position: absolute;
      border: 3px solid #00f;
      left: 5px;
      right: 5px;
      top: 5px;
      bottom: 5px;
    }
  }
  .loading-content {
    border: 3px solid transparent;
    border-top-color: ${(props)=>props.theme.primary};
    border-bottom-color: ${(props)=>props.theme.primary};
    border-radius: 50%;
    animation: ${loader} 2s linear infinite;
    &:before {
      border: 3px solid transparent;
      border-top-color: ${(props)=>props.theme.second};
      border-bottom-color: ${(props)=>props.theme.second};
      border-radius: 50%;
      animation: ${loader} 3s linear infinite;
    }
    &:after {
      border: 3px solid transparent;
      border-top-color: ${(props)=>props.theme.third};
      border-bottom-color: ${(props)=>props.theme.third};
      border-radius: 50%;
      animation: ${loader} 1.5s linear infinite;
    }
  }

  .content-wrapper {
    color: #fff;
    position: fixed;
    left: 0;
    top: 20px;
    width: 100%;
    height: 100%;
  }
`;
const Loader = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Loadz, {
        className: "loading-wrapper",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loading-text",
                children: props.name ? props.name : props.loader
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "loading-content"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ })

};
;