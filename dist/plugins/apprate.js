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
 * The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.
 *
 * Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).
 *
 * ```
 * cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
 * ````
 *
 * @usage
 * ```js
 * AppRate.preferences.storeAppURL.ios = '<my_app_id>';
 * AppRate.preferences.storeAppURL.android = 'market://details?id=<package_name>';
 * AppRate.preferences.storeAppURL.blackberry = 'appworld://content/[App Id]/';
 * AppRate.preferences.storeAppURL.windows8 = 'ms-windows-store:Review?name=<the Package Family Name of the application>';
 * AppRate.promptForRating();
 * ```
 */
var AppRate = (function () {
    function AppRate() {
    }
    Object.defineProperty(AppRate, "preferences", {
        /**
         * Rating dialog preferences
         *
         * useLanguage {String} null - custom BCP 47 language tag
         * displayAppName {String} '' - custom application title
         * promptAgainForEachNewVersion {Boolean} true - show dialog again when application version will be updated
         * usesUntilPrompt {Integer} 3 - count of runs of application before dialog will be displayed
         * openStoreInApp {Boolean} false - leave app or no when application page opened in app store (now supported only for iOS)
         * useCustomRateDialog {Boolean} false - use custom view for rate dialog
         * callbacks.onButtonClicked {Function} null - call back function. called when user clicked on rate-dialog buttons
         * callbacks.onRateDialogShow {Function} null - call back function. called when rate-dialog showing
         * storeAppURL.ios {String} null - application id in AppStore
         * storeAppURL.android {String} null - application URL in GooglePlay
         * storeAppURL.blackberry {String} null - application URL in AppWorld
         * storeAppURL.windows8 {String} null - application URL in WindowsStore
         * customLocale {Object} null - custom locale object
         * @type {{}}
         */
        get: function () {
            return window.AppRate.preferences;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Prompts the user for rating
     *
     * @param {boolean} immediately  Show the rating prompt immediately.
     */
    AppRate.promptForRating = function (immediately) { };
    ;
    __decorate([
        plugin_1.CordovaProperty, 
        __metadata('design:type', Object)
    ], AppRate, "preferences", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Boolean]), 
        __metadata('design:returntype', void 0)
    ], AppRate, "promptForRating", null);
    AppRate = __decorate([
        plugin_1.Plugin({
            plugin: 'https://github.com/pushandplay/cordova-plugin-apprate.git',
            pluginRef: 'AppRate'
        }), 
        __metadata('design:paramtypes', [])
    ], AppRate);
    return AppRate;
}());
exports.AppRate = AppRate;
//# sourceMappingURL=apprate.js.map