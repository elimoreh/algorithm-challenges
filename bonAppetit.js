// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    bill[k] = 0
    var totalOwed = bill.reduce(function (a, b) { return a + b });
    totalOwed = totalOwed / 2
    if (b === totalOwed) { console.log("Bon Appetit") }
    else {
        console.log(b - totalOwed)
    }
}

link: https://www.hackerrank.com/challenges/bon-appetit/problem