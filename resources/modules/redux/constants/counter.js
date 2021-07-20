
function getSyncConst(key){
    return "SYNC_" + key;
}

function getAsyncConst(key){
    return "ASYNC_" + key;
}

// sync constant
export const INCREMENT = getSyncConst("INCREMENT");
export const DECREMENT = getSyncConst("DECREMENT");
export const RESET = getSyncConst("RESET");

// async constant
export const ASYNC_INCREMENT = getAsyncConst("INCREMENT");
