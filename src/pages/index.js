import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import SocialMedias from "../components/SocialMedias";
import { getSuggestedHours } from "../utils/suggestedHours";
import { Helmet } from "react-helmet";
import Segments from "../components/Segments";
import { getSocialMedia } from "../utils/socialMedias";
import { getSegment } from "../utils/segments";

const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   background: linear-gradient(#c51162, #fd558f);
   color: #FFF;
   font-family: 'Nunito Sans', sans-serif;
 }

 h1 {
   text-transform: uppercase;
   text-align: center;
   margin-bottom: 10px;
   font-weight: 300;
 }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;
`;

const SuggestedDays = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  justify-content: center;
  align-items: center;
`;

const SuggestedDay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-left: 10px;

  strong {
    font-weight: bold;
    text-transform: uppercase;
  }

  ul {
    list-style-type: none;
    margin-left: 10px;
    display: flex;

    li {
      margin-left: 10px;
    }
  }
`;

const SuggestedDayWrapper = styled.div`
  background: #fff;
  color: #c51162;
  display: block;
  padding: 20px;
  border-radius: 10px;

  h1 {
    margin-bottom: 20px;
  }
`;

const Logo = styled.a`
  font-weight: 800;
  font-size: 28px;
  letter-spacing: 0.5px;
  margin-bottom: 30px;
  color: #FFF;
  text-decoration: none;
  text-transform: uppercase;

  small {
    font-size: 60%;
  }
`;

const TextBlock = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: block;

  p {
    font-weight: 300;
    line-height: 1.75;
    font-size: 22px;
    margin-bottom: 30px;
  }

  a {
    color: #fff;
    font-weight: 700;
  }
`;

const Footer = styled.footer`
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: lowercase;

  a {
    color: #FFF;
  }
`;

const titleVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const IndexPage = () => {
  const [socialMedia, setSocialMedia] = useState("");
  const [segment, setSegment] = useState("");

  return (
    <>
      <Container>
        <GlobalStyle />
        <Helmet
          title="Qual o melhor hor??rio para postar nas redes sociais? Quando Postar"
          defer={false}
        >
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
          />
        </Helmet>
        <Logo href="https://quandopostar.com.br" title="Qual o melhor hor??rio para postar nas redes sociais? Quando Postar">
          QuandoPostar<small>.com.br</small>
        </Logo>
        <AnimatePresence>
          {!socialMedia && (
            <motion.h1
              variants={titleVariant}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              Qual rede social voc?? pretende postar?
            </motion.h1>
          )}
        </AnimatePresence>
        <SocialMedias value={socialMedia} setValue={setSocialMedia} />
        <AnimatePresence>
          {socialMedia && !segment && (
            <motion.h1
              variants={titleVariant}
              initial="hidden"
              animate="visible"
            >
              {getSocialMedia(socialMedia).label}, ??timo! Qual o seu segmento?
            </motion.h1>
          )}
        </AnimatePresence>
        {socialMedia && <Segments value={segment} setValue={setSegment} />}

        {socialMedia && segment && (
          <SuggestedDayWrapper>
            <AnimatePresence>
              {socialMedia && segment && (
                <motion.h1
                  style={{ maxWidth: 640 }}
                  variants={titleVariant}
                  initial="hidden"
                  animate="visible"
                >
                  Os melhores hor??rios para
                  <br />
                  <strong>{getSocialMedia(socialMedia).label}</strong> na ??rea
                  de <strong>{getSegment(segment).label}</strong>:
                </motion.h1>
              )}
            </AnimatePresence>
            <AnimatePresence>
              <SuggestedDays>
                {getSuggestedHours(socialMedia, segment).map(
                  ({ day, hours }) => (
                    <SuggestedDay>
                      <strong>{day}</strong>
                      <ul>
                        {hours.map((hour) => (
                          <li>{hour}</li>
                        ))}
                      </ul>
                    </SuggestedDay>
                  )
                )}
              </SuggestedDays>
            </AnimatePresence>
          </SuggestedDayWrapper>
        )}
      </Container>
      <Container>
        <TextBlock>
          <p>
            De 2020 para 2022, muita coisa mudou nas{" "}
            <strong>m??dias sociais</strong>. Elas se tornaram ainda mais
            importantes para as pessoas e marcas que querem manter uma conex??o
            instant??nea com seu p??blico. As <strong>m??dias sociais</strong>{" "}
            servem especialmente para identificar novas tend??ncias e
            prefer??ncias e estar atento aos eventos atuais.
          </p>
          <p>
            Muitas empresas precisaram se adaptar a esta r??pida transforma????o
            digital que a pandemia do <a href="https://covid.saude.gov.br/" title="Saiba mais sobre o Covid-19 no Brasil">Covid-19</a> exigiu de todos
            n??s. Com isso em mente, o{" "}
            <a
              href="https://quandopostar.com.br"
              title="Qual o melhor hor??rio pra postar nas redes sociais?"
            >
              quandopostar.com.br
            </a>{" "}
            foi elaborado para quem quer atingir seu p??blico-alvo em cheio,
            usufruindo o m??ximo poss??vel dos{" "}
            <strong>algoritmos das redes sociais</strong>.
          </p>
          <p>
            N??s trabalhamos arduamente para identificar{" "}
            <strong>quais s??o os melhores hor??rios para postar</strong> nas
            redes sociais. Este ?? um processo extenso, que est?? sendo mantido e
            monitorado diariamente.
          </p>
          <p>
            Muitas pessoas tem d??vidas sobre qual ?? o melhor momento para postar
            nas redes sociais. Esta ?? a <strong>ferramenta ideal</strong> para
            sanar a d??vida dos usu??rios sobre quando ?? a melhor hora pra postar.
          </p>
          <p>
            Se voc?? est?? procurando uma{" "}
            <strong>refer??ncia pr??tica e r??pida</strong> para encontrar quais
            s??o os melhores hor??rios para postar nas{" "}
            <strong>m??dias sociais</strong>, voc?? encontrou.
          </p>
          <p>
            O{" "}
            <a
              href="https://facebook.com"
              title="Facebook - A rede social mais usada no mundo"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>{" "}
            ?? a rede social <strong>mais usada</strong> em todo o mundo. Ent??o
            este ?? certamente um dos principais canais que as marcas devem usar
            para se comunicar com seu p??blico-alvo.
          </p>
          <p>
            Saber o melhor hor??rio para postar no{" "}
            <a
              href="https://facebook.com"
              title="Facebook - A rede social mais usada no mundo"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>{" "}
            ?? primordial para atingir o seu p??blico-alvo no momento em que eles
            est??o acessando as suas redes.
          </p>
          <p>
            O{" "}
            <a
              href="https://twitter.com"
              title="Twitter - A rede social mais informativa no mundo"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{" "}
            ?? a rede social <strong>mais informativa</strong> em todo o mundo. Ent??o
            este ?? certamente um dos principais canais que as marcas devem usar
            para se comunicar imediatamentes com seu p??blico-alvo.
          </p>
          <p>
            Saber o melhor hor??rio para postar no{" "}
            <a
              href="https://twitter.com"
              title="Twitter - A rede social mais informativa no mundo"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>{" "}
            ?? primordial para atingir o seu p??blico-alvo no momento em que eles
            est??o acessando as suas redes.
          </p>
          <p>
            O{" "}
            <a
              href="https://linkedin.com"
              title="LinkedIn - A rede social de trabalho n?? 1 no mundo"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            ?? a principal rede social <strong>sobre trabalho</strong> em todo o mundo. Ent??o
            este ?? certamente um dos principais canais que as marcas devem usar
            para se comunicar profissionalmente com seu p??blico-alvo.
          </p>
          <p>
            Saber o melhor hor??rio para postar no{" "}
            <a
              href="https://linkedin.com"
              title="LinkedIn - A rede social de trabalho n?? 1 no mundo"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            ?? primordial para atingir o seu p??blico-alvo no momento em que eles
            est??o acessando as suas redes.
          </p>
        </TextBlock>
        <Footer><a href="https://quandopostar.com.br" title="Qual o melhor hor??rio para postar nas redes sociais?">quandopostar.com.br</a> - Todos os Direitos Reservados.</Footer>
      </Container>
    </>
  );
};

export default IndexPage;
