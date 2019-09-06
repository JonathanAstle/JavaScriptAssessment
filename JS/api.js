const req = new XMLHttpRequest();

var data;
var tableBody = document.getElementById('table-body');

var ownerId = new Array();
var ownerFirst = new Array();
var ownerLast = new Array();
var ownerAddress = new Array();
var ownerTelephone = new Array();
var ownerCity = new Array();

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
        } 
        else {
            reject("Request Failed");
        }
        //console.log(req.responseText);
        data = JSON.parse(req.response);
        //let data = JSON.parse(req.responseText);
    }

function makeRequest(type, link, obj){
    req.open(type, link);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(obj);
}

function getData(){
    req.open('GET', apiLink, false);
    req.send();
}

function dataCleaner(){

    console.log("cleaning this");
    for(let person in data){
        ownerId.push(data[person].id);
        ownerFirst.push(data[person].firstName);
        ownerLast.push(data[person].lastName);
        ownerAddress.push(data[person].address);
        ownerTelephone.push(data[person].telephone);
        ownerCity.push(data[person].city)
    }
    owner = [ownerId, ownerFirst, ownerLast, ownerAddress, ownerCity, ownerTelephone, pet];
}

function addToOwner()
{
    for(let i = 0; i < 5; i++)
    {
        owner.push(ownerId[i]);
    }
}

function createTableOwner(){

    console.log("calling");

    for(let person in data){
    let table = document.createElement('tr');

    let id = document.createElement('td');
    id.innerText = ownerId[person];
    table.appendChild(id);

    let name = document.createElement('td');
    name.innerText = ownerFirst[person];
    name.innerText +=  " " + ownerLast[person];
    table.appendChild(name);

    let addy = document.createElement('td');
    addy.innerText = ownerAddress[person];
    table.appendChild(addy);

    let city  = document.createElement('td');
    city.innerText = ownerCity[person];
    table.appendChild(city);

    let phone = document.createElement('td');
    phone.innerText = ownerTelephone[person];
    table.appendChild(phone);

    tableBody.appendChild(table);
    }
}

function buttonHandle(){
    getData();
    dataCleaner();
    createTableOwner();
}







