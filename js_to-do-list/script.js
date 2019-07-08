var count = localStorage.length;

function displayList(){
  var counting = localStorage.length;
  for (i=0; i<counting ; i++){
    var idname = "data" + i;
    var newitem = localStorage.getItem(idname);
    if (newitem == null){
      counting +=1;
    }

    else{
    puttingonlist(idname,newitem);
    }
       
  } 
  
  deletefunction();
  clickfucntion();
  editfunction();
  
}


function puttingonlist(idname,newitem){
  var newt= document.createElement("li");
  var toappend = document.createTextNode(newitem);
      
  newt.appendChild(toappend);
  newt.setAttribute("id", idname);
  document.getElementById("listname").appendChild(newt);

  var checkbox = document.createElement("span");  
  checkbox.className="far";
  newt.append(checkbox);

  var editbutton = document.createElement("button");
  var txtbut = document.createTextNode("Edit");
  editbutton.className="editbutton";
  editbutton.appendChild(txtbut);
  newt.appendChild(editbutton);
  
  var deletebutton = document.createElement("button");    
  var txt = document.createTextNode("Delete");   
  deletebutton.className= "delbutton";    
  deletebutton.appendChild(txt);    
  newt.appendChild(deletebutton);
}
  
function clickfucntion(){
var li = document.getElementsByTagName("li");

  for (i=0; i<li.length; i++){
    let checkbox = document.getElementsByClassName("far");
    let checkb = checkbox[i];
    
    li[i].onclick = function(){
      if (this.style.color == "white"){      
        this.style.color = "black";
        this.style.setProperty("text-decoration","none");
        checkb.className ="far";    
        this.style.setProperty("background-color","white");
        
      }

      else{
      this.style.color="white";
      this.style.setProperty("text-decoration","line-through");
      checkb.className="far fa-check-circle";
      checkb.style.setProperty("margin-left","2rem");
      checkb.style.setProperty("color","red");
      checkb.style.setProperty("font-size","1.5rem");
      this.style.setProperty("background-color","rgb(121, 156, 233)");

      }
    }
  }
} 


function addtolist(){

  for (i =0; i <count; i++){
    var idname = "data" + i;
    if (localStorage.getItem(idname) == null){
      break;
    }

    else {
      continue;
    }
  }
  var newitem = document.getElementById("inputlist").value;
  localStorage.setItem(idname, newitem );
  puttingonlist(idname,newitem);
  

  count +=1;
  deletefunction(); 
  clickfucntion();  
  editfunction();
}

function deletefunction(){
  var delbut = document.getElementsByClassName("delbutton");
   
  for (i = 0; i < delbut.length; i++) {
    
    delbut[i].onclick = function() {
      console.log(i);
      
      var div = this.parentElement;
      var key = div.id;
      localStorage.removeItem(key);
      var ul = div.parentElement;
      ul.removeChild(div);   
       
       
    } 
  }
}

function editfunction(){
  let editbut = document.getElementsByClassName("editbutton");

  for (i = 0; i < editbut.length; i++) {
    
    editbut[i].onclick = function(event) {
      event.stopPropagation();
      var modal = document.getElementById("myModal");
      var editbutton = document.getElementById("edit");

      modal.style.display ="block";
      let val=document.getElementById("modaltext").value;
      let div = this.parentElement;
      let key = div.id;
      var textnode = document.createTextNode("");
      
      editbutton.addEventListener("click" ,function(){
        
        modal.style.display="none";       
        var textnode = document.createTextNode(val);
      
        console.log(textnode);             
        div.replaceChild(textnode,div.childNodes[0]);
        div.appendChild(textnode);
        
        localStorage.setItem(key,val);
      });
      
            
    }; 
  }
  
}






// function replacep(){
//   console.log(i);
//   debugger;
//   let li = document.getElementsByTagName("li");
//   for (var j=i; j<li.length; j++){
//     let m = j+1;
//     let idname = "data" +j;
//     let idname2 = "data" + m;
//     let itemval = localStorage.getItem(idname2);
    
//     localStorage.setItem(idname, itemval);
//   }
// }





