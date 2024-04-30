const btnC = document.querySelector("#check-btn");
const btnR = document.querySelector("#clear-btn");
const input = document.querySelector("input");
const result = document.querySelector("#results-div");


btnC.addEventListener("click", validarInput);    
function validarInput(){
    const inputV = document.querySelector("input").value;
if(inputV){
    console.log("1- ok");
    ValidarNumero();
}else{
      Swal.fire("Please provide a phone number");

}
}   
function ValidarNumero(){
    const inputV = document.querySelector("input").value;
     // Expresiones regulares para los formatos válidos
     const formatos = [
        /^1 \d{3}-\d{3}-\d{4}$/,        // Formato: 1 555-555-5555
        /^1 \(\d{3}\) \d{3}-\d{4}$/,    // Formato: 1 (555) 555-5555
        /^1\(\d{3}\)\d{3}-\d{4}$/,      // Formato: 1(555)555-5555
        /^1 \d{3} \d{3} \d{4}$/,        // Formato: 1 555 555 5555
        /^\d{10}$/,                     // Formato: 5555555555
        /^\d{3}-\d{3}-\d{4}$/,          // Formato: 555-555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/        // Formato: (555)555-5555
      ];

      const e = formatos.some((formato) => formato.test(inputV));

      console.log(e);
       if(e===true){
        console.log("2-ok");
        result.textContent=`valid US number: ${inputV}`;
        
       }else{
        result.textContent=`Invalid US number: ${inputV}`;
       }
    
}

input.addEventListener("focus", function(){
    result.textContent="writing..."
});
input.addEventListener("blur", function(){
    result.textContent="waiting..."
});
btnR.addEventListener("click", function(){
result.textContent="";
});
