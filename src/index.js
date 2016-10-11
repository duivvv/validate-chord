import validateNote from 'validate-note';
import types from './data/types';

export default (chord, {maxOctave, flatToSharp} = {maxOctave: 8, flatToSharp: false}) => {

  if(typeof chord !== `string`){
    throw new Error(`${chord} is not a String`);
  }

  const note = getNote(chord);

  const {letter, signature, octave} = validateNote(note, {maxOctave, flatToSharp});

  const type = types[chord.split(note)[1]];

  if(!type) throw new Error(`${chord.split(note)[1]} is not a valid chord type`);

  return {note: {letter, signature, octave}, type};

};

const getNote = chord => {
  if(!isNaN(chord.charAt(1))) return chord.slice(0, 2);
  else if(!isNaN(chord.charAt(2))) return chord.slice(0, 3);
  else throw new Error(`${chord} is not a valid chord`);
};
