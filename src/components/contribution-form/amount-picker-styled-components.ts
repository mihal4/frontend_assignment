import styled from "styled-components";

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

export {
  AmountContainer,
  AmountFlex,
  Input,
  ActiveInput,
  ChooseTitle,
  AmountBox,
  ActiveAmountBox,
  ActiveAmountText,
};
