export const getData = (key) => {
    let data = localStorage.getItem(key);

    if (data === null) return false;
    else return data;
}

export const setData = (key, value) => {
    localStorage.setItem(key, value);
}

export const getData1 = (key) => {
    let data = localStorage.getItem(key);
    if (data === '') return false;
    else return true;
}

export const setData1 = (key, value) => {
    localStorage.setItem(key, value);
}