function saludar (saludarFuncion){
    saludarFuncion();
}

const saludoInternacional = function(){
    console.log("Hello world");
}

const saludoMexicano = ()  => {
    console.log("Quiubo wey");
}

saludar(saludoInternacional);
saludar(saludoMexicano);