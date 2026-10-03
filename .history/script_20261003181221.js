let texto = ["🩺 Consulta Veterinária", "💉 Vacinação", "🧪 Exames Laboratoriais", "🏥 Cirurgia Veterinária", "✂️ Banho e Tosa", "🐾 Castração"];
let imagem = ["image/consulta.jpg", "image/vacina.jpg", "image/exame.jpg", "image/cirurgia.jpg", "image/banho.jpg", "image/castração.jpg"];
let descr = ["Avaliação completa da saúde do seu animal de estimação, incluindo histórico médico, exame físico e recomendações de cuidados.",
    "Proteja seu animal de estimação contra doenças com nossas vacinas de alta qualidade, administradas por profissionais experientes.",
    "Realizamos exames laboratoriais precisos para diagnosticar e monitorar a saúde do seu animal de estimação, incluindo exames de sangue, urina e fezes.",
    "Intervenções cirúrgicas especializadas para garantir o bem-estar do seu animal de estimação, realizadas por veterinários qualificados.",
    "Cuidados de higiene e beleza para manter seu animal de estimação saudável e bem cuidado.",
    "Serviço de castração seguro e humanizado, realizado por profissionais qualificados."];
let preco = ["R$ 150,00", "R$ 80,00", "R$ 120,00", "R$ 500,00", "R$ 100,00", "R$ 300,00"];



function cards() {

    let cards = document.querySelector('#cards');

    for (let i = 0; i < texto.length; i++) {
        cards.innerHTML += ` <div class="primeiro" id="primeiro">

            <img src="${imagem[i]}" alt="qualquercoisa">
             <p class="texto">${texto[i]}</p>
             <small class="texto">${descr[i]}</small>
             <br>
             <p class = "preco">${preco[i]}</p>
             
            <button id="butcard" class="butcard">Solicitar</button>
        </div>`
    }

}
cards()

const butcard = document.querySelectorAll('.butcard');
butcard.forEach((button, i) => {
    button.addEventListener('click', () => {
        window.alert(`Você solicitou o serviço: ${texto[i]} Preço: ${preco[i]}`);
    })
})

let nome = ["👩‍⚕️ Dra. Ana Souza", "👨‍⚕️ Dr. Lucas Martins", "👩‍⚕️ Dra. Mariana Oliveira", "👨‍⚕️ Dr. Pedro Almeida", "👩‍⚕️ Dra. Camila Ferreira", "👨‍⚕️ Dr. Rafael Costa"];

let image = ["image/h1.jpg", "image/m1.jpg", "image/h2.jpg", "image/m2.jpg", "image/h3.jpg", "image/m3.jpg"];

let descri = ["Especialista em medicina interna e cuidados preventivos para cães e gatos.",
    "Veterinário experiente em cirurgia ortopédica e tratamento de doenças crônicas em animais de estimação.",
    "Dra. Mariana Oliveira é especialista em dermatologia veterinária, oferecendo cuidados para problemas de pele em cães e gatos.",
    "Dr. Pedro Almeida é um veterinário dedicado à odontologia animal, proporcionando tratamentos dentários de qualidade para pets.",
    "Dra. Camila Ferreira é uma veterinária apaixonada por comportamento animal, ajudando a melhorar a relação entre tutores e seus pets.",
    "Dr. Rafael Costa é especialista em cardiologia veterinária, oferecendo diagnósticos e tratamentos para doenças cardíacas em animais de estimação."];



function cards2() {

    let cardse = document.querySelector('#cardsE');

    for (let i = 0; i < nome.length; i++) {
        cardse.innerHTML += ` <div class="primeiro" id="primeiro">
            <img src="${image[i]}" alt="qualquercoisa">
             <p class="texto">${nome[i]}</p>
             <small class="texto">${descri[i]}</small>
            <button id="butcard" class="butcard">Solicitar</button>
        </div>`
    }

}
cards2()