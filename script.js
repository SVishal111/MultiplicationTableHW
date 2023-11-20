function multiplyCalculate() {
    document.getElementById("resultShow").value="";
    var a = parseInt(document.getElementById("num1").value);
    var i;

    for(i=1; i<=10; i++) {
        document.getElementById("resultShow").value += a+" x "+i+" = "+ i*a + "\n" ;
    }

}