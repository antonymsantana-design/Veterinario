const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `<div class="conteudoH" id="conteudoH">
        <div class="imagem" id="imagem">
            <img src="image/logo.png" alt="logo" class="logoIMG" id="logoIMG" />
        </div>
        <div class="direitaH">
            <div class="links" id="links">
                <a href="serviços.html" class="aLinks" id="servA">Serviços</a>
                <a href="CONTATOS.HTML" class="aLinks" id="contatosA">Contatos</a>
                <a href="Team.html" class="aLinks" id="contatosA">Equipe</a>
            </div>
        </div>
    </div>`;
body.innerHTML = ``;
footer.innerHTML = ``;