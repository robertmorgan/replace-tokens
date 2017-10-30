import replaceTokens from './index';

describe('replace-tokens', () => {
  describe('if no replacment parameters are provided', () => {
    it('returns the string as-is', () => {
      const input = 'this is a test {test} test {test}';
      const result = replaceTokens(input);
      expect(result).toEqual(input);
    });
  });

  describe('if irrelevent parameters are provided', () => {
    it('ignores irrelevent values', () => {
      const input = 'this is a test {test} test {test}';
      const result = replaceTokens(input, { foo: 'bar' });
      expect(result).toEqual(input);
    });
  });

  describe('if parameters are passed in with keys that match tokens in the input text', () => {
    it('replaces the all tokens with the corresponding key\'s value', () => {
      const input = 'this is a test {test} test {test}';
      const params = {
        foo: 'bar',
        test: 'success',
        success: 'test',
      };
      const result = replaceTokens(input, params);
      expect(result).toEqual('this is a test success test success');
    });
  });

  describe('tokenOptions', () => {
    it('allows you to specify custom token patterns', () => {
      const input = 'this is a test [test] test [test]';
      const result = replaceTokens(input, { test: 'success' }, { openingToken: '[', closingToken: ']' });
      expect(result).toEqual('this is a test success test success');
    });
  });
});