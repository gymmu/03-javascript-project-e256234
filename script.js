export function aufgabe01(args) {
  const input = args
  const result = []
  for (let i=0; i < input.length; i++){
    const currentElement = input[i]
    if ( currentElement === "e"){//durch currentElement wir das e als Element geprüfft. 

    } else if (currentElement === "E"){//durch die geschweifte klammer wird abgeschlossen. 

    }else{
      result.push(currentElement)//durch geschwungene Klammer wird es erkannt 
    }
  }
  return result.join("")
}
export function aufgabe02(args) {
  const input = args
  const result = []
 for( let i=0; i < input.length; i++){
  const currentElement = input[i]
  result.push(currentElement.toUpperCase())//das currentElement wird gross geschrieben. 
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
    count = count + 1 //e wird um eins erhöht 
    } else if (currentElement === "E"){
    count = count + 1//E wird um eins erhöht.
    
  }
  }
  return count//count geht wieder Zurück am Ende der function. 
}
export function aufgabe04(args){
  const input = args
  const result = []
  let count = 1
  for (let i=0; i < input.length; i++){
    const currentElement = input[i]
    if (currentElement === " "){//lehrschlag. Wenn es 3 = zeichen gibt wird das currentElement bestimmt.
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
  if(count > 0) {//wenn der count grösser als 0 ist wird es richtig gezählt. 
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
   return true//wird wenn es ein Punkt ist richtig gezählt. 
  }
  return false 
}
export function aufgabe07(args){
  const input = args
  const result = []
  for (let i=0; i < input.length; i++){
    const currentElement = input[i]
    if (currentElement === "u"){//werden einzeln geschrieben und dan zum wort zusammengesetzt. einzelne Buchstaben werden geprüft. 
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
  let len = 0//len ist die abkürzung von length.
  for (let i = 0; i < input.length; i++) {
    len++//verdoppelt
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
  return null//wenn das input.length länger als 1 ist wird es zu null. 
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
    const currentElement = input[i]//i entspricht input[i]
    if (currentElement === "e"){
      return i//wenn das currentElement e ist wird es zu i. 
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
  return - 1 //wenn das currentElemt nicht e ist wird es zu -1. alles was nicht e ist wird als falsch gezählt und dadurch zu -1. 
}
export function aufgabe08 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e"){
      result.push(3)//wenn das elemetn e entspricht wird 3 zurückgegeben. 
  }else{
    result.push(currentElement)//ansonsten wird das currentElement angehängt.
  }
  }
  return result.join("")
}
export function aufgabe10 (args) {
  const input = args
  
 if (input.length !==7 ) return false//functionguard. wenn bei den Tests etwas nicht funktioniert
 if (input[0] !== "#") return false //# als erstes element

 for (let i = 1; i < input.length; i++) {//let i=1, da das 3 als erstes element geprüft wird. 
  const currentElement = input[i]
  const ascii = currentElement.charCodeAt(0)

 if ( 48 <= ascii && ascii <= 57){
// ist eine Ziffer 
 }else if ( 65 <= ascii && ascii <=70){
// ist A-F
 }else{
  return false//wen die Ziffern nicht dem bereich von diesen Zahlem entsprechen wird es als falsch gezählt. ansonsten als richtig. 
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
    if(countE === 3){//wenn das countE 3 entspricht wird es zu -1 da wir pos als -1 definiert haben. 
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
const listFirst = []//liste mit zwei Elementen, sobald der erste teil der Liste abgeschlossen ist oder ein besimmtes Element vorkommt, beginnt die zweite liste. 
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
    const currentElement = input[i]//currentElement wird als input[i] definiert.
    
  }
  return result.join("")
}
export function aufgabe24(args) {
  const input = args
  const result = []

  if (input.length === 1)  return input//functionguard 
  
  const firstElement = input[0]//das erste und letzte Element werden ausgewählt. 
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
const list = text.split("") // Text wird in Liste umgewandelt. Elemente können vertauscht werden. 
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Elemente werden da es die Falsche Reihenfolge ist vertauscht. 
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