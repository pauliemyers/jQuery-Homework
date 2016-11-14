var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');


$("#sizesmall").click(function () {
    $("#myCanvas").attr('width', canvas.width / 2).attr('height', canvas.height / 2);
    alert("Your new canvas height is " + canvas.height + " and your new canvas width is " + canvas.width);
    
});

$("#sizelarge").click(function () {
    $("#myCanvas").attr('width', canvas.width * 2).attr('height', canvas.height * 2);
    alert("Your new canvas height is " + canvas.height + " and your new canvas width is " + canvas.width);
    
});

$("#changecolor").click(function () {
    var rred = Math.floor(255 * Math.random());
    var rgreen = Math.floor(255 * Math.random());
    var rblue = Math.floor(255 * Math.random());
    $("#myCanvas").attr('style', "background-color: rgb(" + rred + ',' + rgreen + ',' + rblue + ')');
    alert("Your new canvas background color is: rgb(" + rred + ',' + rgreen + ',' + rblue + ')');
    
});