import moment from "moment";

export const getFormattedWeddingDateFromContext = weddingInfoObj => {
    if (!weddingInfoObj) return "Unknown";
    if (weddingInfoObj.weddingDate) {
        return moment(weddingInfoObj.weddingDate).format("MMMM Do YYYY");
    }
    if (weddingInfoObj.altWeddingDate) {
        return weddingInfoObj.altWeddingDate;
    }
    return "Unknown";
};
