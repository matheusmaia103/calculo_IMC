const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const sexo = document.querySelector('#sexo');
const resposta = document.querySelector('span');
const calcular = () =>{ 
    const pesoKG = parseFloat(peso.value);
    const alturaM = parseFloat(altura.value);

    if (!pesoKG){
        peso.classList.add("error");
        document.querySelector('label').classList.add("labelError")

        console.log(document.querySelector('label').classList);
        if (!alturaM){
            altura.classList.add("error");
            document.querySelectorAll('label')[1].classList.add("labelError")

    
            console.log(peso.classList);
            return
        }
        return
    }
    if (pesoKG){
        peso.classList.remove("error");
        document.querySelector('label').classList.remove("labelError")

        console.log(document.querySelector('label').classList);
        if (alturaM){
            altura.classList.remove("error");
            document.querySelectorAll('label')[1].classList.remove("labelError")

    
            console.log(peso.classList);
            
        }
        
    }
    const IMC = pesoKG/(alturaM/100)**2;
    const pesoIdeal = () =>{
        if (sexo.value === 'homem') return Number(((altura.value) - 100)*0.90);
        if (sexo.value === 'mulher') return Number(((altura.value) - 100)*0.85);
    }

    const porEscrito = (valor) =>{
        const ajustando = valor.toString();
        const reajustando = ajustando.slice(0, 5).replace('.', ',');

        return reajustando
    }

    const classe = () => {
        if (IMC <= 18.5){
            return 'Abaixo do peso';
        }
        else if (IMC >= 18.6 && IMC <24.9){
            return 'Peso ideal';
        }
        else if(IMC >= 25 && IMC <29.9){
            return'Excesso de peso';
        }
        else if (IMC >=30 && IMC<34.9){
            return 'Obesidade I';
        }
        else if (IMC >=35 && IMC<39.9){
            return 'Obesidade II';
        }
        else {
            return 'Obesidade III'
        }
          

        
    }
    
    resposta.innerHTML = `
    
    <table>
    <tr class="title">
        <td>Seu IMC</td>
        <td>Sua classificação</td>
        <td>Peso recomendável</td>
    </tr>
    <tr>
        <td id="resposta">${porEscrito(IMC)}</td>
        <td id="class">${classe()}</td>
        <td>${porEscrito(pesoIdeal())}Kg</td>
    </tr>
</table>`

window.scrollBy(0, window.innerHeight);
}

const data = new Date();
const op = {
    dateStyle: 'full'
};

console.log(data.toLocaleDateString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
}));

const cor = () => {
    const cel = document.querySelectorAll('tr');

    for (let i = 0; i<cel.length; i++){
        if(i % 2 === 0){
            cel[i].classList.add("striped")
        }
    }
    console.log(cel);
}

