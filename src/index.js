export default (
  text,
  replacements = {},
  {
    openingToken = '{',
    closingToken = '}'
  } = {},
) => {
  const keys = Object.keys(replacements);
  const regexSafePattern = /[-\/\\^$*+?.()|[\]{}]/g;
  return keys.reduce((accumulator, currentKey) => {
    const regexSafeToken = `${openingToken}${currentKey}${closingToken}`.replace(regexSafePattern, '\\$&');
    return accumulator.replace(new RegExp(regexSafeToken, 'g'), replacements[currentKey]);
  }, text);
};