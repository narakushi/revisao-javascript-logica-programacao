// Escreva uma função que receba uma matriz (array de arrays) de números e retorne uma nova matriz com os números ordenados em ordem crescente.

function mostraMat(matriz){
    for(let i = 0; i < matriz.length; i++){
        console.log(matriz[i]);
    }
}

function ordenaLinha(matriz){
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            
        }
    }
}

function ordenaColuna(matriz) {
    let aux;

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            for(let k = j+1; k < matriz.length; k++){
                if(matriz[i][j] > matriz[i][k]){
                    aux = matriz[i][j]
                    matriz[i][j] = matriz[i][k];
                    matriz[i][k] = aux;
                }
            }
        }
    }

    ordenaLinha(matriz);

    return matriz;
}

const matriz = Array(2);

matriz[0] = [9, 7];
matriz[1] = [2, 1];

console.log(ordena(matriz));
