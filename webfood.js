function myFun(){
    let searchval = document.getElementById("inp").value.toLocaleUpperCase();
    let table = document.getElementsByTagName("table")

    let tr = document.getElementsByTagName("tr");

 let front = document.querySelector(".main")


    for(let i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let text = td.innerText;
            if(text.toLocaleUpperCase().indexOf(searchval) > -1){
                tr[i].style.display="";
                front.style.display="none"
            }else{
                tr[i].style.display="none"
            }
        }
    }
if(searchval == ""){
    front.style.display="flex";
}
    console.log(searchval);
    
}



function nav(){
let nav = document.querySelector(".nav");
nav.style.display="block"

let log = document.querySelector(".login");
    log.style.display="none"


}



function Login(){
    let log = document.querySelector(".login");
    log.style.display="block"

    let nav = document.querySelector(".nav");
    nav.style.display="none"

    }



    // slide bar

    
  const customers = document.querySelectorAll(".customer")
  var counter = 0;

  customers.forEach(
      (customer,index) =>{
      customer.style.left = `${index * 100}%`
  }
  )


  const goPrev = () => {
     counter--;
     if(counter == -1){
     counter= customers.length-1;
     }
slideImage()
  }
  

const goNext = () =>{
    counter++
    if(counter == customers.length){
    counter=0;
    }
    slideImage()
}

  const slideImage = () =>{
      customers.forEach(

        (document) => {
            document.style.transform = `translateX(-${counter*100}%)`

        }
      )
  }
    

    
      


