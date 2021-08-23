import { padStart, atoi } from '../../src/@shared/utils';

describe('padStart polyfill test', () => {
  it('padding 길이 증가, 0~100', () => {
    for (let i = 0; i < 100; i++) {
      assert.equal(padStart(i + 1, '0', '1'), '0'.repeat(i) + '1');
    }
  });
  it('padLength: 2, padStr: "0" 일떄, 문자열 0~24까지 검증', () => {
    for (let i = 0; i < 10; i++) {
      assert.equal(padStart(2, '0', `${i}`), `0${i}`);
    }
    for (let i = 11; i < 25; i++) {
      assert.equal(padStart(2, '0', `${i}`), `${i}`);
    }
  });
});

describe('atoi test', () => {
  it('숫자가 없을떄, null', () => {
    assert.equal(atoi('hello'), null);
    assert.equal(atoi(''), null);
  });

  it('숫자 잘 출력', () => {
    Array.from(Array(12), (_, index) => index).map((x) => {
      assert.equal(atoi(`${x}`), x);
    });
  });

  it('뒤의 문자 제거', () => {
    assert.equal(atoi('1hello'), 1);
    assert.equal(atoi('11hello'), 11);
    assert.equal(atoi('111hello'), 111);
  });
  it('padding 0 제거', () => {
    for (let i = 0; i < 100; i++) {
      assert.equal(atoi('0'.repeat(i) + '123456789hello'), 123456789);
    }
  });
});
