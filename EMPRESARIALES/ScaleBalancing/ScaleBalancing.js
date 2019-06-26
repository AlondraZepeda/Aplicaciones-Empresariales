function ScaleBalancing(strArr) { 
    const balance = JSON.parse(strArr[0]);
    const weights = JSON.parse(strArr[1]);

    const balanceDiff = Math.abs(balance[0] - balance[1]);

    if (weights.includes(balanceDiff)) return balanceDiff.toString();

    for (let i = 0; i < weights.length - 1; i++) {
        for (let j = i + 1; j < weights.length; j++) {
            if (weights[i] + weights[j] === balanceDiff || Math.abs(weights[i] - weights[j]) === balanceDiff) {
                return weights[i] < weights[j] ? weights[i] + ',' + weights[j] : weights[j] + ',' + weights[i];
            }
        }
    }

    return 'no es posible';
}