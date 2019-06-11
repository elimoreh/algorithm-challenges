// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    if (Math.abs(x - z) < Math.abs(y - z)) {
        return"Cat A"
    }
    if (Math.abs(x - z) > Math.abs(y - z)) {
        return "Cat B"
    }
    if (Math.abs(x - z) === Math.abs(y - z)) {
        return "Mouse C"
    }
}

link: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem