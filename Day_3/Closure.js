function outer() {
    let count = 0;
     function inner(){
        count++
        console.log(count);
    };
    return inner;
}
c1 = outer()
c2 = c1
c3= outer()

c1()
c2()
c3()