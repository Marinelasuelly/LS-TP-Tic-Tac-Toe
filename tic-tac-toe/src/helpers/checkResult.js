function checkResult(element) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) { //verifica vencedor e retorna a sua letra
    const [a, b, c] = lines[i];
        if (element[a] && element[a] === element[b] && element[a] === element[c]) {
            return element[a];
        }
    }

    for(let j = 0; j < element.length; j++){ // nao havendo vencedor verifica se ha empate (todas as casas cheias)
        if(element[j] !== "X" && element[j] !== "O"){
            return null;
        }
    }
    return "E"; 
}

export default checkResult;
