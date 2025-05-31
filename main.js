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
        fibs.push(second)

        for (let index = 2; index < num; index++) {
            let newMember = first + second;
            first = second;
            second = newMember;

            fibs.push(newMember);
        }
    }

    return fibs
}





console.log(fibs(3))