export const rgbToHex = (rgb) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return '' + hex;
};

export const hexString = (r, g, b) => {
  return '#' + rgbToHex(r) + '' + rgbToHex(g) + rgbToHex(b);
};
