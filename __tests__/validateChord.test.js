const validateChord = require(`../src/`);

describe(`returns the right values`, () => {

  it(`returns the chord split up if valid (major)`, () => {

    const chord = {
      note: {
        letter: `A`,
        octave: 3
      },
      type: `major`
    };

    expect(validateChord(`A3`)).toEqual(chord);

  });

  it(`returns the chord split up if valid (major)`, () => {

    const chord = {
      note: {
        letter: `A`,
        octave: 3
      },
      type: `major`
    };

    expect(validateChord(`A3maj`)).toEqual(chord);

  });

  it(`returns the chord split up if valid (major)`, () => {

    const chord = {
      note: {
        letter: `A`,
        octave: 3
      },
      type: `major`
    };

    expect(validateChord(`A3major`)).toEqual(chord);

  });

  it(`returns the chord split up if valid (augmented)`, () => {

    const chord = {
      note: {
        letter: `A`,
        octave: 3
      },
      type: `augmented`
    };

    expect(validateChord(`A3aug`)).toEqual(chord);

  });

  it(`returns the chord split up if valid (minor)`, () => {

    const chord = {
      note: {
        letter: `A`,
        octave: 3
      },
      type: `minor`
    };

    expect(validateChord(`A3min`)).toEqual(chord);

  });

  it(`returns the chord split up if valid (diminished)`, () => {

    const chord = {
      note: {
        letter: `A`,
        octave: 3
      },
      type: `diminished`
    };

    expect(validateChord(`A3dim`)).toEqual(chord);

  });

  it(`returns the chord split up if valid (major with flat signature)`, () => {

    const chord = {
      note: {
        letter: `A`,
        signature: `#`,
        octave: 5
      },
      type: `major`
    };

    expect(validateChord(`Bb5`, {flatToSharp: true})).toEqual(chord);

  });

  it(`returns the chord split up if valid (minor)`, () => {

    const chord = {
      note: {
        letter: `F`,
        octave: 2
      },
      type: `minor`
    };

    expect(validateChord(`F2m`)).toEqual(chord);

  });

  it(`returns the chord split up if valid (minor flat with signature)`, () => {

    const chord = {
      note: {
        letter: `F`,
        signature: `#`,
        octave: 1
      },
      type: `minor`
    };

    expect(validateChord(`Gb1m`, {flatToSharp: true})).toEqual(chord);

  });

  it(`returns the chord split up if valid (minor with flat signature)`, () => {

    const chord = {
      note: {
        letter: `G`,
        signature: `b`,
        octave: 1
      },
      type: `minor`
    };

    expect(validateChord(`Gb1m`)).toEqual(chord);

  });

});

describe(`throws appropriate errors`, () => {

  it(`throws error on wrong chord`, () => {

    expect(() => validateChord(`p5U`))
      .toThrow();

  });

  it(`throws error on wrong signature`, () => {

    expect(() => validateChord(`At4m`))
      .toThrow();

  });

  it(`throws error on wrong input type`, () => {

    expect(() => validateChord(555))
      .toThrowError(`'555' is not a valid chord`);

  });

  it(`throws error on wrong chord`, () => {

    expect(() => validateChord(`E#7`))
      .toThrow();

  });

  it(`throws error on wrong octave`, () => {

    expect(() => validateChord(`A9m`))
    .toThrow();

  });

  it(`throws error on no octave`, () => {

    expect(() => validateChord(`Am`))
    .toThrow();

  });

  it(`throws error on non-existing chord type`, () => {

    expect(() => validateChord(`A4k`))
    .toThrowError(`'k' is not a valid chord type`);

  });

});
