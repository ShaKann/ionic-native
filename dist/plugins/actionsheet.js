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
/**
 * @name ActionSheet
 * @description
 * The ActionSheet plugin shows a native list of options the user can choose from.
 *
 * Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 *
 * ```ts
 * import {ActionSheet} from 'ionic-native';
 *
 * let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
 * ActionSheet.show({
 *   'title': 'What do you want with this image?',
 *   'buttonLabels': buttonLabels,
 *   'addCancelButtonWithLabel': 'Cancel',
 *   'addDestructiveButtonWithLabel' : 'Delete'
 * }).then(buttonIndex => {
 *   console.log('Button pressed: ' + buttonLabels[buttonIndex - 1]);
 * });
 * ```
 *
 */
var ActionSheet = (function () {
    function ActionSheet() {
    }
    /**
     * Show the ActionSheet. The ActionSheet's options is an object with the following propterties.
     *
     * | Option                        | Type      | Description                                  |
     * |-------------------------------|-----------|----------------------------------------------|
     * | title                         |`string`   | The title for the actionsheet                |
     * | buttonLabels                  |`string[]` | the labels for the buttons. Uses the index x |
     * | androidTheme                  |`number`   | Theme to bue used on Android                 |
     * | androidEnableCancelButton     |`boolean`  | Enable a cancel on Android                   |
     * | winphoneEnableCancelButton    |`boolean`  | Enable a cancel on Android                   |
     * | addCancelButtonWithLabel      |`string`   | Add a cancle button with text                |
     * | addDestructiveButtonWithLabel |`string`   | Add a destructive button with text           |
     * | position                      |`number[]` | On an iPad, set the X,Y position             |
     *
     * @param {options} Options See table above
     * @returns {Promise} Returns a Promise that resolves with the index of the
     *   button pressed (1 based, so 1, 2, 3, etc.)
     */
    ActionSheet.show = function (options) {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    /**
     * Hide the ActionSheet.
     */
    ActionSheet.hide = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ActionSheet, "show", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ActionSheet, "hide", null);
    ActionSheet = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-actionsheet',
            pluginRef: 'plugins.actionsheet',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet'
        }), 
        __metadata('design:paramtypes', [])
    ], ActionSheet);
    return ActionSheet;
}());
exports.ActionSheet = ActionSheet;
//# sourceMappingURL=actionsheet.js.map