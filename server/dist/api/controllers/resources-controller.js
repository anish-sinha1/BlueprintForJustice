"use strict";
/** Blueprint For Justice
 ** Copyright (C) 2022 Anish Sinha
 **
 ** This program is free software: you can redistribute it and/or modify
 ** it under the terms of the GNU General Public License as published by
 ** the Free Software Foundation, either version 3 of the License, or
 ** (at your option) any later version.
 **
 ** This program is distributed in the hope that it will be useful,
 ** but WITHOUT ANY WARRANTY; without even the implied warranty of
 ** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 ** GNU General Public License for more details.
 **
 ** You should have received a copy of the GNU General Public License
 ** along with this program.  If not, see http://www.gnu.org/licenses/.
 **/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLegalLinks = exports.validateLinks = void 0;
var healing_links_1 = __importDefault(require("../../links/healing-links"));
var legal_links_1 = __importDefault(require("../../links/legal-links"));
var community_links_1 = __importDefault(require("../../links/community-links"));
var media_links_1 = __importDefault(require("../../links/media-links"));
var general_links_1 = __importDefault(require("../../links/general-links"));
var action_links_1 = __importDefault(require("../../links/action-links"));
var resources_service_1 = require("../services/resources-service");
var validateLinks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validLinks, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 13, , 14]);
                validLinks = {};
                if (!(req.query.resource === "healing")) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, resources_service_1.validate)(healing_links_1.default)];
            case 1:
                validLinks = _a.sent();
                _a.label = 2;
            case 2:
                if (!(req.query.resource === "legal")) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, resources_service_1.validate)(legal_links_1.default)];
            case 3:
                validLinks = _a.sent();
                _a.label = 4;
            case 4:
                if (!(req.query.resource === "community")) return [3 /*break*/, 6];
                return [4 /*yield*/, (0, resources_service_1.validate)(community_links_1.default)];
            case 5:
                validLinks = _a.sent();
                _a.label = 6;
            case 6:
                if (!(req.query.resource === "media")) return [3 /*break*/, 8];
                return [4 /*yield*/, (0, resources_service_1.validate)(media_links_1.default)];
            case 7:
                validLinks = _a.sent();
                _a.label = 8;
            case 8:
                if (!(req.query.resource === "general")) return [3 /*break*/, 10];
                return [4 /*yield*/, (0, resources_service_1.validate)(general_links_1.default)];
            case 9:
                validLinks = _a.sent();
                _a.label = 10;
            case 10:
                if (!(req.query.resource === "action")) return [3 /*break*/, 12];
                return [4 /*yield*/, (0, resources_service_1.validate)(action_links_1.default)];
            case 11:
                validLinks = _a.sent();
                _a.label = 12;
            case 12:
                res.status(200).json(validLinks);
                return [3 /*break*/, 14];
            case 13:
                e_1 = _a.sent();
                res
                    .status(500)
                    .json("internal server error: could not validate healing links");
                return [3 /*break*/, 14];
            case 14: return [2 /*return*/];
        }
    });
}); };
exports.validateLinks = validateLinks;
var validateLegalLinks = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
        }
        catch (e) {
            res
                .status(500)
                .json("internal server error: could not validate legal links");
        }
        return [2 /*return*/];
    });
}); };
exports.validateLegalLinks = validateLegalLinks;
