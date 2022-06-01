// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let space = str.split(/[-_]/g),
        newString = ""
  if(str){
    for(let i  in space){
      if(i > 0){
        newString += space[i].charAt(0).toUpperCase() + space[i].slice(1)
      }else{
        newString += space[i]
      }
    }
  }else{
    return newString
  }
  return newString
}