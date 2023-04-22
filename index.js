
document.querySelector('.cross').style.display='none';
document.querySelector('.hamberger').addEventListener('click',()=>
{
document.querySelector('.sidebar').classList.toggle('turnsidebar');
if(document.querySelector('.sidebar').classList.contains('turnsidebar'))
{
document.querySelector('.cross').style.display='none';
document.querySelector('.iron').style.display="inline";
}
else
{
    document.querySelector('.iron').style.display="none";
    document.querySelector('.cross').style.display='inline';
}
},300
)
var index=0;
var text= `Hi,this is`+ ` Nitin Pandey `
// `<br>Nitin Pandey` ;
function typetext()
{
if(index<text.length)
{
    document.getElementById('#auto1').innerHTML+=text.charAt(index);
index++;
setTimeout(typetext,300);

}
}
// var index1=0;
// const delay=3000;
// var text1= `Nitin Pandey` ;
// function typetext1()
// {
// if(index1<text1.length)
// {
//     document.getElementById('auto2').innerHTML+=text1.charAt(index1);
// index1++;
// setInterval(typetext1,500);
// setTimeout(typetext1,5000);
// }
// }
typetext();
// typetext1();