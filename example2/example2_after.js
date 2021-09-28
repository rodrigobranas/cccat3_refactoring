const CPF_VALID_LENGTH = 11;
const FACTOR_FIRST_VERIFIER_DIGIT = 10;
const FACTOR_SECOND_VERIFIER_DIGIT = 11;

function cleanCpf (cpf) {
    return cpf.replace(/\D/g, "");
}

function areAllDigitsEqual (cpf) {
    const [firstDigit] = cpf;
    return [...cpf].every(c => c === firstDigit);
}

function calculateDigit (cpf, factor) {
    let total = 0;
    for (const digit of cpf) {
        if (factor > 1) total += parseInt(digit) * factor--;
    }
    const rest = total%11;
    return (rest < 2) ? 0 : (11 - rest);
}

function extractVerifierDigit (cpf) {
    return cpf.slice(9);
}

function validate (rawCpf) {
	if (!rawCpf) return false;
    const cpf = cleanCpf(rawCpf);
    if (cpf.length !== CPF_VALID_LENGTH) return false;
    if (areAllDigitsEqual(cpf)) return false;
    const firstVerifierDigit = calculateDigit(cpf, FACTOR_FIRST_VERIFIER_DIGIT);
    const secondVerifierDigit = calculateDigit(cpf, FACTOR_SECOND_VERIFIER_DIGIT);
    const verifierDigit = extractVerifierDigit(cpf);  
    const calculatedVerifiedDigit = `${firstVerifierDigit}${secondVerifierDigit}`;  
    return verifierDigit === calculatedVerifiedDigit;
}

module.exports = {
    validate
};
