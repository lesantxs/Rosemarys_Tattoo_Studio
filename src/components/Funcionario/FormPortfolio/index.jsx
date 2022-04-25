import * as S from "./styled.js";

import Button from "../../Button/index.jsx";
import Input from "../../Input/index.jsx";

import { useState } from "react";
import { apiPortfolio } from "../../../services/api.js";

function FormPortfolio() {
  const [portfolio, setPortfolio] = useState([]);

  const handleOnChange = (e) => {
    e.preventDefault();
    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });
  };

  const inserirPortfolio = async (e) => {
    e.preventDefault();
    try {
      const response = await apiPortfolio.post("/portfolio", portfolio);
      console.log(response.data.mensagem);
      alert(response.data.mensagem);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <S.Container>
      <S.Quadro>
        <h2>Portfólio</h2>
        <S.Form>
          <div class="caixa">
            <Input
              placeholder="CLIENTE_ID"
              type="number"
              name="clienteid"
              id="cId"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            <Input
              placeholder="FUNCIONARIO_ID"
              type="number"
              name="funcionarioid"
              id="func_id"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            <textarea
              placeholder="DESCRICAO"
              type="text"
              rows="8"
              name="descricao"
              id="descricao"
              onChange={(e) => handleOnChange(e)}
            ></textarea>
          </div>
          <div class="caixa">
            <Input
              placeholder="DURACAO"
              type="text"
              name="duracao"
              id="duracao"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            <label>FOTO:</label>
            <Input
              placeholder="FOTO"
              type="file"
              name="foto"
              id="foto"
              onChange={(e) => handleOnChange(e)}
            ></Input>
            <Button
              type="submit"
              nome="INSERIR"
              onClick={(e) => inserirPortfolio(e)}
            ></Button>
          </div>
        </S.Form>
      </S.Quadro>
    </S.Container>
  );
}
export default FormPortfolio;
