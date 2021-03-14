import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Navbar from "./Navbar";
import Stepper from "./Stepper";
import Wallet from "./assets/wallet.svg";
import DropdownIcon from "./assets/dropdown.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
`;

const InfoContainer = styled.div`
  max-width: 557px;
`;

const Title = styled.h1`
  max-width: 552px;
  font-size: 46px;
`;

const GroupContainer = styled.div`
  max-width: 557px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #faf9f9;
  border-radius: 24px;
`;

const GroupName = styled.p`
  font-size: 16px;
  color: grey;
  max-width: 200px;
`;

const ActiveGroupName = styled.p`
  font-size: 16px;
  color: white;
  max-width: 200px;
`;

const GroupShelter = styled.div`
  background: ${(props) =>
    props.accessKey === "shelter"
      ? "linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%)"
      : "#faf9f9"};
  padding: 25px;
  border-radius: 24px 0px 0px 24px;
  flex: 1;
  border: 1px solid #cd8b65;
  box-shadow: ${(props) =>
    props.accessKey === "shelter"
      ? `0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)`
      : "none"};
`;

const GroupFoundation = styled.div`
  background: ${(props) =>
    props.accessKey === "foundation"
      ? "linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%)"
      : "#faf9f9"};
  padding: 25px;
  border-radius: 0px 24px 24px 0px;
  border: 1px solid #cd8b65;
  flex: 1;
  box-shadow: ${(props) =>
    props.accessKey === "foundation"
      ? `0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802)`
      : "none"};
`;

const ShelterContainer = styled.div`
  max-width: 557px;
  margin-top: 58px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChooseTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const Select = styled.div`
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 24px 16px 24px;
  height: 74px;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Placeholder = styled.p`
  font-size: 16px;
  color: grey;
  margin: 0;
`;

const Info = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
`;

const AmountContainer = styled.div`
  margin-top: 40px;
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
`;

const ActiveAmountText = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: white;
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
`;

const FlexEndContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 557px;
`;

const ContinueButton = styled.button`
  width: 124px;
  height: 59px;
  background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 100px;
  border: none;
  margin-top: 72px;
`;

const ButtonText = styled.p`
  margin: 0;
  color: white;
  font-weight: 800;
  font-size: 14px;
`;

const Dropdown = styled.div`
  position: absolute;
  zindex: 10;
  background: white;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  max-width: 557px;
  max-height: 200px;
  overflow: scroll;
`;

const DrowpdownRow = styled.p`
  padding: 5px 24px 5px 24px;
  margin: 0;

  :hover {
    background: silver;
    cursor: pointer;
  }
`;

function Form(): JSX.Element {
  const { t } = useTranslation();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [shelters, setShelters] = useState([]);
  const [choosedShelter, setChoosedShelter] = useState<string>(
    t("chooseChelter")
  );
  const [choosedAmount, setChoosedAmount] = useState(50);
  const [inputAmount, setInputAmount] = useState(0);
  const [helpType, setHelpType] = useState("foundation");

  const amounts: number[] = [5, 10, 20, 30, 50, 100];

  useEffect(() => {
    isDropdownVisible && handleFetchShelters();
  }, [isDropdownVisible]);

  // eslint-disable-next-line
  function useOutsideAlerter(ref: React.MutableRefObject<any>) {
    useEffect(() => {
      function handleClickOutside(event: Event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsDropdownVisible(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function handleFetchShelters() {
    fetch("https://frontend-assignment-api.goodrequest.com/api/v1/shelters")
      .then((response) => response.json())
      .then((data) => {
        setShelters(data.shelters);
      });
  }

  function handlePickShelter(value: string) {
    setChoosedShelter(value);
    setIsDropdownVisible(false);
  }

  function handlePickAmount(value: number) {
    setChoosedAmount(value);
    setInputAmount(0);
  }

  function handleInputChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    const number = Number(event.target.value);
    setInputAmount(number);
    setChoosedAmount(number);
  }

  const sheltersDropdown = shelters.map(
    (shelter: { id: number; name: string }) => (
      <DrowpdownRow
        key={shelter.id}
        onClick={() => handlePickShelter(shelter.name)}
      >
        {shelter.name}
      </DrowpdownRow>
    )
  );

  const amountBlock = amounts.map((amount) => (
    <div key={amount}>
      {choosedAmount === amount ? (
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
      <Navbar />
      <Container>
        <InfoContainer>
          <Stepper />
          <Title>{t("formTitle")}</Title>
          {helpType === "shelter" ? (
            <GroupContainer>
              <GroupShelter
                accessKey={helpType}
                onClick={() => setHelpType("shelter")}
              >
                <img src={Wallet} />
                <ActiveGroupName>{t("shelterTitle")}</ActiveGroupName>
              </GroupShelter>
              <GroupFoundation
                accessKey={helpType}
                onClick={() => setHelpType("foundation")}
              >
                <img src={Wallet} />
                <GroupName>{t("foundationTitle")}</GroupName>
              </GroupFoundation>
            </GroupContainer>
          ) : (
            <GroupContainer>
              <GroupShelter
                accessKey={helpType}
                onClick={() => setHelpType("shelter")}
              >
                <img src={Wallet} />
                <GroupName>{t("shelterTitle")}</GroupName>
              </GroupShelter>
              <GroupFoundation
                accessKey={helpType}
                onClick={() => setHelpType("foundation")}
              >
                <img src={Wallet} />
                <ActiveGroupName>{t("foundationTitle")}</ActiveGroupName>
              </GroupFoundation>
            </GroupContainer>
          )}
          <ShelterContainer>
            <TitleContainer>
              <ChooseTitle>{t("shelterChooseTitle")}</ChooseTitle>
              <Info>
                {t(helpType === "shelter" ? "mandatory" : "optional")}
              </Info>
            </TitleContainer>
            <Select onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
              <div>
                <ChooseTitle>{t("shelter")}</ChooseTitle>
                <Placeholder>{choosedShelter}</Placeholder>
              </div>
              <img src={DropdownIcon} />
            </Select>
            {isDropdownVisible && (
              <Dropdown ref={wrapperRef}>{sheltersDropdown}</Dropdown>
            )}
            <AmountContainer>
              <ChooseTitle>{t("amount")}</ChooseTitle>
              <AmountFlex>
                {amountBlock}
                {choosedAmount === inputAmount ? (
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
                  <AmountBox onClick={() => setChoosedAmount(inputAmount)}>
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
          </ShelterContainer>
          <FlexEndContainer>
            <ContinueButton>
              <Link to="/user-data" style={{ textDecoration: "none" }}>
                <ButtonText>{t("continue")}</ButtonText>
              </Link>
            </ContinueButton>
          </FlexEndContainer>
        </InfoContainer>
      </Container>
      <Footer />
    </div>
  );
}

export default Form;
