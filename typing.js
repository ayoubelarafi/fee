let arabic =document.getElementById("arabic");
let english =document.getElementById("english");
let title =document.getElementById("title");


  arabic.onclick =() => {
            old("arabic");
            localStorage.setItem("lang","arabic");

};
  english.onclick =() => {
            old("english");
            localStorage.setItem("lang","english");

};
onload = () =>{
    old (localStorage.getItem("lang"));
}
  function old (girl){ 
      if( girl==="arabic"){
        title.innerHTML="المبرمج أيوب";
      }else if ( girl==="english"){ 
          title.innerHTML="coder ayoub";

      }

  }
