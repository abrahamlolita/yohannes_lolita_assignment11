/*global $, jQuery*/
$(function () {
"use strict";
$("body").on("click", "#reports", function () {
var reportsName = $("#employeeHeader").find("h2").text();
var reportsBubble = $(this).find("p").text();
    
    window.console.log(reportsName);
    window.console.log(reportsBubble);    
    
   $.getJSON("../data/directory.json", function (data) {
   var i;
    for (i = 0; i < data.employees.length; i += 1) {
        if (reportsBubble > 0) {    
//View Reports - CountBubble
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
// End View Reports - CountBubble
        
var managerId = data.employees[i].reportsTo, subbordinateName,  subbordinateTitle, subbordinateImage, k;
for (k = 0; k < data.employees.length; k += 1) {
if (reportsName === data.employees[k].name && data.employees[k].id === managerId) {               subbordinateName = data.employees[i].name; 
    subbordinateTitle = data.employees[i].title; 
    subbordinateImage = data.employees[i].imagePath;
    }
}
   $("#directReports").empty();
   $("#directReports").append(
    '<li id="subbordinateOverview"' + '">' +
    "<a>" + '<img src="' + subbordinateImage + '"><h2>' + subbordinateName + "</h2><p>" + subbordinateTitle + '<span class="ui-li-count">' + viewReports +'<span/>' + "</p></a></li>").listview("refresh"); 
            
    }
    }
    });
  });  
});
    
    
    
