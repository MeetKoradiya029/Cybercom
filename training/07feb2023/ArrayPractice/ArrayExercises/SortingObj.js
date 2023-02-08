const users = [{ name: "meet", age: 21 }, { name: "sudhir", age: 26 }, { name: "raj", age: 22 }];
for (let i = 0; i < users.length - 1; i++){
    if (users[i].age > users[i + 1].age) {
        let temp = users[i].age;
        users[i].age = users[i + 1].age;
        users[i + 1].age = temp;
    }

}
users.forEach((i) => {
    console.log(i);
})