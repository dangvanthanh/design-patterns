var StringBuilder = /** @class */ (function () {
    function StringBuilder(value) {
        this.value = value;
    }
    StringBuilder.prototype.then = function (next) {
        return new StringBuilder(next(this.value));
    };
    StringBuilder.prototype["finally"] = function () {
        return this.value;
    };
    return StringBuilder;
}());
function capitalize(str) {
    return "".concat(str.charAt(0).toUpperCase(), " ").concat(str.slice(1));
}
var myName = 'charles specer chaplin    ';
var myString = new StringBuilder(myName)
    .then(function (str) { return str.trim(); })
    .then(capitalize)["finally"]();
console.log(myString);
