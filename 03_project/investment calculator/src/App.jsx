import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from "react"


function App() {

  const [formData, setFormData] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = formData.duration >= 1;

  const handleChange = (inputId, newValue) => {
    setFormData(currData => {
      return {
        ...currData,
        [inputId]: +newValue,
      };
    })
  }
  return (
    <>
      <Header />
      <UserInput onChangeData={handleChange} formData={formData} />
      {!inputIsValid && <p className="center">Please enter a duration higher than zero!</p>}
      {inputIsValid && <Results input={formData} />}
    </>
  )
}

export default App
