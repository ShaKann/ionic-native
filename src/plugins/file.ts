import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';

@Plugin({
    plugin: 'cordova-plugin-file',
    pluginRef: 'cordova.file'
})
export class File {
    @Cordova()
    static getFreeDiskSpace() {
        return new Promise<string>((res, rej) => { });
    }
}
