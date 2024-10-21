function mostrar(){
    let xop = parseInt(document.getElementById('op').value);
    let xpre = 0
    switch(xop){
        case 1:
            xpre =30.00;
            document.getElementById('img').src="https://firebasestorage.googleapis.com/v0/b/proyecto-de-restaurante-3b647.appspot.com/o/lomo%20saltado.jpg?alt=media&token=10642267-58ab-4b3b-b3b9-587931695767";
            break
        case 2:
            xpre =30.00;
            document.getElementById('img').src="https://firebasestorage.googleapis.com/v0/b/proyecto-de-restaurante-3b647.appspot.com/o/aji-de-gallina.jpg?alt=media&token=ed0ab6fb-8b06-4f33-8cd9-f8fc83f7c1a2";
            break
        case 3:
            xpre =30.00;
            document.getElementById('img').src="https://firebasestorage.googleapis.com/v0/b/proyecto-de-restaurante-3b647.appspot.com/o/ceviche.jpeg?alt=media&token=474688e6-b22d-492a-a959-abaaa3d3f6a1";
            break
        case 4:
            xpre =30.00;
            document.getElementById('img').src="https://firebasestorage.googleapis.com/v0/b/proyecto-de-restaurante-3b647.appspot.com/o/causa.jpeg?alt=media&token=001afe50-911b-432e-8758-712902c646c8";
            break
        case 5:
            xpre =25.00;
            document.getElementById('img').src="https://firebasestorage.googleapis.com/v0/b/proyecto-de-restaurante-3b647.appspot.com/o/aji-de-gallina.jpg?alt=media&token=ed0ab6fb-8b06-4f33-8cd9-f8fc83f7c1a2";
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