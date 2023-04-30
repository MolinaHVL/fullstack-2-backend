const { getCustomClaims } = require("./set-custom-claims");

const uid = "m3vyzknxakhopRESuBjT4ysbw1A2"; // Replace this with the actual UID
getCustomClaims(uid)
    .then((claims) => {
        console.log("Custom claims:", claims);
    })
    .catch((error) => {
        console.error("Error:", error);
    });