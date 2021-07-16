let content=document.getElementById("content");
let button=document.getElementById("button");
let list=document.getElementById("list");
function print1()
{

    // list.innerHTML+="<li>" +content.value +"</li>";
    

    
    //add the x button
var xbtn=document.createElement('button');
xbtn.innerText='✂️';
xbtn.onclick=function (event)
{
    event.target.parentElement.remove()
}

//add up button
let upbtn=document.createElement("button")
upbtn.innerText='⬆'
upbtn.onclick=function (event)
{
//event.target=the up button
//event .target.parrebtElement=the<li>itom
//event.target.parrentElement.parrentElement is a todo list
event.target.parentElement.parentElement.insertBefore( event.target.parentElement,/*ensert the element.*/  event.target.parentElement.previousElementSibling/*before its p*/)
}
// add the task text
let taskSpan=document.createElement('span')
taskSpan.innerText=content.value


//add down button
let dnbtn=document.createElement("button")
dnbtn.innerText='⬇'

dnbtn.onclick=function (event)
{
//event.target=the down button
//event .target.parrebtElement=the<li>itom
//event.target.parrentElement.parrentElement is a todo list

event.target.parentElement.parentElement.insertBefore(event.target.parentElement.nextElementSibling/*before its p*/,event.target.parentElement/*ensert the element.*/);
}


// add the task text
let taskSpan1=document.createElement('span')
taskSpan1.innerText=content.value
let li=document.createElement('li')

    // li.innerText=content.value;
    li.appendChild(upbtn)
    li.appendChild(dnbtn)
    li.appendChild(xbtn);
    li.appendChild(taskSpan)

list.appendChild(li);
content.value="";
}