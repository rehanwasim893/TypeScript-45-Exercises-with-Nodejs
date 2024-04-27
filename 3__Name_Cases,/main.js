var personName = "Rehan Wasim";
console.log(personName.toLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toLocaleUpperCase(); }));
