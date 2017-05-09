/*global $, jQuery*/
$(function( ) {
    "use strict";
    $("input").focus();
    $("input").on("click", function () {
    $("#directoryWelcome").hide();
    });
});

$(function( ) {  
$.getJSON("data/directory.json", function (data) {
var i;
for (i = 0; i < data.employees.length; i += 1) {
// View Reports - CountBubble
function reportsInfo () {
    var reportCount = 0, j;
    for (j = 0; j < data.employees.length; j += 1) {
    if (data.employees[j].reportsTo === data.employees[i].id) {
        reportCount += 1;
    }
}  
    return reportCount;    
}
var viewReports = reportsInfo();
    $("#OverviewList").append(
        '<li id="employeeOverview"' + '">' +
        '<a href="#employeeDirectory"><img src="' + 
         data.employees[i].imagePath + '"><h2>' + data.employees[i].name + 
        "</h2><p>" +  data.employees[i].title + '<span class="ui-li-count">' + viewReports +'<span/>' + "</p></a></li>").listview("refresh");   
    
}
 });
 });
    

