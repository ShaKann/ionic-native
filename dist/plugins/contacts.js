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
 * @name Contacts
 * @description
 * Access and manage Contacts on the device.
 *
 * Requires plugin: `cordova-plugin-contacts`
 * For full info, please see the [Cordova Contacts plugin docs](https://github.com/apache/cordova-plugin-contacts)
 *
 * @usage
 *
 * ```js
 * Contacts.save({
 *   displayName: "Mr. Ionitron"
 * }).then((contact) => {}, (err) => {})
 * ```
 *
 * See the `save()` docs for a full list of fields.
 *
 */
var Contacts = (function () {
    function Contacts() {
    }
    /**
     * Create a new Contact object.
     *
     * @param options {Object} Object whose properties the created Contact should have.
     * @return {Contact} Returns the created contact
     */
    Contacts.create = function (options) {
        return new Contact();
    };
    ;
    /**
     * Search for contacts in the Contacts list.
     *
     * Example: Contacts.find(['*'], { filter: 'Max' }) // will search for a displayName of 'Max'
     *
     * @param fields {string[]}  Contact fields to be used as a search qualifier.
     *  A zero-length contactFields parameter is invalid and results in ContactError.INVALID_ARGUMENT_ERROR.
     *  A contactFields value of "*" searches all contact fields.
     *
     * @param options {Object} the options to query with:
     *   filter: The search string used to find navigator.contacts. (string) (Default: "")
     *   multiple: Determines if the find operation returns multiple navigator.contacts. (Boolean) (Default: false)
     *   desiredFields: Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. (DOMString[]) [Optional]
     *   hasPhoneNumber(Android only): Filters the search to only return contacts with a phone number informed. (Boolean) (Default: false)
     *
     * @return Returns a Promise that resolves with the search results (an array of Contact objects)
     */
    Contacts.find = function (fields, options) {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    ;
    /**
     * Select a single Contact.
     * @return Returns a Promise that resolves with the selected Contact
     */
    Contacts.pickContact = function () {
        // This Promise is replaced by one from the @Cordova decorator that wraps
        // the plugin's callbacks. We provide a dummy one here so TypeScript
        // knows that the correct return type is Promise, because there's no way
        // for it to know the return type from a decorator.
        // See https://github.com/Microsoft/TypeScript/issues/4881
        return new Promise(function (res, rej) { });
    };
    ;
    __decorate([
        plugin_1.Cordova({
            sync: true
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], Contacts, "create", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        }), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Array, Object]), 
        __metadata('design:returntype', void 0)
    ], Contacts, "find", null);
    __decorate([
        plugin_1.Cordova(), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Contacts, "pickContact", null);
    Contacts = __decorate([
        plugin_1.Plugin({
            plugin: 'cordova-plugin-contacts',
            pluginRef: 'navigator.contacts',
            repo: 'https://github.com/apache/cordova-plugin-contacts'
        }), 
        __metadata('design:paramtypes', [])
    ], Contacts);
    return Contacts;
}());
exports.Contacts = Contacts;
//# sourceMappingURL=contacts.js.map