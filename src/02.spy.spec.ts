import createSpyObj = jasmine.createSpyObj;
import createSpy = jasmine.createSpy;

describe('spy', () => {
    /* spyOn is used to spy existing methods */
    /* created Spy cannot be spyOn  */
    it('should create spy and set returnValue', function () {
        const spy = createSpyObj('spy', [ 'spy' ]) as any;
        spy.spy.and.returnValue(10);
        expect(spy.spy()).toEqual(10);
    });

    it('should spyON', function () {
        /* spy obj should have method */
        const spy = {
            a: () => 3
        };
        spyOn(spy, 'a').and.returnValue(2);
        expect(spy.a()).toEqual(2);
        expect(spy.a).toHaveBeenCalled();
    });

    it('should work with args', function () {
        const spy = createSpyObj('obj', [ 'add' ]);
        spy.add.withArgs(1, 2).and.returnValue(3);
        spy.add.and.returnValue(4);
        expect(spy.add(1, 2)).toEqual(3);
        expect(spy.add(1, 2, 3)).toEqual(4);
    });

    it('should spyOnProperty', function () {
        class A {
            get a() {
                return 3;
            }
        }

        const spy = new A();
        spyOnProperty(spy, 'a', 'get').and.returnValue(3);
        expect(spy.a).toEqual(3);
    });

    it('should create spy', function () {
        const spy = createSpy('spy', () => {
            return 4;
        });
        spy.and.returnValue(3);
        expect(spy()).toEqual(3);
        expect(spy()).toEqual(3);
        expect(spy).toHaveBeenCalledTimes(2);
    });

});
