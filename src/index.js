import validateNote from 'validate-note';

import types from './data/types';
import getNote from './lib/getNote';

export default (chord, {maxOctave = 8, flatToSharp = false} = {}) => {

  if(typeof chord !== `string`){
    throw new Error(`${chord} is not a String`);
  }

  const note = getNote(chord);

  const {letter, signature, octave} = validateNote(note, {maxOctave, flatToSharp});

  const type = types[chord.split(note)[1]];

  if(!type) throw new Error(`${chord.split(note)[1]} is not a valid chord type`);

  return {note: {letter, signature, octave}, type};

};
