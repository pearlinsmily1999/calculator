function add()
{
let num1=Number(document.getElementById('num1').value);
let num2= Number(document.getElementById('num2').value);
let ans=num1+num2;
document.getElementById('Result').value=Number(ans);
}
function sub()
{
let num1=document.getElementById('num1').value;
let num2=document.getElementById('num2').value;
let ans=num1-num2;
document.getElementById('Result').value=ans;
}
function mul()
{
let num1=document.getElementById('num1').value;
let num2=document.getElementById('num2').value;
let ans=num1*num2;
document.getElementById('Result').value=ans;
}
function div()
{
let num1=document.getElementById('num1').value;
let num2=document.getElementById('num2').value;
let ans=num1/num2;
document.getElementById('Result').value=ans;
}
function reset()
{
    document.getElementById('num1').innerHTML="";
    document.getElementById('num2').innerHTML="";
    document.getElementById('Result').innerHTML="";
}