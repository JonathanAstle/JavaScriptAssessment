const xhr = new XMLHttpRequest();

const apiLink = "http://35.240.3.220:9966/petclinic/api/owners";

function link(){
    xhr.onload = () => {
        if (xhr.status ==200) {
            resolve(xhr.response);
        } 
        else {
            reject("Request Failed");
        }

        if(xhr.getResponseHeader('Content-Type') === 'application/json;charset=UTF-8'){
            console.log(xhr.responseText);
        }
    }
}

function makeRequest(type, link, obj){
    xhr.open(type, link);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(obj);
}

function getData(type, link){
    xhr.open(type, link);
    xhr.send();
}








