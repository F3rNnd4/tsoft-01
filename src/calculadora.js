// Função simples para testar soma

export function somar(a, b) {
    return a + b;
}

// Função para testar a subtração
export function subtrair(a, b) {
    return a - b;
}

// Função para testar a multiplicação
export function multiplicar(a,b) {
    return a * b;
}

// Função para testar a divisão
export function dividir(a, b) {
    if (b == 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}