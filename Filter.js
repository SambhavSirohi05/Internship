function  Filter() {
    let arr = []
    for(let i=0; i<20; i++){
        arr.push(i);
    }
    let updatedval = arr.filter(val=>val<11);
    console.log(updatedval);
}
Filter();
