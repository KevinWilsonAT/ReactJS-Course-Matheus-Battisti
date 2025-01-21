import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs'

import './Thanks.css'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Almost There...</h2>
      <p>Your opinion is very important, soon you will receive a 10% discount coupon for your next shop</p>
      <p>To complete your evaluation click on the Send button below</p>
      <h3>Here is the summary of your evaluation: {data.name}</h3>
      <p className="review-data">
        <span>Product satisfaction:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comment:</span>
        {data.comment}
      </p>
    </div>
  )
}

export default Thanks