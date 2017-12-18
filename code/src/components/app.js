import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      vatRate: 25,
      exVat: 0,
      incVat: 0
    }
  }

  handleIncVat = (event) => {
    this.setState({
      incVat: parseInt(event.target.value, 10),
      exVat: incVatToExtVat(this.state.vatRate, parseInt(event.target.value, 10))
    })
  }

  handleExVat = (event) => {
    this.setState({
      exVat: parseInt(event.target.value, 10),
      incVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value, 10))
    })
  }

  handleVatRate = (event) => {
    this.setState({
      vatRate: parseInt(event.target.value, 10),
      incVat: exVatToIncVat(this.state.vatRate, parseInt(event.target.value, 10)),
      exVat: incVatToExtVat(this.state.vatRate, parseInt(event.target.value, 10))
    })
  }

  render() {
    return (
      <div className="App">
        <form>

          <p>6% moms</p>
          <input
            type="radio"
            name="vatRate"
            value="6"
            onChange={this.handleVatRate} />

          <p>12% moms</p>
          <input
            type="radio"
            name="vatRate"
            onChange={this.handleVatRate}
            value="12" />

          <p>25% moms</p>
          <input
            type="radio"
            name="vatRate"
            value="25"
            onChange={this.handleVatRate} />
        </form>

        <form>
          <p>Summa inkl. moms:</p>
          <input
            type="number"
            name="incVat"
            onChange={this.handleIncVat}
            value={this.state.incVat} />

          <p>Summa exkl. moms:</p>
          <input
            type="number"
            name="exVat"
            onChange={this.handleExVat}
            value={this.state.exVat} />

          <p>Momssumma:</p>
          <input
            type="number"
            name="exVat"
            value={this.state.incVat - this.state.exVat} />
        </form>
      </div>
    )
  }

}

export default App
