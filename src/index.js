import validateNote from 'validate-note';

import types from './data/types';
import getNote from './lib/getNote';

export default (chord, {
  maxOctave = 8,
  flatToSharp = false
} = {}) => {

  if (typeof chord !== `string`) {
    throw new Error(`'${chord}' is not a valid chord`);
  }

  const note = getNote(chord);

  const sNote = validateNote(note, {maxOctave, flatToSharp, octave: true});

  const type = types[chord.split(note)[1].toLowerCase()];

  if (!type) throw new Error(`'${chord.split(note)[1]}' is not a valid chord type`);

  Object.keys(sNote).forEach(key => (!sNote[key]) && delete sNote[key]);

  return {
    note: sNote,
    type
  };

};
