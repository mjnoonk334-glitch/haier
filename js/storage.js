const STORAGE_KEY = 'alhair_v20';

export function saveData(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}

export function loadData() {

    const data =
        localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : null;
}

export function clearData() {

    localStorage.removeItem(STORAGE_KEY);
}
