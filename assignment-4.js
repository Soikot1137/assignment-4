//problem 1
function cubeNumber(numbers) {
    if (typeof number !== "number") {
        return "enter your valid number "
    }
    return numbers ** 3;


}
const input = cubeNumber();
console.log(input)




// problem 2
function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== 'string') {
        return "Enter String"
    }
    else if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }

}
const string1 = "John Doe";
const string2 = "doe";
const result = matchFinder(string1, string2)
console.log(result)





// problem-4
function findAddress(yourObject) {
    const keys = ["street", "house", "society"];
    const outputArray = keys.map(key => yourObject[key] || "__");
    return outputArray.join(",");
}


const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
const output1 = findAddress(input1);
console.log(output1);

const input2 = { street: 10, society: "Earth Perfect" };
const output2 = findAddress(input2);
console.log(output2);

const input3 = { street: 10 };
const output3 = findAddress(input3);
console.log(output3);



// problem 5
function canPay(coins, price) {
    if (coins.length === 0) {
        return "Empty array, cannot pay";
    }

    const totalCoins = coins.reduce((sum, coin) => sum + coin, 0);

    if (totalCoins >= price) {
        return true;
    } else {
        return false;
    }
}

console.log(canPay([1, 2, 5], 10))

// console.log(canPay([1, 5, 5], 10))

// console.log(canPay([], 10))



