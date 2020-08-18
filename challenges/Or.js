const text = "You need to answer yes, not or i don't know"

const matchAnswers = /yes|not|i don't know/g

console.log(text.match(matchAnswers))