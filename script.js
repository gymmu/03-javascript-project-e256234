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
    if (currentElement === "und")
    return true
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