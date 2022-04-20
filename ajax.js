console.log("Ajax in one video");

let fetchbtn= document.getElementById('fetchbtn');
fetchbtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log('You have clicked on fetchbtn');
    //Instantiate an xhr object
    const xhr= new XMLHttpRequest();
    //open the object
    // xhr.open('GET','https://dummyjson.com/products/1',true);
    //for post
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/x-www-formurlencoded'); 
    //what to do on progress
    xhr.onprogress=function(){
        console.log('On progress');
    }
    //what to do whn resposne is ready
    xhr.onload=function(){
    if(this.status==200){
        console.log(this.responseText);
    }
    else{
        console.log('Some error occured');
    }
    }

    //send the request
    params =`{"name":"testqs","salary":"1123","age":"23"}`
    xhr.send(params);
    console.log('We are done');
}