const order = {
  oderId: 123,
  personId: 123,
  name: "person",
  des: "asdf",
};

for (var key in order) {
  console.log(key, order[key]);
}

const arr = [1, 2, 3, 4, 5];
var result = [];

arr.map((a) => {
  if ((a * 3) % 2 == 0) {
    result.push("짝수");
  } else {
    result.push("홀수");
  }
});

console.log(result);
