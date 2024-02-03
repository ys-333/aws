'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./utils/logger"));
var User = {
    name: 'yashwant',
    age: 12,
};
logger_1.default.info('user');
console.log(User);
var app = (0, express_1.default)();
