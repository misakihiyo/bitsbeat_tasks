var count = localStorage.length;

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("");
  span.className = "fas fa-trash-alt";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var del = document.getElementsByClassName("fas");
var i;
for (i = 0; i < del.length; i++) {
  del[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function addtolist(){
    var idname = "data" + count;
    var newitem = document.getElementById("inputlist").value;
    localStorage.setItem(idname, newitem );
    var newt= document.createElement("li");    
    var toappend = document.createTextNode(newitem);
    newt.appendChild(toappend);
    newt.setAttribute("id", idname);
    document.getElementById("listname").appendChild(newt);
    
    var spana = document.createElement("SPAN");
    var txt = document.createTextNode("");
    spana.className = "fas fa-trash-alt";
    spana.appendChild(txt);
    newt.appendChild(spana);

    for (i = 0; i < del.length; i++) {
        del[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    
    count +=1;
}

function displayList(){
        
    for (i=0;i<count ; i++){
        var idname = "data" + i;
        var newitem = localStorage.getItem(idname);
        var newt= document.createElement("li");
        var toappend = document.createTextNode(newitem);

        
        newt.appendChild(toappend);
        newt.setAttribute("id", idname);
        document.getElementById("listname").appendChild(newt);
        
        var spana = document.createElement("SPAN");
        var txt = document.createTextNode("");
        spana.className = "fas fa-trash-alt";
        spana.appendChild(txt);
        newt.appendChild(spana);
       
    }


}
