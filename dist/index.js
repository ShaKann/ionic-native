"use strict";
var ng1_1 = require('./ng1');
ng1_1.initAngular1();
var DEVICE_READY_TIMEOUT = 2000;
var actionsheet_1 = require('./plugins/actionsheet');
exports.ActionSheet = actionsheet_1.ActionSheet;
var apprate_1 = require('./plugins/apprate');
exports.AppRate = apprate_1.AppRate;
var appversion_1 = require('./plugins/appversion');
exports.AppVersion = appversion_1.AppVersion;
var barcodescanner_1 = require('./plugins/barcodescanner');
exports.BarcodeScanner = barcodescanner_1.BarcodeScanner;
var badge_1 = require('./plugins/badge');
exports.Badge = badge_1.Badge;
var ble_1 = require('./plugins/ble');
exports.BLE = ble_1.BLE;
var camera_1 = require('./plugins/camera');
exports.Camera = camera_1.Camera;
var calendar_1 = require('./plugins/calendar');
exports.Calendar = calendar_1.Calendar;
var clipboard_1 = require('./plugins/clipboard');
exports.Clipboard = clipboard_1.Clipboard;
var contacts_1 = require('./plugins/contacts');
exports.Contacts = contacts_1.Contacts;
var datepicker_1 = require('./plugins/datepicker');
exports.DatePicker = datepicker_1.DatePicker;
var device_1 = require('./plugins/device');
exports.Device = device_1.Device;
var facebook_1 = require('./plugins/facebook');
exports.Facebook = facebook_1.Facebook;
var geolocation_1 = require('./plugins/geolocation');
exports.Geolocation = geolocation_1.Geolocation;
var push_1 = require('./plugins/push');
exports.Push = push_1.Push;
var statusbar_1 = require('./plugins/statusbar');
exports.StatusBar = statusbar_1.StatusBar;
var toast_1 = require('./plugins/toast');
exports.Toast = toast_1.Toast;
var touchid_1 = require('./plugins/touchid');
exports.TouchID = touchid_1.TouchID;
var file_1 = require('./plugins/file');
exports.File = file_1.File;
exports.LocalFileSystem = file_1.LocalFileSystem;
exports.FileSystem = file_1.FileSystem;
// Window export to use outside of a module loading system
window['IonicNative'] = {
    ActionSheet: actionsheet_1.ActionSheet,
    AppRate: apprate_1.AppRate,
    AppVersion: appversion_1.AppVersion,
    BarcodeScanner: barcodescanner_1.BarcodeScanner,
    Badge: badge_1.Badge,
    BLE: ble_1.BLE,
    Camera: camera_1.Camera,
    Calendar: calendar_1.Calendar,
    Clipboard: clipboard_1.Clipboard,
    Contacts: contacts_1.Contacts,
    DatePicker: datepicker_1.DatePicker,
    Device: device_1.Device,
    Facebook: facebook_1.Facebook,
    Geolocation: geolocation_1.Geolocation,
    Push: push_1.Push,
    StatusBar: statusbar_1.StatusBar,
    Toast: toast_1.Toast,
    TouchID: touchid_1.TouchID,
    File: file_1.File
};
// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
var before = +new Date;
var didFireReady = false;
document.addEventListener('deviceready', function () {
    console.log('DEVICE READY FIRED AFTER', (+new Date - before), 'ms');
    didFireReady = true;
});
setTimeout(function () {
    if (!didFireReady && window.cordova) {
        console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
    }
}, DEVICE_READY_TIMEOUT);
//# sourceMappingURL=index.js.map