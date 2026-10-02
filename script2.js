let nome = ["👩‍⚕️ Dra. Ana Souza", "👨‍⚕️ Dr. Lucas Martins", "👩‍⚕️ Dra. Mariana Oliveira", "👨‍⚕️ Dr. Pedro Almeida", "👩‍⚕️ Dra. Camila Ferreira", "👨‍⚕️ Dr. Rafael Costa"];

let image = ["image/m1.jpg", "image/h1.jpg", "image/m2.jpg", "image/h2.jpg", "image/m3.jpg", "image/h3.jpg"];

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
        </div>`
    }

}
cards2()