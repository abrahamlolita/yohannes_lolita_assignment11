/*global $, jQuery*/
$(function( ) {
    "use strict";
$("body").on("click", "#managerView", function () {
    var nameManager = $(this).find("p").text();
$.getJSON("data/directory.json", function (data) {
var i;
for (i = 0; i < data.employees.length; i += 1) {
if (data.employees[i].name === nameManager) {

// View Manager
function managerInfo () {
var manager = data.employees[i].reportsTo, manangerName, j;
for (j = 0; j < data.employees.length; j += 1) {
    if (manager === data.employees[j].id) {
        manangerName = data.employees[j].name;    
    } 
    if (manager === "") {
        manangerName = "";
    }  
}
    return manangerName;
}
var viewManager = managerInfo(); 

 
// View Reports
function reportsInfo () {
    var reportCount = 0, k;
    for (k = 0; k < data.employees.length; k += 1) {
    if (data.employees[k].reportsTo === data.employees[i].id) {
        reportCount += 1;
    }
}  
    return reportCount;    
}
var viewReports = reportsInfo();
    
$("#managerHeader").empty();
$("#managerHeader").append(
    "<li>" + "<img src='" + data.employees[i].imagePath + "'>" + "<h2>" + data.employees[i].name + "</h2>" + "<p>" + data.employees[i].title + "</p>" + "</li>"
).listview("refresh"); 

$("#managerDetails").empty();
$("#managerDetails").append(
"<li>" + "<a>" + "<h2>View Manager</h2><p>" + viewManager + "</p></a></li>" + '<li id="reports"' + '">' + "<a><h2>View Direct Reports</h2><p>" + viewReports + "</p></a></li>" + "<li>" + "<a href=" + "'tel:" + data.employees[i].officeNumber + "'>" + "<h2>Call Office</h2>" + "<p>" + data.employees[i].officeNumber + "</p></a></li>" + "<li>" + "<a href=" + "'tel:" + data.employees[i].cellNumber + "'>" + "<h2>Call Cell</h2>" + "<p>" + data.employees[i].cellNumber + "</p></a></li>" + "<li>" + "<a href=" + "'mailto:" + data.employees[i].email + "'><h2>E-mail " + data.employees[i].name + "</h2><p>" + data.employees[i].email + "</p></a>" + "</li>"
).listview("refresh");
}
}
    
});

    
    
    
 });   
});