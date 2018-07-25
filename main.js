function loadData(generalProfile) {
    let stringifiedObject = localStorage.getItem(generalProfile);
    let parsedObject = JSON.parse(stringifiedObject);
    return parsedObject;
}
console.log(loadData("General Profile"));

let data = loadData("General Profile");

const placeContent = document.getElementById("flex-container");

placeContent.innerHTML +=
    `<div class="generalProfile-flex">
    <h1>${data.pageTitle1}</h1>
    <div class="generalProfile-flex">
    <div>
        <h3>${data.agreeWith1}</h3>
        <h3>${data.agreeWith2}</h3>
        <h3>${data.agreeWith3}</h3>
        <h3>${data.disagreeWith1}</h3>
        <h3>${data.disagreeWith2}</h3>
        <h3>${data.disagreeWith3}</h3>
    </div>
    </div>
    </div>`


placeContent.innerHTML +=
    `<div class="generalProfile-flex">
    <h1>${data.pageTitle2}</h1>
    <div class="generalProfile-flex">
    <div>
        <h2>${data.personLikeMe1}</h2>
        <h2>${data.personLikeMe2}</h2>
        <h2>${data.personLikeMe3}</h2>
        <h2>${data.personLikeMe4}</h2>
    </div>
    </div>
    </div>`


    placeContent.innerHTML +=
    `<div class="generalProfile-flex">
    <h1>${data.pageTitle3}</h1>
    <div class="generalProfile-flex">
    <div>
        <h2>${data.howICommunicate}</h2>
        <h2>${data.instructorsCommunicate}</h2>
        <h2>${data.teammatesCommunicate}</h2>
    </div>
    </div>
    </div>`