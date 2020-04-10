// @ts-ignore
// @ts-ignore
import createSpy = jasmine.createSpy;

describe('matchers', () => {
    it('should not', function () {
        expect(true).not.toBeFalsy();
    });
    it('should nothing', function () {
        const a = () => {
        };
        // @ts-ignore nothing is Implemented
        expect(a()).nothing();
    });
    it('should compared with ===', function () {
        expect(0).not.toBe('0' as any);
    });
    it('should toBeCloseTo', function () {
        expect(10.1).toBeCloseTo(10, 0);
        expect(10.1).not.toBeCloseTo(10, 1);
        expect(10.0550000000).toBeCloseTo(10, 1);
        expect(10.0550000001).not.toBeCloseTo(10, 1);
    });
    it('should toBeDefined', function () {
        let a;
        expect(a).toBeUndefined();
        a = null;
        expect(a).toBeDefined();
    });
    it('should toBeFalse', function () {
        const f = false;
        expect(f).toBeFalse();
        expect(null).not.toBeFalse();
    });
    it('should toBeTrue', function () {
        const t = true;
        expect(t).toBeTrue();
        expect(1).not.toBeTrue();
    });
    it('should to beFalsy', function () {
        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(0).toBeFalsy();
        expect('').toBeFalsy();
    });
    it('should to beTruthy', function () {
        expect(1).toBeTruthy();
        expect([]).toBeTruthy();
        expect({}).toBeTruthy();
        expect(' ').toBeTruthy();
    });

    it('should toBeGraterThanOrEqual', function () {
        expect(2).toBeGreaterThanOrEqual(1);
        expect(1).toBeGreaterThanOrEqual(1);
        expect(1).not.toBeGreaterThan(1);
        expect(0.5).toBeLessThanOrEqual(1);
        expect(1).toBeLessThanOrEqual(1);
        expect(1).not.toBeLessThan(1);
    });
    it('should NaN', function () {
        expect(+'a').toBeNaN();
    });
    it('should toBeNull', function () {
        expect(null).toBeNull();
        expect(undefined).not.toBeNull();
    });
    it('should contain', function () {
        expect([ 1, 2, 3, '4' ]).toContain(1);
        expect([ 1, 2, 3, '4' ]).not.toContain('1');
        expect([ 1, 2, 3, '4' ]).not.toContain(4);
    });

    it('should deepEqual', function () {
        expect({a: {b: 1, c: 2}}).toEqual({a: {b: 1, c: 2}});
        expect({a: {b: 1, c: 2}}).not.toEqual({a: {b: 1, c: 3}});
        expect({a: {b: 1, c: 2}} as any).not.toEqual({a: {b: 1, c: '2'}});
    });
    it('should spy called', function () {
        const spy = createSpy('spy');
        spy.and.returnValue(2);
        spy();
        spy();
        spy(1);
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenCalledWith(1);
        expect(spy).not.toHaveBeenCalledWith(2);
    });
    // it('should dom class', function () {
    //     const el = document.createElement('div');
    //     el.className = 'foo bar baz';
    //     expect(el).toHaveClass('bar');
    // });
    it('should toMatch', function () {
        expect('Helllo').not.toMatch(/Hel{1,2}o$/);
        expect('Hello').toMatch(/Hel{1,2}o$/);
        expect('Helo').toMatch(/Hel{1,2}o$/);
    });
    it('should expect toThrow', function () {
        expect(() => {
            return '1';
        }).not.toThrow();
        expect(() => {
            throw new Error('throw');
        }).toThrow();
        expect(() => {
            throw 'throw';
        }).toThrow('throw');
        expect(() => {
            throw new Error('throw');
        }).toThrow(new Error('throw'));
        expect(() => {
            throw new Error('throw');
        }).not.toThrow(new Error('throw2'));
    });
    it('should expect toThrowError', function () {
        expect(() => {
            return '1';
        }).not.toThrowError();
        expect(() => {
            throw new Error('throw');
        }).toThrowError();
        expect(() => {
            throw 'throw';
        }).not.toThrowError('throw');
        expect(() => {
            throw new Error('throw');
        }).toThrowError('throw');
        expect(() => {
            throw new Error('throw');
        }).toThrowError(/th/);

        expect(() => {
            throw new Error('throw');
        }).toThrowError(Error, 'throw');
        expect(() => {
            throw new Error('throw');
        }).not.toThrowError(Error, 'throw2');
    });
});
