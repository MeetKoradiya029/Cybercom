var meet = {
  name: "meet",
  age: 21,
};
var hit = {
  name: "hit",
  age: 20,
};

document.getElementById("meet").innerHTML = JSON.stringify(meet);
document.getElementById("hit").innerHTML = JSON.stringify(hit);

function Combine(meet, hit) {
  var meet = this.meet;
  var hit = this.hit;

  var combinedObj = {
    meetObj: meet,
    hitObj: hit,
    address: "vastrapur",
  };

  document.getElementById("combined").innerHTML = JSON.stringify(combinedObj);
}
