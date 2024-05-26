// Pega o elemento HTML com id Form e cria uma variavel;
const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {

    e.preventDefault();
    console.log("previnido");

    // Recebe a ação e não o valor dos ids
    const pesoI = e.target.querySelector("#peso");
    const alturaI = e.target.querySelector("#altura");

    // agora pega o peso
    const peso = Number(pesoI.value.replace(',', '.'));
    const altura = Number(alturaI.value.replace(',', '.'));

    if (!peso) {
        setResultado("Peso invalido", false);
        return;
        
        
    }
    if (!altura) {
        setResultado("Altura invalida", false);
        return;
        

    }
    if (!altura && !peso) {
        setResultado("Altura e peso invalidos", false);
        return;
        

    }


    const imcCalculado = imc(peso, altura)

    const nivelIMC = imcMargem(imcCalculado);

    
    const msg = (`${imcCalculado}, (${nivelIMC})`);

    setResultado(msg, true);


    
   

   
});

function imcMargem(imc) {

    const nivel = ["Abaixo do peso", "Peso normal","Sobrepeso","Obesidade grau 1","Obesidade grau 2","Obesidade grau 3"]
    

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}




function imc(peso, altura) {
    

    return (peso / altura ** 2).toFixed(2);

    
}

function criarP(tamanhoFonte) {
    const p = document.createElement("p");
    p.classList.add("paragrafoResultado");
    p.style.fontSize = tamanhoFonte; // Adiciona o tamanho da fonte
    
    return p;
}

// O que for mandado de mansagem vai ser enviado por essa função
function setResultado(msg, isValid) {
    const resultado = document.querySelector("#resultado");


    resultado.innerHTML = "";
    
    const p = criarP('20px');

    if (isValid) {
        p.classList.add("paragrafoResultado");
        
    }   
    p.innerText= msg;

    resultado.appendChild(p);



    
}


