import fetchLib from '../../src/fetch-lib';

describe('fetchLib', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(fetchLib, 'greet');
      fetchLib.greet();
    });

    it('should have been run once', () => {
      expect(fetchLib.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(fetchLib.greet).to.have.always.returned('hello');
    });
  });
});
