import moment from "moment";

export const getFormattedWeddingDateFromContext = weddingInfoObj => {
    if (!weddingInfoObj) return "Unknown";
    if (weddingInfoObj.weddingDate) {
        return moment(weddingInfoObj.weddingDate).format("MMMM DD, YYYY");
    }
    if (weddingInfoObj.altWeddingDate) {
        return weddingInfoObj.altWeddingDate;
    }
    return "Unknown";
};

export const normFile = e => {
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};

export const getBase64 = file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
};
