export function aufgabe01(args) {
  const input = args
  const result = []
  for (let i=0; i < input.length; i++){
    const currentElement = input[i]
    if ( currentElement === "e"){

    } else if (currentElement === "E"){

    }else{
      result.push(currentElement)
    }
  }
  return result.join("")
}
export function aufgabe02(args) {
  const input = args
  const result = []
 for( let i=0; i < input.length; i++){
  const currentElement = input[i]
  result.push(currentElement.toUpperCase())
 }
  return result.join("")
}
export function aufgabe03(args){
  const input = args
  const result = []
  let count = 0
  for (let i=0; i < input.length; i++){
    const currentElement = input[i]
    if ( currentElement === "e"){
    count = count + 1 
    } else if (currentElement === "E"){
    count = count + 1
    
  }
  }
  return count
}
export function aufgabe04(args){
  const input = args
  const result = []
  let count = 1
  for (let i=0; i < input.length; i++){
    const currentElement = input[i]
    if (currentElement === " "){
   count = count + 1
   
    }
  } 
  return count
}
export function aufgabe05(args){
  const input = args
  const result = []
  let count = 0
  for (let i=0; i < input.length; i++){
    const currentElement = input[i]
    if (currentElement === currentElement.toUpperCase()){
      count = count + 1
    } 
  }
  if(count > 0) {
    return true
  } else {
    return false
  }
}
export function aufgabe06(args){
  const input = args
  const result = []
  for (let i=0; i < input.length; i++){
    const currentElement = input[i]
   if (currentElement === ".")
   return true
  }
  return false 
}
export function aufgabe07(args){
  const input = args
  const result = []
  for (let i=0; i < input.length; i++){
    const currentElement = input[i]
    if (currentElement === "u"){
      if (input[i+1]=== "n"){
        if (input[i+2]=== "d"){
          return true
        }
      }
    }
  }
  return false
}
export function aufgabe09 (args) {
  const input = args
  const result = []
  let len = 0
  for (let i = 0; i < input.length; i++) {
    len++
  }
  if (len === 6){
    return true
  }
  return false
}
export function aufgabe11 (args) {
  const input = args
  const result = []

if (input.length > 1){
  return null
}
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    return currentElement.charCodeAt(0)
  }
  return null
}
export function aufgabe12 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e"){
      return i
    }
  }
  return - 1
}
export function aufgabe13 (args) {
  const input = args
  const result = []
  let posE = -1
  for (let i = (input.length-1); i>= 0; i--) {
    const currentElement = input[i]
    if (currentElement === "e") {
    return i
    }
  }
  return - 1 
}
export function aufgabe08 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e"){
      result.push(3)
  }else{
    result.push(currentElement)
  }
  }
  return result.join("")
}
export function aufgabe10 (args) {
  const input = args
  
 if (input.length !==7 ) return false
 if (input[0] !== "#") return false 

 for (let i = 1; i < input.length; i++) {
  const currentElement = input[i]
  const ascii = currentElement.charCodeAt(0)

 if ( 48 <= ascii && ascii <= 57){
// ist eine Ziffer 
 }else if ( 65 <= ascii && ascii <=70){
// ist A-F
 }else{
  return false
 }
 }
  return true
}
export function aufgabe14 (args) {
  const input = args
  let pos = -1
  let countE = 0 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "e"){
    countE++
    if(countE === 3){
      pos = i
    }
  }
}
  return pos 
}