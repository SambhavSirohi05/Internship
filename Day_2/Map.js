function  Map() {
    let arr = []
    for(let i=0; i<20; i++){
        arr.push(i);
    }
    let updatedval = arr.map(val=>val+2);
    console.log(updatedval);
}
Map();
