export function aufgabe01(args) {
  const input = args
  const result = []
  for (let i=0; i < input.length; i++){
    const currentElement = input[i]
    if ( currentElement === "e"){//durch currentElement wir das e als Element geprüfft. 

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
      count = count + 1//dadurch werden die Grossbuchstaben gezählt.
    } 
  }
  if(count > 0) {
    return true// wenn es ein Grossbuchstabe ist wird es richtig gezählt ansonsten falsch. 
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
export function aufgabe15 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement ===" "){
      return result.join("")
    }
    result.push(currentElement)
  }
  return result.join("")
}
export function aufgabe16 (args) {
  const text = args
  let switchFirst = true
const listFirst = []
const listSecond = []
for (let i = 0; i < text.length; i++) {
  if (text[i] === "$") {
    switchFirst = false
  } else {
    if (switchFirst === true) {
      listFirst.push(text[i])
    } else {
      listSecond.push(text[i])
    }
  }
}
return [listFirst.join(""), listSecond.join("")]
}
export function aufgabe17 (args) {
  const text = args
  const phrases = []
  let currentPhrase = []
  for (let i = 0; i < text.length; i++) {
    const currentElement = text[i]
    if (currentElement === ',') {
      // Wenn wir hier sind haben wir einen '.' gefunden, und möchten den aktuellen Satz als eine Element in phrases speichern.
      phrases.push(currentPhrase.join(""))
      currentPhrase = []  // Damit löschen wir alles was im aktuellen Satz drin war.
    } else {
      // Wenn wir keinen '.' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
      currentPhrase.push(currentElement)
    }
  }
  
  return (phrases)
  }
  
export function aufgabe18 (args) {
  const text = args
  let switchFirst = true
const listFirst = []//für den Namen und das alter rstellt man zwei Listen, weil es zwei Elemente sind. 
const listSecond = []
for (let i = 0; i < text.length; i++) {
  if (text[i] === " ") {//wenn es ein Lehrzeichen ist wird es als switchFirst als falsch gezählt und geändert.
    switchFirst = false
  } else {
    if (switchFirst === true) {//wenn es als true gezählt wird wird zuerst di erste und danach die zweite Liste eingefügt. 
      listFirst.push(text[i])
    } else {
      listSecond.push(text[i])
    }
  }
 }

 const name = listFirst.join("")
 const age = listSecond.join("")

 return "Sie heissen " + name + " und sind " + age + " Jahre alt"//namen und alter werden in den Satz eingefügt und so geprüft.

}
export function aufgabe19 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   result.push(currentElement)
   result.push(currentElement)//es wird 2 mal hingeschrieben und dadurch verdoppelt. 
  }
  return result.join("")
}
export function aufgabe20 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "."){//prüfen ob das nächste Zeichen ein Lehrzeichen ist
   if(input[i+1]===" "){
    return true
   }
   else {return false}
  }
  
}
return result.join("")
}
export function aufgabe21(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
  return result.join("")
}
export function aufgabe24(args) {
  const input = args
  const result = []

  if (input.length === 1)  return input
  
  const firstElement = input[0]
  const lastElement = input[input.length - 1]

result.push(lastElement)
  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement)// anhängen an die resultate liste. 
  }
  result.push(firstElement)
  
  return result.join("")
}
export function bubbleSort(args){
const text = args
const list = text.split("") // text wird in Liste umgewandelt. Elemente können vertauscht werden. 
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // elemente werden da es die Falsche Reihenfolge ist vertauscht. 
    const tmp = list[i + 1]// zwischenzeitlich gespeichert(wert)
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 // von vorne starten
  }
}
const result = list.join("")
return result
}
export function aufgabe22 (args) {
  const text = args
  let switchFirst = true
const listFirst = []
const listSecond = []

for (let i = 0; i < text.length; i++) {
  if (text[i] === "k") {//wenn das Element ein k ist ist switchFirst falsch
    switchFirst = false
  } else {
    if (switchFirst === true) { 
      listFirst.push("_")//welches element vorkommt bis ein k vorhanden ist. 
    } else {
      listSecond.push(text[i])
    }
  }
 }
 return listFirst.join("") + listSecond.join("")//die zwei Listen werden zusammen gefügt. 
 
}