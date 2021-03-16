import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../store/reducer";
import * as actionTypes from "../../store/actions";

const AmountContainer = styled.div`
  margin-top: 40px;
`;

const AmountFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const Input = styled.input`
  width: 33px;
  border: none;
  border-bottom: 1px solid #c9c9c9;
  outline: none;
`;

const ActiveInput = styled.input`
  width: 33px;
  border: none;
  border-bottom: 1px solid #c9c9c9;
  outline: none;
  background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const ChooseTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const AmountBox = styled.div`
  height: 53px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
`;

const ActiveAmountBox = styled.div`
  height: 53px;
  padding: 16px;
  background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
`;

const ActiveAmountText = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: white;
`;

const AmountPick = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const form = useSelector((state: IState) => state.form);
  const setValue = useCallback(
    (value: number) => dispatch({ type: actionTypes.SET_VALUE, amount: value }),
    [dispatch]
  );

  const amounts: number[] = [5, 10, 20, 30, 50, 100];

  const [inputAmount, setInputAmount] = useState(0);

  function handlePickAmount(value: number) {
    setValue(value);
    setInputAmount(0);
  }

  function handleInputChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    const number = Number(event.target.value);
    setInputAmount(number);
    setValue(number);
  }

  const amountBlock = amounts.map((amount) => (
    <div key={amount}>
      {form.value === amount ? (
        <ActiveAmountBox onClick={() => handlePickAmount(amount)}>
          <ActiveAmountText>{amount} €</ActiveAmountText>
        </ActiveAmountBox>
      ) : (
        <AmountBox onClick={() => handlePickAmount(amount)}>
          <ChooseTitle>{amount} €</ChooseTitle>
        </AmountBox>
      )}
    </div>
  ));
  return (
    <div>
      <AmountContainer>
        <ChooseTitle>{t("amount")}</ChooseTitle>
        <AmountFlex>
          {amountBlock}
          {form.value === inputAmount ? (
            <ActiveAmountBox>
              <ActiveAmountText>
                <ActiveInput
                  type="number"
                  value={inputAmount === 0 ? "" : inputAmount}
                  onChange={handleInputChangeAmount}
                  autoFocus
                />{" "}
                €
              </ActiveAmountText>
            </ActiveAmountBox>
          ) : (
            <AmountBox onClick={() => setValue(inputAmount)}>
              <ChooseTitle>
                <Input
                  type="number"
                  value={inputAmount === 0 ? "" : inputAmount}
                  onChange={handleInputChangeAmount}
                />{" "}
                €
              </ChooseTitle>
            </AmountBox>
          )}
        </AmountFlex>
      </AmountContainer>
    </div>
  );
};

export default AmountPick;
