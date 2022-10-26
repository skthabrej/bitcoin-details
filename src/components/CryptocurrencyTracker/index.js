import { Component } from "react";
import {ThreeDots} from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {

state = {cryptoCurrenciesData: [], isLoading: false}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogoUrl: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({cryptoCurrenciesData: updatedData, isLoading: true})
  }

  renderCryptocurrenciesList = () => {
    const {cryptoCurrenciesData} = this.state
    return <CryptocurrenciesList cryptoData={cryptoCurrenciesData} />
  }

    render() {
        const {isLoading} = this.state
        return (
            <div className="app-container">
                {isLoading ? (this.renderCryptocurrenciesList()) : 
                <div className="loader" testid='loader'>
                    <ThreeDots type="Circles" color="#00BFFF" height={80} width={80} />
                </div>
                }
            </div>
        )
    }
}
export default CryptocurrencyTracker