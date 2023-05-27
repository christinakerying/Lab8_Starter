// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
    expect(functions.isPhoneNumber("098-765-4321")).toBe(true);
    expect(functions.isPhoneNumber("0")).toBe(false);
    expect(functions.isPhoneNumber("1234567890000")).toBe(false);
  });

test('isEmail', () => {
    expect(functions.isEmail("abcd@gmail.com")).toBe(true);
    expect(functions.isEmail("abcdefg@yahoo.com")).toBe(true);
    expect(functions.isEmail("gmail.com")).toBe(false);
    expect(functions.isEmail("abcd@gmail")).toBe(false);
  });

test('isStrongPassword', () => {
    expect(functions.isStrongPassword("strong_code1")).toBe(true);
    expect(functions.isStrongPassword("Also_strong123")).toBe(true);
    expect(functions.isStrongPassword("123wrong")).toBe(false);
    expect(functions.isStrongPassword("a")).toBe(false);
  });
test('isDate', () => {
    expect(functions.isDate("10/10/2023")).toBe(true);
    expect(functions.isDate("1/1/2023")).toBe(true);
    expect(functions.isDate("123/123/123")).toBe(false);
    expect(functions.isDate("1/1/1")).toBe(false);
  });
test('isHexColor', () => {
    expect(functions.isHexColor("#123")).toBe(true);
    expect(functions.isHexColor("FFF")).toBe(true);
    expect(functions.isHexColor("#ABCZZZ")).toBe(false);
    expect(functions.isHexColor("#0")).toBe(false);
  });