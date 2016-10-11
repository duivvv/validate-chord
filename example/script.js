const validateChord = require(`../dist/`);

/* '', m, M, minor, major, aug, dim */

const chord = `A4`;
console.log(validateChord(chord));

const chord2 = `F#4min`;
console.log(validateChord(chord2));

const chord3 = `G2maj`;
console.log(validateChord(chord3));

const chord4 = `G7aug`;
console.log(validateChord(chord4));
