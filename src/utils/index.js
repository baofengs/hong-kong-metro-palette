export const decodeHash = (hashStr) => {
    if (!hashStr) return {};
    return hashStr.substr(1).split('&').reduce((hashObj, current) => {
        const [key, value] = current.split('=');
        hashObj[key] = value;
        return hashObj;
    }, {});
}

export const encodeHash = (hashObj) => {
    return '#' + Object.keys(hashObj).reduce((hashArr, cur) => {
        const curArr = [cur, hashObj[cur]];
        hashArr.push(curArr.join('='));
        return hashArr;
    }, []).join('&');
}
