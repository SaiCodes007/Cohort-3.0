function waitfor3s(resolve) {
    setTimeout(resolve, 10000)
}

function setTimeoutPromisified() {
    return new Promise(waitfor3s);
}

function main(){
    console.log("main is called");
    
}

setTimeoutPromisified().then(main)