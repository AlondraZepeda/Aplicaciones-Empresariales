function MaximalSquare(strArr) { 

    let maxtam = 0;

    strArr.forEach((fila, indexFila) => {
        fila.split('').forEach((col, colIndex) => {
            const posibles = Math.min(
                strArr.length - indexFila,
                strArr[0].length - colIndex
            );

            for (let size = 1; size <= posibles; size++) {
                if (
                    isSquare(strArr, colIndex, indexFila, size) &&
                    size > maxtam
                ) {
                    maxtam = size;
                }
            }
        });
    });

    return maxtam * maxtam;
}

function isSquare(matrix, x, y, tamSquare) {
    for (let fila = y; fila < y + tamSquare; fila++) {
        for (let col = x; col < x + tamSquare; col++) {
            if (matrix[fila][col] === '0') {
                return false;
            }
        }
    }
    return true;
} 