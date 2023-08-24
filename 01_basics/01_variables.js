const accountId = 12145 // Cannot be changed
var accountName = "krishnamurthy" // global scoping issue
let accountEmail = "krishnamurthy@gmail.com" // Fixes the scoping in JS
accountCity = "Connoor" // the scope of this depends where you have declared this
let accountType; // undefined

console.table([accountId , accountName , accountEmail , accountCity , accountType])
