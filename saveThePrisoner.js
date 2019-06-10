// Complete the saveThePrisoner function below.
const saveThePrisoner = (n, m, s) => {
    if ((s - 1 + m) % n === 0) {
       return n
   }
    return (s - 1 + m) % n
}

link: https://www.hackerrank.com/challenges/save-the-prisoner/problem