function verifycheckradio() {
    var totalrow = 11;
    var aok = 0;
    var anotok = 0;
    var aneutral = 0;
    var tantumpercent = 0;
    var itemevaluados = 0;
	

    var myform = document.forms["quizFormRadio"];

    for (var i = 1; i <= totalrow; i++) {
        if (myform["checklist" + i].value === "ok") { aok++; };
        if (myform["checklist" + i].value === "notok") { anotok++; };
        if (myform["checklist" + i].value === "neutral") { aneutral++; };
    }
    itemevaluados =   totalrow - aneutral;
    tantumpercent = Math.trunc( 100 * aok / (totalrow - aneutral));

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3> Obtuviste cumplimiento de <span>' + tantumpercent + '</span> por ciento en base a <span>' + itemevaluados + '</span> que decidio evaluar en los que hay <span>' + aok + '</span> item que estan bien y <span>'+ anotok + '</spant> que no cumplen</h3>';

    return false;
}
