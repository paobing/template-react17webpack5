const ENV = process.env.NODE_ENV;
if(ENV === "development"){
    require("./mock");
}

const BaseUrl = "";

export {
    BaseUrl
}