function  Reduce() {
    let arr = []
    for(let i=0; i<20; i++){
        arr.push(i);
    }
    let updatedval = arr.reduce((prev, curr) => curr = prev+curr);
    console.log(updatedval);
}
Reduce();
