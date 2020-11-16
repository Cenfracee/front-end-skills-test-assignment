/*
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                     Version 2, December 2004
 *
 *  Copyright (C) 2020 IJSE
 *
 *  Everyone is permitted to copy and distribute verbatim or modified
 *  copies of this license document, and changing it is allowed as long
 *  as the name is changed.
 *
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. You just DO WHAT THE FUCK YOU WANT TO.
 */

/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/15/20
 **/

/*===============================================================================
 * Global Variables
 *===============================================================================*/

// Todo: add all global variable declaration here
var txtIDRegex = new RegExp("^C\\d\\d\\d$");
var txtNameRegex = new RegExp("[A-Za-z \.]+");
var txtAddressRegex = new RegExp("^.+$");//No special requirement mentioned in the assignment?

var cusIDValid = false;
var cusAddressValid = false;
var cusNameValid = false;


/*===============================================================================
 * Init
 *===============================================================================*/

init();

function init() {
    // Todo: add the initialization code if any
}

/*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*/

// Todo: add all event listeners and handlers here

/*===============================================================================
 * Functions
 *===============================================================================*/

// Todo: add all functions


function save() {
    var customerID = document.getElementById("txt-id").value;
    var customerName = document.getElementById("txt-name").value;
    var customerAddress = document.getElementById("txt-address").value;


    var is_ID_Valid = txtIDRegex.test(customerID);
    var is_Name_Valid = txtNameRegex.test(customerName);
    var is_Address_Valid = txtAddressRegex.test(customerAddress);

    //Customer Address validation
    var cusAddressAlert = document.querySelector('#cusAddressAlert');
    var txtCusAddress = document.getElementById("txt-address");
    if (is_Address_Valid && customerAddress.trim().length > 3) {
        cusAddressAlert.style.display = "none";
        txtCusAddress.style.border = "";
        cusAddressValid = true;
    } else {
        cusAddressValid = false;
        cusAddressAlert.style.display = "flex";
        txtCusAddress.style.border = "solid red";
        txtCusAddress.focus();
        document.getElementById("cusAddressAlert").innerHTML = "Invalid format."//This line will not execute since no special format requirements defined.
        if (customerAddress.trim().length <= 3) {
            if (customerAddress.trim().length === 0) {
                document.getElementById("cusAddressAlert").innerHTML = "Too short. Field can't be blank";
            } else {
                document.getElementById("cusAddressAlert").innerHTML = "Too short. Needs to be more than 3 characters.";
            }
        }
    }


    //Customer Name validation
    var cusNameAlert = document.querySelector('#cusNameAlert');
    var txtCusName = document.getElementById("txt-name");
    if (is_Name_Valid && customerName.trim().length > 3) {
        cusNameAlert.style.display = "none";
        txtCusName.style.border = "";
        cusNameValid = true;
    } else {
        cusNameValid = false;
        cusNameAlert.style.display = "flex";
        txtCusName.style.border = "solid red";
        txtCusName.focus();
        document.getElementById("cusNameAlert").innerHTML = "Invalid format."
        if (customerName.trim().length <= 3) {
            if (customerName.trim().length === 0) {
                document.getElementById("cusNameAlert").innerHTML = "Too short. Field can't be blank";
            } else {
                document.getElementById("cusNameAlert").innerHTML = "Too short. Needs to be more than 3 characters.";
            }
        }
    }

    //Customer ID validation
    var cusIDAlert = document.querySelector('#cusIDAlert');
    var txtCusID = document.getElementById("txt-id");
    if (is_ID_Valid) {
        cusIDAlert.style.display = "none";
        txtCusID.style.border = "";
        cusIDValid = true;
    } else {
        cusIDAlert.style.display = "flex";
        txtCusID.style.border = "solid red";
        txtCusID.focus();
        cusIDValid = false;
    }


    if (cusIDValid && cusNameValid && cusAddressValid) {
        document.getElementById("tableFooter").style.visibility="hidden";
        insertRow();
    }

}

function insertRow() {
    var table = document.getElementById("tbl-customers").getElementsByTagName("tbody")[0];
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "C001";
    cell2.innerHTML = "dasda";
    cell3.innerHTML = "asddCELL2";
    cell4.innerHTML = "<img src=\"\" class=\"table-icon\" onclick=\"deleteRow()\">";
}

function deleteRow(){
    console.log("click works");
}
function clear() {

}