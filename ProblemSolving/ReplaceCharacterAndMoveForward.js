const moveFoward = (str) => {
  return str
    .split(" ")
    .map((char) => {
      return String.fromCharCode(char.charCodeAt(0) + 9);
    })
    .join(" ");
};

console.log(moveFoward("z"));