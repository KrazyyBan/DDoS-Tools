module.exports = function SetUrl(url) {
    if(!url.startsWith("http")){
        console.log("SetUrl: url must start with http.");
        process.exit(400);
    } else {
        return url;
    }
};