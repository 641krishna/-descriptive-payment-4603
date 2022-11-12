export const getData = (key) => {
    let data = localStorage.getItem(key);

    if (data === null) return false;
    else return data;
}

export const setData = (key, value) => {
    localStorage.setItem(key, value);
}