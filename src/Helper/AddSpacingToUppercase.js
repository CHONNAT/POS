function addSpacingToUppercase(inputString) {
    let modifiedString = '';
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (i > 0 && char === char.toUpperCase()) {
        modifiedString += ' ' + char.toLowerCase();
      } else {
        modifiedString += char;
      }
    }
  
    return modifiedString;
  }

  export { addSpacingToUppercase };
