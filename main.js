function fibs(num){
    const fibs = [];
    let first = 0;
    let second = 1;

    if (num == 1 ) {fibs.push(first)}
    else if (num == 2) {
        fibs.push(first);
        fibs.push(second)
    }
    else if (num > 2) {
        fibs.push(first);
        fibs.push(second);

        for (let index = 2; index < num; index++) {
            let newMember = first + second;
            first = second;
            second = newMember;

            fibs.push(newMember);
        }
    }

    return fibs
}

function fibsRec(num, memo = {}) {
    console.log(`fibsRec(${num}) called`);
    if (num == 1) return [0];
    if (num == 2) return [0, 1];
    
    if (memo[num]) return memo[num];
    
    const prev = fibsRec(num - 1, memo);
    const nextNum = prev[prev.length - 1] + prev[prev.length - 2];
    const result = [...prev, nextNum];
    
    memo[num] = result;
    
    return result;
}

console.log(fibsRec(9))