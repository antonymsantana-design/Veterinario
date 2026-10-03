const body = document.querySelector("body");

body.innerHTML = `
<header>
    <div class="conteudoH" id="conteudoH">
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
    </div>
</header>
<div class="conteudu" id="conteudu">

        <h2>Deixe seu feedback</h2>
        <br>

        <div class="formu" id="formu">
            <br>

            <form action="https://formsubmit.co/antony.m.santana@aluno.senai.br" method="POST">

                <input type="hidden" name="_subject" value="Nova mensagem do site">
                <input type="hidden" name="_template" value="table">

                <div class="nome">
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" id="nome" required>
                </div>



                <div class="email">
                    <label for="Email">E-mail</label>
                    <input type="email" name="Email" id="Email" required>
                </div>



                <div class="avaliacao">
                    <label>Avaliação:</label>

                    <input type="radio" name="avaliacao" id="bom" value="Bom">
                    <label for="bom">Bom</label>

                    <input type="radio" name="avaliacao" id="excelente" value="Excelente">
                    <label for="excelente">Excelente</label>

                </div>
                <br><br>

                <label for="mensagem">Mensagem:</label>
                <br>
                <textarea name="mensagem" id="mensagem" rows="5" cols="40"></textarea>

                <br><br>

                <input type="hidden" name="_next" value="http://127.0.0.1:5500/sucsses.html">

                <button type="submit" class="buto" onClick="form()">ENVIAR AVALIAÇÃO</button>
            </form>
        </div>
    </div>`;
