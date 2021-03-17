import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store/reducer";
import * as actionTypes from "../../store/actions";
import {
  ActiveAmountBox,
  ActiveAmountText,
  ActiveInput,
  AmountBox,
  AmountContainer,
  AmountFlex,
  ChooseTitle,
  Input,
} from "./amount-picker-styled-components";

const AmountPicker = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const contributor = useSelector((state: IState) => state.contributor);
  const setValue = useCallback(
    (value: number) => dispatch({ type: actionTypes.SET_VALUE, amount: value }),
    [dispatch]
  );

  const amounts: number[] = [5, 10, 20, 30, 50, 100];

  const [inputAmount, setInputAmount] = useState(0);

  const handlePickAmount = (value: number) => {
    setValue(value);
    setInputAmount(0);
  };

  const handleInputChangeAmount = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const number = Number(event.target.value);
    setInputAmount(number);
    setValue(number);
  };

  const amountBlock = amounts.map((amount) => (
    <div key={amount}>
      {contributor?.value === amount ? (
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
          {contributor?.value === inputAmount ? (
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

export default AmountPicker;
