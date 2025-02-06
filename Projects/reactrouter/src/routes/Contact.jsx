import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      {/* 5- nested routes */}
      <p>
        <Link to="/contact/1">Contact Form 1</Link>
      </p>
      <p>
        <Link to="/contact/2">Contact Form 2</Link>
      </p>
      <p>
        <Link to="/contact/3">Contact Form 3</Link>
      </p>
    </div>
  )
}

export default Contact