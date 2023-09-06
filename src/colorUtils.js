/**
 * Return a color at a specified point in the spectrum between colors 1 and 2
 * @param {string} c1 - The first color in the format `#ffffff`
 * @param {string} c2 - The second color in the format `#ffffff`
 * @param {string} p - A percentage representing where in the gradient you want the
 * color from (0 would return `c1`, and 1 would return `c2`).
 * @source https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 */
const blend = (c1, c2, p) => {
  let f = parseInt(c1.slice(1), 16);
  let t = parseInt(c2.slice(1), 16);
  let R1 = f >> 16,
    G1 = (f >> 8) & 0x00ff,
    B1 = f & 0x0000ff,
    R2 = t >> 16,
    G2 = (t >> 8) & 0x00ff,
    B2 = t & 0x0000ff;
  return (
    '#' +
    (
      0x1000000 +
      (Math.round((R2 - R1) * p) + R1) * 0x10000 +
      (Math.round((G2 - G1) * p) + G1) * 0x100 +
      (Math.round((B2 - B1) * p) + B1)
    )
      .toString(16)
      .slice(1)
  );
};

/**
 * Return a mapped spectrum of colors from `c1` to `c2` (inclusive)
 * @param {string} c1 - The first color in the format `#ffffff`
 * @param {string} c2 - The second color in the format `#ffffff`
 */
export const gradient = (c1, c2) => {
  return {
    0: c1,
    4: blend(c1, c2, 0.04),
    7.5: blend(c1, c2, 0.075),
    12.5: blend(c1, c2, 0.125),
    20: blend(c1, c2, 0.2),
    30: blend(c1, c2, 0.3),
    40: blend(c1, c2, 0.4),
    50: blend(c1, c2, 0.5),
    55: blend(c1, c2, 0.55),
    60: blend(c1, c2, 0.6),
    70: blend(c1, c2, 0.7),
    90: blend(c1, c2, 0.9),
    100: c2,
  };
};
