import ArrayLikeMatchers = jasmine.ArrayLikeMatchers;

describe('global', () => {
    beforeEach(() => {

    }, 100);
    afterEach(() => {

    }, 100);
    afterAll(() => {

    }, 100);
    it('should expect', function () {
        const m: ArrayLikeMatchers<string> = expect<string>('actual');
        m.toEqual('actual');
    });
    it('should async', async () => {
        await expectAsync(Promise.resolve(3)).toBeResolvedTo(3);
    });
    // it('should this spec fail', function () {
    //     fail('intentional error');
    // });
    it('should pend', function () {
        pending('not implemented yet');
    });

});

// fdescribe('focused', () => {
//     fit('should focused', function () {
//         expect(true).toBeTrue();
//     });
//     it('should be not run', function () {
//         expect(true).toBeTrue();
//     });
// });
