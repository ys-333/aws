"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.info = function (message) {
        console.log(chalk_1.default.blue(message || Logger.defaultMessage));
    };
    Logger.error = function (message) {
        console.log(chalk_1.default.red(message || Logger.defaultMessage));
    };
    Logger.defaultMessage = 'har har mahadev';
    return Logger;
}());
exports.default = Logger;
