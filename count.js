let bla = 2;
let gron = 2;
let gul = 14;

for (gul; gul < 20; gul++) {
  gron = gron + 1;
  let kvot = gul / 2;
  if (kvot === 3 || kvot === 6) {
    gul = gul - 1;
  } else {
    continue;
  }
  result = bla * gron;
  console.log(result);
  return result;
}
