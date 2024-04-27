var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var coutriesTovisit = ["China", "Dnmark", "Brazil", "Argentina"];
console.log("Original Order:", coutriesTovisit);
console.log("Alphabetical Order:", __spreadArray([], coutriesTovisit, true).sort());
console.log("Still in Original Order", coutriesTovisit);
console.log("Reverse Order:", __spreadArray([], coutriesTovisit, true).reverse());
console.log("Still in Original Order", coutriesTovisit);
console.log("Original Arrey Reversed:", coutriesTovisit.reverse());
console.log("Back to Original Order:", coutriesTovisit.reverse());
console.log("sorted in Alphabetical order:", coutriesTovisit.sort());
console.log("Original Arrey Reversed Again", coutriesTovisit.reverse());
