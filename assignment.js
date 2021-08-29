// Problem 1. [ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।

function seerToMon(seer) {
  if (typeof seer != "number") {
    return "Please Enter a Number type value";
  } else if (seer < 0) {
    return "Please Enter a positive number";
  } else {
    // convert seer to mon
    const mon = seer / 40;
    return mon;
  }
}

console.log(seerToMon(80));

/*

 Problem 2. [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি শার্টের দাম – ১০০ টাকা

১ টি প্যান্টের দাম – ২০০ টাকা 

১ টি জুতার দাম – ৫০০ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। 

*/

function totalSales(shirts, pants, shoes) {
  if (
    typeof shirts != "number" ||
    typeof pants != "number" ||
    typeof shoes != "number"
  ) {
    return "Please Enter a Number type value";
  } else if (shirts < 0 || pants < 0 || shoes < 0) {
    return "Please Enter a positive Number";
  } else {
    // multiply product number to product price
    const shirtPrice = shirts * 100;
    const pantPrice = pants * 200;
    const shoePrice = shoes * 500;
    // calculate all product price
    const totalCost = shirtPrice + pantPrice + shoePrice;
    return totalCost;
  }
}

console.log(totalSales(10, 10, 10));

/*

 Problem 3. [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে। 

যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম টি শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। 

যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে। 



এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা ডেলিভার খরচ হবে। 

*/

function deliveryCost(productNumber) {
  if (typeof productNumber != "number") {
    return "Please Enter a Number type value";
  } else if (productNumber < 0) {
    return "Please Enter a positive number";
  } else if (productNumber <= 100) {
    // calculate first hundred delivery cost
    const totalCost = productNumber * 100;

    return totalCost;
  } else if (productNumber <= 200) {
    // multiply product number to delivery cost
    const firstHundred = 100 * 100;
    const remainingProduct = productNumber - 100;
    const secondHundred = remainingProduct * 80;
    // calculate (1-200) product total delivery cost
    const totalCost = firstHundred + secondHundred;

    return totalCost;
  } else {
    // multiply product number to delivery cost
    const firstHundred = 100 * 100;
    const secondHundred = 100 * 80;
    const remainingProduct = productNumber - 200;
    const moreThenTwoHundred = remainingProduct * 50;
    // calculate more then two hundred product total delivery cost
    const totalCost = firstHundred + secondHundred + moreThenTwoHundred;

    return totalCost;
  }
}

console.log(deliveryCost(500));

// Problem 4.  [ ফাংশন নেম দিতে হবে perfectFriend]: বিস্তারিত ভিডিওতে দেখো।

function perfectFriend(arrayOfFriendsName) {
  let fiveLetterName = "";
  for (const friend of arrayOfFriendsName) {
    if (typeof friend != "string") {
      return "Please Enter a String";
    }
    if (friend.length == 5) {
      // if name have 5 letter set the name in fiveLetterName & stop the loop
      fiveLetterName = friend;
      break;
    }
  }
  if (fiveLetterName == "") {
    return "Please Enter a Five letter Name";
  } else {
    return fiveLetterName;
  }
}

const friendsName = [ "Farhan", "Roky Bhai", "Mezbha Bhai", "Israfil Bhai", "Nahid", "Tamim Bhai"];
console.log(perfectFriend(friendsName));
