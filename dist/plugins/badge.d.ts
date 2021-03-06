/**
 * The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.
 *
 * Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [Badge plugin docs](https://github.com/katzer/cordova-plugin-badge).
 *
 * ```
 * cordova plugin add cordova-plugin-badge
 * ```
 *
 * @usage
 * ```js
 * Badge.set(10);
 * Badge.increase();
 * Badge.clear();
 * ```
 */
export declare class Badge {
    /**
     * Clear the badge of the app icon.
     */
    static clear(): Promise<boolean>;
    /**
     * Set the badge of the app icon.
     * @param {number} number  The new badge number.
     * @returns {Promise}
     */
    static set(number: number): Promise<any>;
    /**
     * Get the badge of the app icon.
     * @returns {Promise}
     */
    static get(): Promise<any>;
    /**
     * Increase the badge number.
     * @param {number} count  Count to add to the current badge number
     * @returns {Promise}
     */
    static increase(number: number): Promise<any>;
    /**
     * Decrease the badge number.
     * @param {number} count  Count to subtract from the current badge number
     * @returns {Promise}
     */
    static decrease(number: number): Promise<any>;
    /**
     * Determine if the app has permission to show badges.
     */
    static hasPermission(): Promise<boolean>;
    /**
     * Register permission to set badge notifications
     * @returns {Promise}
     */
    static registerPermission(): Promise<any>;
}
