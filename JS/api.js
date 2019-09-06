const req = new XMLHttpRequest();

var data;
var table = document.getElementById('table-body');

var ownerId = new Array();
var ownerFirst = new Array();
var ownerLast = new Array();
var ownerAddress = new Array();
var ownerTelephone = new Array();

var petId = new Array();
var petName = new Array();
var petBirth = new Array();
var petOwner = new Array();
var petVisit = new Array();

var type = [petId, petName];
var pet = [type, petBirth, petOwner, petVisit];
var owner;


const apiLink = "http://35.240.3.220:9966/petclinic/api/owners";

    req.onload = () => {
        if (req.status ==200) {
            console.log("200");
        } 
        else {
            reject("Request Failed");
        }
        //console.log(req.responseText);
        data = JSON.parse(req.response);
        console.log(data);
        dataCleaner();
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

function dataCleaner(){
    for(let person in data){
        ownerId.push(data[person].id);
        ownerFirst.push(data[person].firstName);
        ownerLast.push(data[person].lastName);
        ownerAddress.push(data[person].address);
        ownerTelephone.push(data[person].telephone);
    }
    owner = [ownerId, ownerFirst, ownerLast, ownerAddress, ownerTelephone, pet];
}

function addToOwner()
{
    for(let i = 0; i < 5; i++)
    {
        owner.push(ownerId[i]);
    }
}

function createTableOwner(){
    let id = document.createElement('td');
}







