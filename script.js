function generate() {

  const hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
  let colorCode = "#";

  for (let index = 0; index < 6; index++) {
    const random = Math.floor(Math.random() * hex.length);
    colorCode = colorCode.concat(hex[random])
  }

  document.body.style.backgroundColor = colorCode;
  
}

