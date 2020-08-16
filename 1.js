function commentpost() {
    let usrname = document.querySelector('#Username').value;
    let usrpwd = document.querySelector('#Password').value;
    let usrmail = document.querySelector('#Email').value;
   
    //dynamic commentbox;
    let newElement = document.querySelector('#referenceid').cloneNode(true);

    newElement.removeAttribute("id");
    newElement.style.visibility="visible";

    newElement.children[0]= usrname;
    newElement.children[1]= usrpwd;
    newElement.children[2]= usrmail;

    newElement.style.display = "flex";
    newElement.style.justifyContent="space-between";
    newElement.style.display = "flex";

    //create infoarea
    let infoarea = document.querySelector('#infoarea');

    //insert
    infoarea.insertBefore(newElement,infoarea.firstChild);

    //clear datafield
    document.querySelector('#Username').value= " ";
    usrpwd = document.querySelector('#Password').value= "";
    usrmail = document.querySelector('#Email').value= " ";

}