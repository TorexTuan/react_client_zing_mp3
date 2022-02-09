
const storage = {
    set(value) {
        return localStorage.setItem('zing-mp3', JSON.stringify(value))
    },
    get() {
        return JSON.parse(localStorage.getItem('zing-mp3'))
    }
};


export default storage;
