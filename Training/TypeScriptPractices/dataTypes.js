var users = ["abc"]; // | is a union data type in Ts
var add = function (item) {
    var a = users.push(item);
    console.log(users);
    return true;
};
add("xyz");
