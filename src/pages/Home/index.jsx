import * as S from "./styled.js";

import Header from "../../components/Header";
import Subtitulo from "../../components/Subtitulo/index.jsx";
import HeroText from "../../components/Hero/index.jsx";
import Image from "../../components/Image/index.jsx";
// import Button from "../../components/Button";

function Home({ changeTheme }) {
  const style = {
    height: "70px",
  };

  return (
    <>
      <Header
        style={style}
        div={{ display: "none" }}
        portfolio="Portifólio"
        changeTheme={changeTheme}
      />
      <S.Main>
        <S.BlocoUm>
          <HeroText texto="de artista" />
          <HeroText texto=" para artista" />
        </S.BlocoUm>

        <S.BlocoDois>
          <Subtitulo texto="Sobre o Rosemary's" />
          <S.DivCard>
            <S.DivTexto>
              <S.H1>Quem somos</S.H1>
              <S.Paragrafo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </S.Paragrafo>
            </S.DivTexto>
            <S.DivImage>
              <Image
                src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
                alt="cao"
              />
              <Image
                src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
                alt="cao"
              />
            </S.DivImage>
          </S.DivCard>

          <S.DivCard>
            <S.DivImage>
              <Image
                src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
                alt="cao"
              />
              <Image
                src="https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?quality=90&strip=info&resize=680,453"
                alt="cao"
              />
            </S.DivImage>
            <S.DivTexto>
              <S.H1>Nossa filosofia</S.H1>
              <S.Paragrafo>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </S.Paragrafo>
            </S.DivTexto>
          </S.DivCard>
        </S.BlocoDois>

        <S.BlocoTres>
          <div>
            <Subtitulo texto="Time" />
          </div>
        </S.BlocoTres>

        <S.BlocoQuatro>
          <div>
            <Subtitulo texto="Últimos trabalhos" />
          </div>
        </S.BlocoQuatro>

        <S.BlocoCinco>
          <div>
            <Subtitulo texto="Quer ser cliente/Quer ser do time" />
          </div>
        </S.BlocoCinco>
      </S.Main>
    </>
  );
}

export default Home;
