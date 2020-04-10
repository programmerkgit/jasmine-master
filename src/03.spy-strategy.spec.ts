// @ts-ignore
// @ts-ignore
import createSpy = jasmine.createSpy;


describe('spy', () => {
    it('should spy identity', function () {
        const spy = createSpy('spy');
        expect(spy.and.identity).toMatch(/^spy$/);
    });

    it('should spy callThrough', function () {
        const spy = createSpy('spy', () => {
            return 4;
        });
        expect(spy()).toBeUndefined();
        /* originalFn is called after callThrough */
        spy.and.callThrough();
        expect(spy()).toEqual(4);
    });

    it('should spy callThrough actually executed', function () {
        let v: number = 2;
        const spy = createSpy('spy', () => {
            v = 3;
        });
        spy.and.callThrough();
        spy();
        expect(v).toEqual(3);
    });

    it('should rejectWith', async function () {
        const spy = createSpy('spy');
        spy.and.rejectWith('rejected');
        await expectAsync(spy()).toBeRejectedWith('rejected');
    });

    it('should resolveWith', async function () {
        const spy = createSpy('spy');
        spy.and.resolveTo(1);
        await expectAsync(spy()).toBeResolvedTo(1);
    });
    it('should be stub', function () {
        let v: number = 2;
        const spy = createSpy('spy', () => {
            v = 3;
        });
        spy.and.callThrough();
        spy.and.stub();
        spy();
        expect(v).toEqual(2);
    });

    it('should returnValues', function () {
        const spy = createSpy('spy');
        spy.and.returnValues(1, 2, 3);
        expect(spy()).toEqual(1);
        expect(spy()).toEqual(2);
        expect(spy()).toEqual(3);
        expect(spy()).toBeUndefined();
    });

    it('should throw Error', function () {
        const spy = createSpy('spy');
        spy.and.throwError('stub error');
        expect(spy).toThrowError('stub error');
    });

});
