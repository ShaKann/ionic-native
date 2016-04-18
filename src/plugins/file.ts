import {Plugin, Cordova} from './plugin';
import {Observable} from 'rxjs/Observable';

export enum LocalFileSystem{
    TEMPORARY = 0,
    PERSISTENT = 1
}

@Plugin({
    plugin: 'cordova-plugin-file',
    pluginRef: ''
})    
export class File {
    @Cordova()
    static requestFileSystem(type : LocalFileSystem, size:number) {
        return new Promise<FileSystem>((res, rej) => { });
    }

    @Cordova()
    static resolveLocalFileSystemURL(url:string) {
        return new Promise<Entry>((res, rej) => { });
    }
}
