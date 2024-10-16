function mostrar(){
    let xop = parseInt(document.getElementById('op').value);
    let xpre = 0
    switch(xop){
        case 1:
            xpre =30.00;
            document.getElementById('img').src="";
            break
        case 2:
            xpre =30.00;
            document.getElementById('img').src="";
            break
        case 3:
            xpre =30.00;
            document.getElementById('img').src="";
            break
        case 4:
            xpre =30.00;
            document.getElementById('img').src="";
            break
        case 5:
            xpre =25.00;
            document.getElementById('img').src="";
            break                                                 
    } 
    document.getElementById('txtPre').value=xpre.toFixed(2);
}
function calcular(){
    let xp = parseInt(document.getElementById('txtPre').value);
    let xc = parseInt(document.getElementById('txtCan').value);
    let xtot = xp * xc
    document.getElementById('txtImp').value=xtot.toFixed(2);
}
function nuevo(){
    document.getElementById('txtCan').value='';
    document.getElementById('txtImp').value='';
}