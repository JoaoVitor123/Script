window.onload=function(){
	function construtorObs() {

    var observer = {};
    var listaDeObs = [];
    var contador = 0;

    observer.addListener = function (obs) {
        listaDeObs.push(obs);
    };

    function execEvent() {
        for (var i = 0; i < listaDeObs.length; i++) {
            var funcObs = listaDeObs[i];
            funcObs();
        }
    }

    function contar() {
        contador += 1;
        return contador;
    }

    observer.contar = contar;
    observer.execEvent = execEvent;
    return observer;
}

var obs = construtorObs();

var listener = function () {};

obs.addListener(listener);
obs.execEvent();

document.getElementById("btn-contar").addEventListener("click", function () {
    document.getElementById("contadorId").value = obs.contar();
});
};