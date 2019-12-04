// Find the FULL code here:
// https://github.com/GavBaros/react-loan-calculator

class Calculator extends React.Component {
  state = {
    amountValue: 5000,
    yearsValue: 1,
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value });
  };

  render() {
    let { amountValue, yearsValue } = this.state;

    return (
      <div className="App">
        <h4>I want to bet ${amountValue}</h4>
        <InputRange step={100} maxValue={20000} minValue={1000} value={amountValue} onChange={this.handleAmountChange} />
        <h4>
          Over {yearsValue} year{yearsValue > 1 && 's'}
        </h4>
        <InputRange step={0.5} maxValue={5} minValue={1} value={yearsValue} onChange={this.handleYearChange} />
        <Display years={yearsValue} amount={amountValue} />
      </div>
    );
  }
}

class Display extends React.Component {
  state = {
    APR: 0.05,
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR();
    }
  }

  calculateAPR = () => {
    let { amount } = this.props;

    if (1000 < amount && amount < 5000) {
      this.setState({ APR: 0.05 });
    }
    if (5000 < amount && amount < 10000) {
      this.setState({ APR: 0.1 });
    }
    if (10000 < amount && amount < 15000) {
      this.setState({ APR: 0.15 });
    }
    if (15000 < amount && amount < 20000) {
      this.setState({ APR: 0.2 });
    }
  };

  calculateMonthlyRepayment = () => {
    let { amount, years } = this.props;
    let decimalFormat = this.state.APR + 1;
    let totalOwed = decimalFormat * amount;
    let monthlyRepayment = totalOwed / (years * 12);

    return <p>${Math.round(monthlyRepayment)}</p>;
  };

  percentageAPR = () => {
    return <p>{this.state.APR * 100}%</p>;
  };

  render() {
    return (
      <div className="flex">
        <DisplayChild func={this.percentageAPR()} text="interest rate" />
        <DisplayChild func={this.calculateMonthlyRepayment()} text=" monthly repayment" />
      </div>
    );
  }
}

const DisplayChild = ({ func, text }) => {
  return (
    <span>
      {func} <small>{text}</small>
    </span>
  );
};

const App = () => {
  return (
    <div>
      <Calculator />
      <Calculator />
    </div>
  );
};

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));
