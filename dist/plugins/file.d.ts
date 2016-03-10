export declare enum LocalFileSystem {
    TEMPORARY = 0,
    PERSISTENT = 1,
}
export declare class File {
    static requestFileSystem(type: LocalFileSystem, size: number): Promise<FileSystem>;
}
