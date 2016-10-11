export default chord => {
  if(!isNaN(chord.charAt(1))) return chord.slice(0, 2);
  else if(!isNaN(chord.charAt(2))) return chord.slice(0, 3);
  else throw new Error(`${chord} is not a valid chord`);
};
