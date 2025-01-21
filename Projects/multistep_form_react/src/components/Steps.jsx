import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

import "./Steps.css"

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>Identification</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Evaluation</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Sending</p>
      </div>
    </div>
  )
}

export default Steps