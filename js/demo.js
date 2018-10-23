//  just going to cram everything in here

// projects sample model

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

var createcontent = [name, projtype, projdesc, projcollab, projstate, usertype, cost, start, end];

function populateProject(){

}

function createProject(){
    return;
}

function saveProjects(){
    return;
}

function validate(elList) {
    elList.forEach(function (element) {
        if (element.value == null || element.value == ''){
            element.className += " " + "is-invalid";
        }
    });
}

submitbtn.addEventListener('click', function(event) {
    console.log("submited");
    validate(createcontent);

})