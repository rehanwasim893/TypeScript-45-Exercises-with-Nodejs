let coutriesTovisit : string [] = ["China","Dnmark","Brazil","Argentina"];
console.log("Original Order:", coutriesTovisit);
console.log("Alphabetical Order:", [...coutriesTovisit].sort());
console.log("Still in Original Order", coutriesTovisit);
console.log("Reverse Order:", [...coutriesTovisit].reverse());
console.log("Still in Original Order", coutriesTovisit);
console.log("Original Arrey Reversed:",coutriesTovisit.reverse());
console.log("Back to Original Order:", coutriesTovisit.reverse());
console.log("sorted in Alphabetical order:", coutriesTovisit.sort() );
console.log("Original Arrey Reversed Again", coutriesTovisit.reverse());