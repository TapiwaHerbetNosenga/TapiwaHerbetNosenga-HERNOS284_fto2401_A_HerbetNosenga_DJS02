const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  try{
    if(dividend ==="" || divider ===""){
    throw new Error("Division not performed. Both values are required in inputs. Try again");
  }
    if(dividend ==="0" || divider ==="0"){
    throw new Error("Division not performed.  Invalid number provided. Try again");
  }
    try{if(typeof(dividend) !== Number || typeof(divider) !== Number){
    const notANumberErr = document.createElement("h1");
    notANumberErr.innerText = "Something critical went wrong. Please reload the page";
    document.body.innerHTML = "";
    document.body.appendChild(notANumberErr);
    throw new Error("Something critical went wrong with the input, a non number was entered.")
  }}
  catch(error){
    console.error("An error occurred:", error.message);
    console.error("Stack trace:", error.stack);
  }
  result.innerText = Math.floor(dividend / divider);}

  catch(error) {
    
    alert(`${error.message}`)}
});