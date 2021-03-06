"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var plugin_1 = require('./plugin');
(function (LocalFileSystem) {
    LocalFileSystem[LocalFileSystem["TEMPORARY"] = 0] = "TEMPORARY";
    LocalFileSystem[LocalFileSystem["PERSISTENT"] = 1] = "PERSISTENT";
})(exports.LocalFileSystem || (exports.LocalFileSystem = {}));
var LocalFileSystem = exports.LocalFileSystem;
var File = (function () {
    function File() {
    }
    File.requestFileSystem = function (type, size) {
        return new Promise(function (res, rej) { });
    };
    File.resolveLocalFileSystemURL = function (url) {
        return new Promise(function (res, rej) { });
    };
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Number, Number]), 
        __metadata('design:returntype', void 0)
    ], File, "requestFileSystem", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', void 0)
    ], File, "resolveLocalFileSystemURL", null);
    File = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-file',
            pluginRef: ''
        }), 
        __metadata('design:paramtypes', [])
    ], File);
    return File;
}());
exports.File = File;
//# sourceMappingURL=file.js.map