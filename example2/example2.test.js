const example2 = require("./example2_after");

test("Deve validar um cpf", function () {
    const isValid = example2.validate("935.411.347-80");
    expect(isValid).toBeTruthy();
});

test("Deve tentar validar um cpf inválido", function () {
    const isValid = example2.validate("123.456.789-99");
    expect(isValid).toBeFalsy();
});

test("Deve tentar validar um cpf com todos os dígitos iguais", function () {
    const isValid = example2.validate("111.111.111-11");
    expect(isValid).toBeFalsy();
});

test("Deve tentar validar um cpf inválido muito grande", function () {
    const isValid = example2.validate("123.456.789-1000");
    expect(isValid).toBeFalsy();
});

test("Deve tentar validar um cpf inválido muito pequeno", function () {
    const isValid = example2.validate("123.456");
    expect(isValid).toBeFalsy();
});

test("Deve tentar validar um cpf null", function () {
    const isValid = example2.validate(null);
    expect(isValid).toBeFalsy();
});

test("Deve tentar validar um cpf undefined", function () {
    const isValid = example2.validate(undefined);
    expect(isValid).toBeFalsy();
});
