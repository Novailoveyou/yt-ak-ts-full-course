var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var user = {
    name: 'Nover',
    age: 24,
    getMessage: function () {
        return 'Hello ' + name;
    }
};
var user2 = {
    name: 'Jack',
    getMessage: function () {
        return 'Hello ' + name;
    }
};
console.log(user.getMessage());
