

function get_input(){

    //action properties 
    const detailsinput = document.getElementsByClassName('action'); //selects all classes with 'action' and stores it in an array like object
    const codeaction = document.getElementsByClassName('actionoutput'); //selects all classes with 'code' and stores it in an array like object
    let myarray = [];

    for(i=0; i<detailsinput.length; i++){
        //console.log(classname[i].value)  
        myarray[i] = detailsinput[i].value //assigns the value at classname[i] to index myarray[i] 
        //console.log(myarray[i]);
    }    

    //assigns the values in the codeaction array to values inside each span element with class 'code' in the html file
    for(i=0; i<codeaction.length; i++){
        codeaction[i].innerHTML = myarray[i];
    }


    //Labels
    const userlabelinput = document.getElementsByClassName('labelinput');
    const userlabeloutput = document.getElementsByClassName('labeloutput');
    let labelinputarray = [];

    for(i=0; i<userlabelinput.length; i++){
        labelinputarray[i] = userlabelinput[i].value;
    }

    for(i=0; i<userlabeloutput.length; i++){
        userlabeloutput[i].innerHTML = labelinputarray[i]
    }


    //field types
    const userfieldinput = document.getElementsByClassName('fieldinput');
    const userfieldoutput = document.getElementsByClassName('fieldoutput');
    let fieldinputarray = [];

    for(i=0; i<userfieldinput.length; i++){
        fieldinputarray[i] = userfieldinput[i].value;
    }
    
    for(i=0; i<userfieldoutput.length; i++){
        userfieldoutput[i].innerHTML = fieldinputarray[i]
    }
}



let create = document.getElementById('createbtn');
create.addEventListener('click', get_input)


/*
let myarray = [];
document.querySelectorAll('action').value = myarray;

for(i=0; i<4; i++){
    
}
console.log(myarray)
*/



