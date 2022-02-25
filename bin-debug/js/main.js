

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Data.ts":
/***/ (function(module, exports) {

var Data = /** @class */ (function () {
    function Data() {
    }
    Data.getRectWidth = function () {
        if (Data._rectWidth == 0) {
            var stage = egret.MainContext.instance.stage;
            Data._rectWidth = stage.stageWidth;
        }
        return Data._rectWidth;
    };
    Data.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    Data.getRectRow = function () {
        if (Data._rectRow == 0) {
            var stage = egret.MainContext.instance.stage;
            Data._rectRow = Math.ceil(stage.stageHeight / (this.getRectWidth() / 4)) - 1;
        }
        return Data._rectRow;
    };
    Data._rectWidth = 0;
    Data.score = 0;
    Data._rectRow = 0;
    return Data;
}());
window["Data"] = Data;
__reflect(Data.prototype,"Data",[]); 


/***/ }),

/***/ "./src/Game.ts":
/***/ (function(module, exports) {

var Game = /** @class */ (function () {
    function Game(root) {
        this._root = root;
        this.creatGroupRect();
        this.craeteTimer();
        this.startGame();
    }
    Game.prototype.craeteTimer = function () {
        this._timePanel = new TimerPanel();
        this._timePanel.addEventListener("GameOver", this.gameOver, this);
        this._root.addChild(this._timePanel);
    };
    Game.prototype.creatGroupRect = function () {
        this._rectRoot = new egret.Sprite();
        this._root.addChild(this._rectRoot);
        this._row = Data.getRectRow();
        this._Group = [];
        var Rects;
        for (var i = 0; i < this._row; i++) {
            Rects = new GroupRects();
            Rects.addEventListener("GameOver", this.gameOver, this);
            Rects.addEventListener("ClickRight", this.nextRow, this);
            Rects._currentRectRow = i;
            this._Group.push(Rects);
            Rects.y = Data.getRectWidth() / 4 * i;
            this._rectRoot.addChild(Rects);
        }
        this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
    };
    Game.prototype.gameOver = function () {
        this._timePanel.stop();
        if (!this.gameOverPanel) {
            this.gameOverPanel = new GameOverPanel();
            this.gameOverPanel.addEventListener("startGame", this.startGame, this);
        }
        this._root.addChild(this.gameOverPanel);
    };
    Game.prototype.startGame = function () {
        Data.score = 0;
        for (var i = 0; i < Data._rectRow; i++) {
            this._Group[i].init();
            this._Group[i].y = Data.getRectWidth() / 4 * i;
            this._Group[i]._currentRectRow = i;
            if (i != this._row - 1) {
                this._Group[i].creatBlankRect();
            }
        }
        this._timePanel.start();
    };
    Game.prototype.nextRow = function () {
        for (var i = 0; i < this._row; i++) {
            this._Group[i];
        }
        for (var i = 0; i < this._row; i++) {
            this._Group[i].move();
        }
        Data.score++;
    };
    return Game;
}());
window["Game"] = Game;
__reflect(Game.prototype,"Game",[]); 


/***/ }),

/***/ "./src/GameOverPanel.ts":
/***/ (function(module, exports) {

var GameOverPanel = /** @class */ (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        var _this = _super.call(this) || this;
        _this.draw();
        _this.addEventListener(egret.Event.ADDED, _this.showText, _this);
        return _this;
    }
    GameOverPanel.prototype.draw = function () {
        var width = egret.MainContext.instance.stage.stageWidth;
        var height = egret.MainContext.instance.stage.stageHeight;
        this.graphics.beginFill(0x111111, 0.5);
        this.graphics.drawRect(0, 0, width, height);
        this.graphics.endFill();
        this.txt = new egret.TextField;
        this.txt.textColor = 0xff0000;
        this.txt.width = width;
        this.txt.y = 100;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.txt);
        var btn = new egret.Sprite();
        btn.touchEnabled = true;
        btn.graphics.beginFill(0xff0000, 0.5);
        btn.graphics.drawRect(0, 0, 200, 200);
        btn.graphics.endFill();
        btn.width = 200;
        btn.height = 100;
        btn.x = (width - 200) / 2;
        btn.y = (height - 100) / 2;
        this.addChild(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this);
    };
    GameOverPanel.prototype.startGame = function () {
        this.parent.removeChild(this);
        this.dispatchEventWith("startGame");
    };
    GameOverPanel.prototype.showText = function () {
        this.txt.text = "你努力走了" + Data.score + "步";
    };
    return GameOverPanel;
}(egret.Sprite));
window["GameOverPanel"] = GameOverPanel;
__reflect(GameOverPanel.prototype,"GameOverPanel",[]); 


/***/ }),

/***/ "./src/GroupRects.ts":
/***/ (function(module, exports) {

var GroupRects = /** @class */ (function (_super) {
    __extends(GroupRects, _super);
    function GroupRects() {
        var _this = _super.call(this) || this;
        _this._currentRectRow = 0;
        _this._currentBlankRectIndex = 0;
        _this.createRects();
        return _this;
    }
    GroupRects.prototype.createRects = function () {
        this._rects = [];
        for (var i = 0; i < 4; i++) {
            var rect = new Rect();
            this._rects.push(rect);
            rect.x = rect.width * i;
            this.addChild(rect);
            rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRect, this);
        }
    };
    GroupRects.prototype.onClickRect = function (evt) {
        evt.target.OnRectClick();
        if (evt.target.type == RectType.CLICKABLE && evt.target.parent._currentRectRow == Data.getRectRow() - 2) {
            console.log("你点击的是第" + evt.target.parent._currentRectRow + "行");
            this.dispatchEventWith("ClickRight");
        }
        else {
            this.dispatchEventWith("GameOver");
            console.log("你点击的是第" + evt.target.parent._currentRectRow + "行");
            console.log("错了");
        }
    };
    GroupRects.prototype.creatBlankRect = function () {
        this.init();
        var n = Math.random();
        if (n >= 0 && n < 0.25) {
            this._currentBlankRectIndex = 0;
        }
        else if (n >= 0.25 && n < 0.5) {
            this._currentBlankRectIndex = 1;
        }
        else if (n >= 0.5 && n < 0.75) {
            this._currentBlankRectIndex = 2;
        }
        else {
            this._currentBlankRectIndex = 3;
        }
        this._rects[this._currentBlankRectIndex].type = RectType.CLICKABLE;
    };
    GroupRects.prototype.init = function () {
        for (var i = 0; i < 4; i++) {
            this._rects[i].type = RectType.NONCLICKABLE;
            this._rects[i].draw();
        }
    };
    GroupRects.prototype.move = function () {
        this._currentRectRow++;
        if (this._currentRectRow == Data.getRectRow()) {
            this._currentRectRow = 0;
            this.creatBlankRect();
        }
        this.y = this._currentRectRow * (Data.getRectWidth() / 4);
    };
    return GroupRects;
}(egret.Sprite));
window["GroupRects"] = GroupRects;
__reflect(GroupRects.prototype,"GroupRects",[]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/Data.ts");
__webpack_require__("./src/Game.ts");
__webpack_require__("./src/GameOverPanel.ts");
__webpack_require__("./src/GroupRects.ts");
__webpack_require__("./src/Main.ts");
__webpack_require__("./src/Rect.ts");
__webpack_require__("./src/RectType.ts");
__webpack_require__("./src/TimerPanel.ts");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.addEventListener(egret.Event.ADDED, this.startGame, this);
    };
    Main.prototype.startGame = function () {
        this.removeEventListener(egret.Event.ADDED, this.startGame, this);
        var game = new Game(this);
    };
    return Main;
}(eui.UILayer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Rect.ts":
/***/ (function(module, exports) {

var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        var _this = _super.call(this) || this;
        _this._colors = [0xffffff, 0x000000, 0x000fff, 0xff0000];
        _this._currentcolor = 0;
        _this._type = RectType.NONCLICKABLE;
        _this.touchEnabled = true;
        _this.draw();
        return _this;
    }
    Rect.prototype.draw = function () {
        this.graphics.lineStyle(1, 0x000000);
        this.graphics.beginFill(this._colors[this._currentcolor]);
        this.graphics.drawRect(0, 0, Data.getRectWidth() / 4, Data.getRectWidth() / 4);
        this.graphics.endFill();
    };
    Object.defineProperty(Rect.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (val) {
            this._type = val;
            if (val == RectType.NONCLICKABLE) {
                console.log("白");
                this._currentcolor = 0;
            }
            else {
                this._currentcolor = 1;
                console.log("黑");
            }
            this.draw();
        },
        enumerable: false,
        configurable: true
    });
    Rect.prototype.OnRectClick = function () {
        if (this._type == RectType.CLICKABLE) {
            this._currentcolor = 2;
        }
        else {
            this._currentcolor = 3;
        }
        this.draw();
    };
    return Rect;
}(egret.Sprite));
window["Rect"] = Rect;
__reflect(Rect.prototype,"Rect",[]); 


/***/ }),

/***/ "./src/RectType.ts":
/***/ (function(module, exports) {

var RectType = /** @class */ (function () {
    function RectType() {
    }
    RectType.CLICKABLE = "clickable";
    RectType.NONCLICKABLE = "nonclickable";
    return RectType;
}());
window["RectType"] = RectType;
__reflect(RectType.prototype,"RectType",[]); 


/***/ }),

/***/ "./src/TimerPanel.ts":
/***/ (function(module, exports) {

var TimerPanel = /** @class */ (function (_super) {
    __extends(TimerPanel, _super);
    function TimerPanel() {
        var _this = _super.call(this) || this;
        _this._timers = 20;
        _this.draw();
        _this.createTimer();
        return _this;
    }
    TimerPanel.prototype.draw = function () {
        this._txt = new egret.TextField();
        this._txt.width = egret.MainContext.instance.stage.stageWidth;
        this._txt.y = 100;
        this._txt.textColor = 0xff0000;
        this._txt.textAlign = egret.HorizontalAlign.CENTER;
        this._txt.text = "20'00''";
        this.addChild(this._txt);
    };
    TimerPanel.prototype.createTimer = function () {
        this._timer = new egret.Timer(1000, 20);
        this._timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        this._timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        this.start();
    };
    TimerPanel.prototype.timerFunc = function (event) {
        this._timers -= 1;
        this._txt.text = this._timers + "'00''";
        egret.log("timerFunc count" + event.target.currentCount);
        // this.onTimerCom();
    };
    TimerPanel.prototype.timerComFunc = function () {
        this._txt.text = "00'00''";
        // this._timer.stop();
        console.log("倒计时结束");
        this.dispatchEventWith("GameOver");
    };
    TimerPanel.prototype.start = function () {
        this._txt.text = "20'00''";
        this._timers = 20;
        this._timer.reset();
        this._timer.start();
    };
    TimerPanel.prototype.stop = function () {
        this._timer.stop();
    };
    return TimerPanel;
}(egret.Sprite));
window["TimerPanel"] = TimerPanel;
__reflect(TimerPanel.prototype,"TimerPanel",[]); 


/***/ })

/******/ });