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

// get text function
function getTextById(id){
  const text = document.getElementById(id).innerText;
  return text;
}
// card -1
// Donate Now but add event listener
document.getElementById("donate-now").addEventListener("click", function(){
  const donationAmount = getInputValueById("donation-amount");
  const cardAmount = getTextValueById("card-amount");
  const navAmount = getTextValueById("nav-amount");
  const cardTitle = getTextById("card-1-title");
  // validation
  if(donationAmount > navAmount || isNaN(donationAmount) || donationAmount === ' ' || donationAmount <=0){
    alert('Invalid Data Input');
    return;
  }
  
  const cardTotalAmount = cardAmount + donationAmount;
  const navFinalAmount = navAmount - donationAmount;
  
  targetEl("card-amount").innerText = cardTotalAmount.toFixed(2);
  targetEl("nav-amount").innerText = navFinalAmount.toFixed(2);
  // add to history

   const historyItem = document.createElement("div");
   historyItem.className ="bg-white p-3 border-2 space-y-3 border-gray-200 rounded-2xl";

   historyItem.innerHTML = `

      <p class="text-xl text-black">${donationAmount.toFixed(2)} Taka ${cardTitle} </p>
      <p class="text-md text-gray-400">Date : ${new Date().toString()}</P>
  
   `;
   const historyList = document.getElementById("history-list");
   
   historyList.insertBefore(historyItem, historyList.firstChild);
   
});

// card -2
// Donate Now but add event listener
document.getElementById("donate-now-2").addEventListener("click", function(){
  const donationAmount = getInputValueById("donation-amount-2");
  const cardAmount = getTextValueById("card-amount-2");
  const navAmount = getTextValueById("nav-amount");
  const cardTitle = getTextById("card-2-title");
  // validation
  if(donationAmount > navAmount || isNaN(donationAmount) || donationAmount === ' ' || donationAmount <=0){
    alert('Invalid Data Input');
    return;
  }
  
  const cardTotalAmount = cardAmount + donationAmount;
  const navFinalAmount = navAmount - donationAmount;
  
  targetEl("card-amount-2").innerText = cardTotalAmount.toFixed(2);
  targetEl("nav-amount").innerText = navFinalAmount.toFixed(2);
  // add to history

   const historyItem = document.createElement("div");
   historyItem.className ="bg-white p-3 border-2 space-y-3 border-gray-200 rounded-2xl";

   historyItem.innerHTML = `

      <p class="text-xl text-black">${donationAmount.toFixed(2)} Taka ${cardTitle} </p>
      <p class="text-md text-gray-400">Date : ${new Date().toString()}</P>
  
   `;
   const historyList = document.getElementById("history-list");
   
   historyList.insertBefore(historyItem, historyList.firstChild);
   
});

// card -3
// Donate Now but add event listener
document.getElementById("donate-now-3").addEventListener("click", function(){
  const donationAmount = getInputValueById("donation-amount-3");
  const cardAmount = getTextValueById("card-amount-3");
  const navAmount = getTextValueById("nav-amount");
  const cardTitle = getTextById("card-3-title");
  // validation
  if(donationAmount > navAmount || isNaN(donationAmount) || donationAmount === ' '|| donationAmount <=0){
    alert('Invalid Data Input');
    return;
  }
  
  const cardTotalAmount = cardAmount + donationAmount;
  const navFinalAmount = navAmount - donationAmount;
  
  targetEl("card-amount-3").innerText = cardTotalAmount.toFixed(2);
  targetEl("nav-amount").innerText = navFinalAmount.toFixed(2);
  // add to history

   const historyItem = document.createElement("div");
   historyItem.className ="bg-white p-3 border-2 space-y-3 border-gray-200 rounded-2xl";

   historyItem.innerHTML = `

      <p class="text-xl text-black">${donationAmount.toFixed(2)} Taka ${cardTitle} </p>
      <p class="text-md text-gray-400">Date : ${new Date().toString()}</P>
  
   `;
   const historyList = document.getElementById("history-list");
   
   historyList.insertBefore(historyItem, historyList.firstChild);
   
});

// History button display
document.getElementById("history-btn").addEventListener("click", function(){
  targetEl("history-btn").classList.add("bg-[#B4F461]","border-none");
  
  targetEl("donation-btn").classList.remove("bg-primary");
  targetEl("donation-btn").classList.add("border-gray-400");
  targetEl("main-container").classList.add("hidden")
  targetEl("history-container").classList.remove("hidden");
})
// donation button display
document.getElementById("donation-btn").addEventListener("click", function(){
  targetEl("donation-btn").classList.add("bg-primary");
  
  targetEl("history-btn").classList.remove("bg-[#B4F461]","border-none");
  targetEl("history-btn").classList.add("border-gray-400");
  targetEl("main-container").classList.remove("hidden");
  targetEl("history-container").classList.add("hidden");
})

