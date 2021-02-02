/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateaestheticreact"]("main",{

/***/ "./src/Components/Home/Home.js":
/*!*************************************!*\
  !*** ./src/Components/Home/Home.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _UserPage_Feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UserPage/Feed */ \"./src/Components/UserPage/Feed.js\");\n/* harmony import */ var _UserPage_UserCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UserPage/UserCard */ \"./src/Components/UserPage/UserCard.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n //SPLIT THIS UP LATER. SPLIT USER PROFILE LOAD INTO ONE COMPONENT, THEN SWITCH USER CONTENT LOAD INTO ANOTHER\n\nfunction Home(_ref) {\n  var currentUserId = _ref.currentUserId;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      profileOwnerInfo = _useState2[0],\n      setProfileOwnerInfo = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      feedArray = _useState4[0],\n      changeFeedArray = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      _useState6 = _slicedToArray(_useState5, 2),\n      isLoading = _useState6[0],\n      setLoading = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      _useState8 = _slicedToArray(_useState7, 2),\n      pfpUrl = _useState8[0],\n      setPfpUrl = _useState8[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var param, url;\n    fetch('http://localhost:80/api/userdetails', {\n      headers: {\n        'X-CSRF-TOKEN': document.getElementById('csrf-token').getAttribute('content'),\n        'Content-Type': 'application/json'\n      },\n      method: 'get',\n      mode: \"same-origin\",\n      credentials: \"same-origin\"\n    }).then(function (response) {\n      console.log(response);\n      response.json().then(function (data) {\n        setPfpUrl(data['pfpUrl']);\n        url = new URL('http://localhost:80/api/profile');\n        param = {\n          query: data['username']\n        };\n        url.search = new URLSearchParams(param).toString();\n        fetch(url, {\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          method: 'get',\n          mode: \"same-origin\",\n          credentials: \"same-origin\"\n        }).then(function (response) {\n          console.log('response ' + response);\n          response.json().then(function (data) {\n            console.log(data);\n            console.log('CLOWNSHOE');\n            setProfileOwnerInfo(data['profileOwnerInfo']); //if array of activity, show, else don't and load other return statement\n          });\n        });\n      });\n    });\n    fetch('http://localhost:80/api/feed/home', {\n      headers: {\n        'X-CSRF-TOKEN': document.getElementById('csrf-token').getAttribute('content'),\n        'Content-Type': 'application/json',\n        \"Access-Control-Allow-Origin\": \"*\",\n        \"Access-Control-Allow-Credentials\": true\n      },\n      method: 'get',\n      mode: \"same-origin\",\n      credentials: \"same-origin\"\n    }).then(function (response) {\n      console.log('response ' + response);\n      response.json().then(function (data) {\n        console.log(data['username'] + ' username');\n        changeFeedArray(data['statuses']);\n      });\n    });\n    setLoading(false);\n  }, []);\n\n  function appendNewStatus(statusObject) {\n    console.log(JSON.stringify(statusObject) + ' sss');\n\n    var tempFeedArray = _toConsumableArray(feedArray);\n\n    tempFeedArray.unshift(statusObject);\n    console.log(tempFeedArray);\n    changeFeedArray(tempFeedArray);\n    console.log(feedArray);\n  }\n\n  function deleteStatus(id) {\n    fetch('/api/statuses/delete', {\n      headers: {\n        'X-CSRF-TOKEN': token,\n        'Content-Type': 'application/json'\n      },\n      method: 'delete',\n      mode: \"same-origin\",\n      credentials: \"same-origin\",\n      body: JSON.stringify({\n        statusId: id\n      })\n    }).then(function (data) {\n      console.log('data from commentinput----------------------' + JSON.stringify(data));\n\n      var tempFeedArray = _toConsumableArray(feedArray);\n\n      var index;\n\n      for (var i = 0; i < tempFeedArray.length; i++) {\n        if (tempFeedArray[i]['id'] === id) {\n          index = i;\n          console.log('index: ' + index);\n        }\n      }\n\n      tempFeedArray.splice(index, 1);\n      console.log(tempFeedArray);\n      changeFeedArray(tempFeedArray);\n    });\n  }\n\n  if (isLoading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"home\",\n    style: {\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    className: ['baseMainContainer'].join(\" \")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_UserPage_UserCard__WEBPACK_IMPORTED_MODULE_4__.default, {\n    currentUserId: currentUserId,\n    profileOwnerInfo: profileOwnerInfo\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_UserPage_Feed__WEBPACK_IMPORTED_MODULE_3__.default, {\n    home: true,\n    currentUserId: currentUserId,\n    pageOwnerId: null,\n    appendNewStatus: appendNewStatus,\n    deleteStatus: deleteStatus,\n    feedArray: feedArray\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'column'\n    }\n  }, pfpUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    style: {\n      height: '64px',\n      width: '64px',\n      objectFit: 'cover',\n      alignSelf: 'center'\n    },\n    src: pfpUrl\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_UserPage_Feed__WEBPACK_IMPORTED_MODULE_3__.default, {\n    home: true,\n    userId: userId,\n    pageOwnerId: null,\n    appendNewStatus: appendNewStatus,\n    deleteStatus: deleteStatus,\n    feedArray: feedArray\n  }));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://aestheticreact/./src/Components/Home/Home.js?");

/***/ }),

/***/ "./src/Components/UserPage/FollowButton.js":
/*!*************************************************!*\
  !*** ./src/Components/UserPage/FollowButton.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n //make this more secure by handling the following/follow more nuanced\n//switch to hooks down the road\n\nfunction FollowButton(_ref) {\n  var targetName = _ref.targetName,\n      type = _ref.type;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      isFollowingText = _useState2[0],\n      setIsFollowingText = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isFollowing = _useState4[0],\n      setIsFollowing = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      _useState6 = _slicedToArray(_useState5, 2),\n      isLoading = _useState6[0],\n      setIsLoading = _useState6[1];\n\n  function figureOutIfFollowingOrNot() {\n    console.log('type: ' + type);\n    var url;\n    if (type == 'dock') url = new URL('http://localhost:80/api/dockSubscriptionStatus');else if (type == 'user') url = new URL('http://localhost:80/api/followers');\n    var token = document.getElementById('csrf-token').getAttribute('content');\n    var param = {\n      query: targetName\n    };\n    url.search = new URLSearchParams(param).toString();\n    fetch(url, {\n      headers: {\n        'X-CSRF-TOKEN': token,\n        'Content-Type': 'application/json',\n        \"Access-Control-Allow-Origin\": \"*\",\n        \"Access-Control-Allow-Credentials\": true\n      },\n      method: 'get',\n      mode: \"cors\",\n      credentials: \"same-origin\"\n    }).then(function (response) {\n      response.json().then(function (data) {\n        if (type == 'dock') setIsFollowing(data['subscribed']);else if (type == 'user') setIsFollowing(data['following']);\n        if (type == 'user') data['following'] ? setIsFollowingText('Following') : setIsFollowingText('Follow');\n\n        if (type == 'dock') {\n          data['subscribed'] ? setIsFollowingText('Joined') : setIsFollowingText('Join');\n        }\n\n        setIsLoading(false);\n      });\n    });\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    figureOutIfFollowingOrNot();\n  }, []);\n\n  function submit() {\n    var url, method;\n\n    if (type == 'dock') {\n      url = new URL('http://localhost:80/api/dockSubscription');\n\n      if (isFollowing) {\n        method = 'delete';\n        setIsFollowingText('Join');\n        setIsFollowing(false);\n      } else {\n        method = 'post';\n        setIsFollowingText('Joined');\n        setIsFollowing(true);\n      }\n    } else if (type == 'user') {\n      url = new URL('http://localhost:80/api/followers');\n\n      if (isFollowing) {\n        method = 'delete';\n        setIsFollowingText('Follow');\n        setIsFollowing(false);\n      } else {\n        method = 'post';\n        setIsFollowingText('Following');\n        setIsFollowing(true);\n      }\n    }\n\n    fetch(url, {\n      headers: {\n        'X-CSRF-TOKEN': document.getElementById('csrf-token').getAttribute('content'),\n        'Content-Type': 'application/json'\n      },\n      method: method,\n      mode: \"same-origin\",\n      credentials: \"same-origin\",\n      body: JSON.stringify({\n        target: targetName\n      })\n    });\n  }\n\n  if (isLoading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Loading\");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    id: \"followBtn\",\n    onClick: function onClick() {\n      return submit();\n    }\n  }, isFollowingText);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FollowButton);\n\n//# sourceURL=webpack://aestheticreact/./src/Components/UserPage/FollowButton.js?");

/***/ }),

/***/ "./src/Components/UserPage/UserCard.js":
/*!*********************************************!*\
  !*** ./src/Components/UserPage/UserCard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FollowButton */ \"./src/Components/UserPage/FollowButton.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './ProfileImage'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n //SPLIT THIS UP LATER. SPLIT USER PROFILE LOAD INTO ONE COMPONENT, THEN SWITCH USER CONTENT LOAD INTO ANOTHER\n\nfunction UserCard(_ref) {\n  var currentUserId = _ref.currentUserId,\n      profileOwnerInfo = _ref.profileOwnerInfo;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      marginBottom: '3%'\n    },\n    id: \"userCard\",\n    className: ['bordered', 'divBackground'].join(\" \")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"divHeader\",\n    style: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"headerText\",\n    style: {\n      flex: '8',\n      alignItems: 'stretch',\n      display: 'flex',\n      flexDirection: 'column'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"headerText\",\n    style: {\n      textAlign: 'left',\n      paddingTop: '7px',\n      paddingLeft: '3px'\n    }\n  }, profileOwnerInfo.username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      alignItems: 'center',\n      flexDirection: 'column',\n      marginTop: '5%',\n      marginBottom: '5%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './ProfileImage'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n    type: 'profilePicture',\n    url: profileOwnerInfo.pfpUrl\n  }), currentUserId != profileOwnerInfo.id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FollowButton__WEBPACK_IMPORTED_MODULE_1__.default, {\n    targetName: profileOwnerInfo.username,\n    type: 'user'\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      textAlign: 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, profileOwnerInfo.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, 'joined ' + profileOwnerInfo.joinedAgo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    style: {\n      marginLeft: '10px'\n    }\n  }, \" \", profileOwnerInfo.followingCount + ' Following', profileOwnerInfo.followersCount == 1 ? profileOwnerInfo.followersCount + ' Follower' : profileOwnerInfo.followersCount + ' Followers', \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, profileOwnerInfo.contributionsCount + ' curations', \" \")));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserCard);\n\n//# sourceURL=webpack://aestheticreact/./src/Components/UserPage/UserCard.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "b3e38e0a9715ffbeb3bc"
/******/ 	})();
/******/ 	
/******/ }
);