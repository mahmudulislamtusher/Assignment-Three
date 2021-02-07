//

// kilometerToMeter
function kilometerToMeter(kilometers){
    
    var kilometers;
    if (kilometers < 0) {
        return "Distance cannot be negetive, please enter positive value"
    }
    var meter = kilometers * 1000;
    return meter;
}
var result =kilometerToMeter(8);
console.log(result);

 // budgetCalculator
function budgetCalculator(numberOfwatch, numberOfmobile, numberOflaptop){
    var watch = numberOfwatch * 50;
    var mobile = numberOfmobile * 100;
    var laptop = numberOflaptop * 500;

    var totalBudget = watch + mobile + laptop;
    return totalBudget;
}

var output = budgetCalculator(1, 2, 1);
console.log(output);

// hotelCost
function hotelCost(days){
    let totalCost;
    if  (days <= 0) {
        return "Number of days cannot be negetive"
    } else if (days <= 10) {
        totalCost = days * 100;
        return totalCost;
    } else if (days > 10 && days <= 20) {
        totalCost = 1000 + ((days-10) * 80);
        return totalCost;
    } else if (days > 20) {
        totalCost = 1800 + ((days-20) * 50)
        return totalCost;
    }
} 

const hotelOutput = hotelCost(20)
console.log(hotelOutput);

//megaFriend
function megaFriend(names) {
  let mainLength = names[0].length;
  let place = 0
  for (let i = 1; i < names.length; i++) {
      if (mainLength < names[i].length) {
          mainLength = names[i].length;
          place = i;
      } 
  }
  return names[place];
}

let largestName = megaFriend(["Rafiul", "Rabbi", "Mushfiq"]);
console.log(largestName);