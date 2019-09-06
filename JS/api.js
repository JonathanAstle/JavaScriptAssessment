const req = new XMLHttpRequest();

const apiLink = "http://35.240.3.220:9966/petclinic/api/owners";

    req.onload = () => {
        if (xhr.status ==200) {
            console.log("200");
        } 
        else {
            reject("Request Failed");
        }
        console.log(req.responseText);
        //let data = JSON.parse(req.responseText);
    }

function makeRequest(type, link, obj){
    req.open(type, link);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(obj);
}

function getData(type, link){
    req.open(type, link);
    req.send();
    console.log("hitting this");
}








