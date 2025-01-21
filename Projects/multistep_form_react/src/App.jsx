import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

import { useForm } from './hooks/useForm'
import { useState } from 'react'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

import './App.css'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {
  
  const [data, setData] = useState(formTemplate);
  
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value }
    });
  };

  const formComponents = [
    <UserForm data = {data} updateFieldHandler = { updateFieldHandler } />,
    <ReviewForm data = {data} updateFieldHandler = { updateFieldHandler } />,
    <Thanks data = {data} />
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Leave your feedback</h2>
        <p>We're happy with your purchase, use the form below to avaliate the product</p>
      </div>
      <div className="form-container">
        <Steps currentStep = { currentStep } />
        <form onSubmit={ (e) => changeStep(currentStep + 1, e) }>
          <div className="inputs-container">{ currentComponent }</div>
          <div className="actions">

            {!isFirstStep && (
              <button type="button" onClick={ () => changeStep(currentStep - 1) }>
                <GrFormPrevious />
                <span>Go Back</span>
              </button>
            )}

            {!isLastStep ? (
              <button type="submit">
              <span>Next</span>
              <GrFormNext />
            </button>
            ) : (
              <button type="button">
                <span>Send</span>
                <FiSend />
              </button>
            )}

          </div>
        </form>
      </div>
    </div>
  )
}

export default App
