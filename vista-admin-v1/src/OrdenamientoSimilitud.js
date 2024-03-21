function calcularSimilitud(str1, str2) {
    const obtenerTokens = (str) => {
        console.log(str)
        return new Set(str.toString().toLowerCase().split('').filter(token => token.match(/[a-z0-9]/)));
    };

    const tokensStr1 = obtenerTokens(str1);
    const tokensStr2 = obtenerTokens(str2);

    const interseccion = new Set([...tokensStr1].filter(token => tokensStr2.has(token)));
    const union = new Set([...tokensStr1, ...tokensStr2]);

    const jaccardIndex = interseccion.size / union.size;

    // Calculamos la distancia de edición
    const distance = levenshteinDistance(str1, str2);
    // Calculamos la longitud máxima de las dos cadenas
    const maxLength = Math.max(str1.length, str2.length);
    // Normalizamos la distancia de edición para obtener un valor entre 0 y 1
    const normalizedDistance = 1 - distance / maxLength;

    // Calculamos la similitud combinando el coeficiente de Jaccard y la distancia de edición
    const similitud = (jaccardIndex + normalizedDistance) / 2 * 100;

    return similitud;
}

function levenshteinDistance(str1, str2) {
    const dp = Array.from(Array(str1.length + 1), () => Array(str2.length + 1).fill(0));

    for (let i = 0; i <= str1.length; i++) {
        for (let j = 0; j <= str2.length; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }

    return dp[str1.length][str2.length];
}

function ordenarPorSimilitud(arr, comparador) {
    return arr.map(word => {
        const similitud = calcularSimilitud(comparador, word);
        return { palabra: word, similitud: similitud };
    }).sort((a, b) => b.similitud - a.similitud);
}

export default {calcularSimilitud, ordenarPorSimilitud, levenshteinDistance}