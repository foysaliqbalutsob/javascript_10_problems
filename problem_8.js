function capital(str) {
  let wards = str.split(" ");
  let result = [];

  for (let i = 0; i < wards.length; i++) {
    let ward = wards[i];
    result.push(ward[0].toUpperCase() + ward.slice(1));
  }
  return result.join(" ");
}

console.log(capital("hello world"));
