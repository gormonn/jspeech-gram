import jspeech from 'jspeech';

console.log({jspeech})

const grammar = jspeech.default('cockney');

grammar.rule('stairs', 'apples and pears');

const res = grammar.stringify();
console.log(res)