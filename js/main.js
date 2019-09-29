var isOkCopy = [...isOk];
var isNotOkCopy = [...isNotOk];

isOkCopy = new Set(isOkCopy.map(function(i){return i.toLowerCase()}));
isNotOkCopy = new Set(isNotOkCopy.map(function(i){return i.toLocaleLowerCase()}));

