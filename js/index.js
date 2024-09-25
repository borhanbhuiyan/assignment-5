// target common function
function targetEl(id){
  const targetElement = document.getElementById(id);
  return targetElement;
}

// get input common  function
function getInputValueById(id){
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
};

// get text field value common  function
function getTextValueById(id){
  const textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
};
// card -1
// Donate Now but add event listener
document.getElementById("donate-now").addEventListener("click", function(){
  const donationAmount = getInputValueById("donation-amount");
  const cardAmount = getTextValueById("card-amount");
  const navAmount = getTextValueById("nav-amount")
  
  const cardTotalAmount = cardAmount + donationAmount;
  const navFinalAmount = navAmount - donationAmount;
  
  targetEl("card-amount").innerText = cardTotalAmount.toFixed(2);
  targetEl("nav-amount").innerText = navFinalAmount.toFixed(2);
  // add to history
  
});

// History button display
document.getElementById("history-btn").addEventListener("click", function(){
  targetEl("history-btn").classList.add("bg-[#B4F461]","border-none");
  
  targetEl("donation-btn").classList.remove("bg-primary");
  targetEl("donation-btn").classList.add("border-gray-400");
  targetEl("main-container").classList.add("hidden")
})
// donation button display
document.getElementById("donation-btn").addEventListener("click", function(){
  targetEl("donation-btn").classList.add("bg-primary");
  
  targetEl("history-btn").classList.remove("bg-[#B4F461]","border-none");
  targetEl("history-btn").classList.add("border-gray-400");
  targetEl("main-container").classList.remove("hidden")
})

