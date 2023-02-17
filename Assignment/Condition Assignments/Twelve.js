// WAP to find largest of Three Numbers?

function max_of_three(x, y, z) {
  max_val = 0;
  if (x > y) {
    max_val = x;
  }
  else {
    max_val = y;
  }
  if (z > max_val) {
    max_val = z;
  }
  return max_val;
}

console.log(max_of_three(1, 0, 1));
console.log(max_of_three(66, -66, 0));
console.log(max_of_three(654, 987, 456));
