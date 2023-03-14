import { useState } from "react";
import Button from "./Button";
import Cash from "./Cash";
import SelectClientCurrency from "./SelectClientCurrency";
import SelectCurrencyExpected from "./SelectCurrencyExpected";
import RecalculateButton from "./RecalculateButton";
import ExchangeRate from "./ExchangeRate";
import Result from "./Result";
import Section from "./Section";
import Container from "./Container";

function App() {

  const [image, setImage] = useState(`https://i.postimg.cc/wBrKx1wZ/images.jpg`);
  const [showImage1, setShowImage1] = useState(true);

  const toggleImage = () => {
    if (showImage1) {
      setImage(`https://i.postimg.cc/8z4DYzW4/giorgio-trovato-Wyxq-Qpy-FNk8-unsplash.jpg`)
    } else {
      setImage(`https://i.postimg.cc/wBrKx1wZ/images.jpg`)
    }

    setShowImage1(!showImage1);
  }
  return (

    <Container image={image}>
      <Button toggleImage={toggleImage}
      />
      <Section
        title="Currency calculator"
        body={
          <>
            <Cash />
            <SelectClientCurrency />
            <SelectCurrencyExpected />
          </>}
        result={
          <>
            <RecalculateButton />
            < ExchangeRate />
            <Result />
          </>}
      />
    </Container>


  );
}

export default App;
