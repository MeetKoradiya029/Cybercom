let users:string[]=["abc"]; // | is a union data type in Ts

const add = (item:string)=>{

    let a =users.push(item);
    console.log(users);
    return true;
}

add("xyz");