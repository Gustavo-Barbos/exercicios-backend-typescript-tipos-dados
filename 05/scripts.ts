const soletrador = (nome: string): string => {

    return nome.split('').join('-');
}

console.log(soletrador('gustavo'));