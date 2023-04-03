import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const listOfOptionId = transactionTypeOptions.find(
      eachItem => eachItem.optionId === optionId,
    )

    const {displayText} = listOfOptionId
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.state({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.state({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.state({optionId: event.target.value})
  }

  getBalance = () => {
    const {transactionList} = this.state

    let balanceAmount = 0
    let incomeAmount = 0
    let expenseAmount = 0

    transactionList.forEach(eachItem => {
      if (eachItem.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachItem.amount
      } else {
        expenseAmount += eachItem.amount
      }
      balanceAmount = incomeAmount - expenseAmount
    })
  }

  render() {
    const {titleInput, amountInput, optionId} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpense()

    return (
      <div className="app-container">
        <div className="items-container">
          <div className="name-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="description">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>
          <MoneyDetails />
          <div className="transaction-container">
            <form className="transaction-form" onSubmit={this.onAddTransaction}>
              <h1 className="heading">Add Transaction</h1>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="input"
                onChange={this.onChangeTitle}
                value={titleInput}
              />
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="input"
                onChange={this.onChangeAmount}
                value={amountInput}
              />
              <label className="label" htmlFor="select">
                TYPE
              </label>
              <select
                id="select"
                className="input option"
                onChange={this.onChangeOptionId}
                value={optionId}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="heading">History</h1>
              <div className="history-table-container">
                <ul className="history-table">
                  <li className="table-header">
                    <p className="table-header-cell">Title</p>
                    <p className="table-header-cell">Amount</p>
                    <p className="table-header-cell">Type</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
