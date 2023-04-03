import './index.css'

const MoneyDetails = props => {
  return (
    <div className="money-detail-container">
      <div className="balance card-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="name">Your Balance</p>
          <p className="value">14000</p>
        </div>
      </div>
      <div className="income card-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="name">Your Income</p>
          <p className="value">Rs 70000</p>
        </div>
      </div>
      <div className="expenses card-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="name">Your Expenses</p>
          <p className="value">Rs 30000</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
