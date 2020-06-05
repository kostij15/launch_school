//Word Ladder

let ladder = ''
let arr = ['head', 'heal', 'teal', 'tell', 'tall', 'tail']
arr.forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)