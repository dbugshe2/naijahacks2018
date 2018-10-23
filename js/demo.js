//  just going to cram everything in here

// projects sample model
if(window.localStorage.hasItem('projectCount')) {
    var projectCount = window.localStorage.getItem('projectCount');
} else {
    var projectCount = 0;
}
var project = {
    id: 1,
    name: "",
    type: "",
    desc: "",
    collaborator: "",
    city: "",
    state: "",
    school: "",
    userType: "",
    costEstimate: "",
    start: "",
    end: ""

},

name = document.getElementById("projname"),
projtype = document.getElementById("projtype"),
projdesc = document.getElementById("projdesc"),
projcollab = document.getElementById("projcollab"),
projstate = document.getElementById("projstate"),
usertype = document.getElementById("usertype"),
cost = document.getElementById("cost"),
start = document.getElementById("start"),
end = document.getElementById("end"),
submitbtn = document.getElementById("createsubmit");


function populateProject(){

}

function createProject(){
    return;
}

function saveProjects(){
    return;
}




submitbtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("submited");
    populateProject();

});