var count = localStorage.length;
function displayList(){
        
  for (i=0; i<count ; i++){
    var idname = "data" + i;
    var newitem = localStorage.getItem(idname);
    var newt= document.createElement("li");
    var toappend = document.createTextNode(newitem);

    
    newt.appendChild(toappend);
    newt.setAttribute("id", idname);
    document.getElementById("listname").appendChild(newt);
    
    var deletebutton = document.createElement("button");    
    var txt = document.createTextNode("button");   
    deletebutton.className= "delbutton";    
    deletebutton.appendChild(txt);    
    newt.appendChild(deletebutton); 
  } 
  
  let del = document.getElementsByClassName("delbutton");
  console.log(del.length);
  
}
var del= document.getElementsByTagName("li");
console.log(del.length);

function addtolist(){
  var idname = "data" + count;
  var newitem = document.getElementById("inputlist").value;
  localStorage.setItem(idname, newitem );
  var newt= document.createElement("li");    
  var toappend = document.createTextNode(newitem);
  newt.appendChild(toappend);
  newt.setAttribute("id", idname);
  document.getElementById("listname").appendChild(newt);
  
  var deletebutton = document.createElement("button");    
  var txt = document.createTextNode("button");   
  deletebutton.className= "delbutton";    
  deletebutton.appendChild(txt);    
  newt.appendChild(deletebutton); 

  count +=1;
    
}






  