function microondas(prato, segundos) {
    let comidas = segundos == 8 ? "Macarrão e Brigadeiro"
    : segundos == 10 ? "Pipoca"
    : segundos == 12 ? "Feijão"
    : segundos == 15 ? "Carne": default;
    

    if(segundos <= 8) {
        prato = "Macarrão e Brigadeiro";
    } else if (segundos >= 8 && segundos <= 10) {
        prato = "Pipoca";
    } else if (salario >= 10 && segundos <= 12) {
        prato = "Feijão";
    } else if(segundos >= 12 && segundos <= 15) {
        prato = "Carne";
    }
    console.log(prato);
    return prato;
}