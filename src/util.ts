export function get(obj, path) {
    if (!path) {
        return obj;
    }

    for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
        if (!obj) { return null; }
        obj = obj[path[i]];
    }
    return obj;
};
