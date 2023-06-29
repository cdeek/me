
function updateRate() 
{  let rateval = document.getElementById("rate");
   let output = document.getElementById("rate_val");
   output.innerHTML = rateval.value + "%";
}
function compute() {

    let principal = document.getElementById("principal").value;

   if (principal <= 0 || principal == "")
   {
       alert("Enter a positive number");
document.getElementById("principal").focus();
       return;
   }
   
   let dur = document.getElementById("duration").value;
   let rate = document.getElementById("rate").value;
   let ymd = document.getElementById("year-month-day").value;
   let time = dur / ymd;
   let interest = principal * time * rate / 100;
   let dateNow = new Date();
   let yearNow = parseInt(dateNow.getFullYear()) + parseInt(time);
   let amt = parseInt(interest) + parseInt(principal)
if (ymd != 1) {
  	yearNow = ""
 };

let resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>"  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an interest of " + "<span class='highlight'>" + amt + "</span>" + ", <br> in the year " + "<span class='highlight'>" + yearNow + "</span>";
    document.getElementById("result").style.backgroundColor = "lightgray";
   }
   