export default chord => {
  if (!isNaN(chord.charAt(1))) return chord.slice(0, 2);
  return chord.slice(0, 3);
};
