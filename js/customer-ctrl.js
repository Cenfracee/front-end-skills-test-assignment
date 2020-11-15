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
var txtAddressRegex = "";


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

function save(){
var customerID = document.getElementById("txt-id").value;
var customerName=document.getElementById("txt-name").value;
var customerAddress=document.getElementById("txt-address").value;


var is_ID_Valid = txtIDRegex.test(customerID);
var is_Name_Valid=txtNameRegex.test(customerName);



    var cusIDAlert = document.querySelector('#cusIDAlert');
    var txtCusID=document.getElementById("txt-id");
    if(is_ID_Valid){
        cusIDAlert.style.display="none";
        txtCusID.style.border="";
    }else {
        cusIDAlert.style.display="flex";
        txtCusID.style.border="solid red";
        txtCusID.focus();
    }




}
function clear(){

}