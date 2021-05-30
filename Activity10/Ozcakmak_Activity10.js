$(function(){
    $("#birthday").datepicker();
});
var pls = [
    "RUBY",
    "ActionScript",
    "Java", 
    "VİSUAL BASİC", 
    "Asp",
    "JavaScript",
    "Lisp",
    "Perl",
    "C#",
    "Python",
    "GROOVY"
    ];
$( "#pl" ).autocomplete({
    source: pls 
    });