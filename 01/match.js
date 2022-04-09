// function match(string) {
//   let foundA = false
//   for (let c of string) {
//     if (c === 'a') {
//       foundA = true
//     } else if (foundA && c === 'b') {
//       return true
//     } else {
//       foundA = false
//     }
//   }
//   return false
// }

// console.log(match('I abm groot'))

function match(string) {
  let state = start
  for (let c of string) {
    state = state(c)
  }
  return state === end
}

function start(c) {
  if (c === 'a') {
    return foundA
  } else {
    return start
  }
}

function end(c) {
  return end
}

function foundA(c) {
  if (c === 'b') {
    return foundB
  } else {
    return start(c)
  }
}

function foundB(c) {
  if (c === 'c') {
    return foundC
  } else {
    return start(c)
  }
}
function foundC(c) {
  if (c === 'a') {
    return foundA1
  } else {
    return start(c)
  }
}

function foundA1(c) {
  if (c === 'b') {
    return foundB2
  } else {
    return start(c)
  }
}

function foundB2(c) {
  if (c === 'x') {
    return end
  } else {
    return foundB(c)
  }
}

console.log(match('abcabcabx'))