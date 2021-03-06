/**
 * Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.
 *
 * Requires Cordova plugin: https://github.com/VersoSolutions/CordovaClipboard
 * For more info, please see the [Clipboard plugin docs](https://github.com/VersoSolutions/CordovaClipboard.git).
 *
 * ```
 * cordova plugin add https://github.com/VersoSolutions/CordovaClipboard.git
 * ```
 *
 * @usage
 * ```js
 * Clipboard.copy("Hello world");
 *
 * Clipboard.paste().then(
 *    (resolve : string) => {
  *     alert(resolve);
*     },
 *     (reject : string) => {
 *     alert("Error: " + reject);
 *     }
*     );
 * );
 * ```
 */
export declare class Clipboard {
    /**
     * Copies the given text
     * @param text
     * @returns {Promise<T>}
     */
    static copy(text: string): Promise<any>;
    /**
     * Pastes the text stored in clipboard
     * @returns {Promise<T>}
     */
    static paste(): Promise<any>;
}
