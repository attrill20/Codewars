/* Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. 
Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!" */

// return masked string
// could .split the string into an array, then .map the array, then .join the array?
// or could use nth.last.child selector to select the last 4 characters and leave the rest as #?

function maskify(cc) {
    let arr = cc.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 4) {
            newArr.push('#');
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join('');
}

// a better answer using .slice and .replace (does slice basically work as cut and paste?)

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// 30/3/23