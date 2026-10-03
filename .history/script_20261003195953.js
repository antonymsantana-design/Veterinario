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
             
            <button id="butcard" class="butcard"><a href="contatos.html">Solicitar</a></button>
        </div>`
    }

}
cards()

