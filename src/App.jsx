import { useState } from "react";
import "./App.css";
import { Input } from "./component";
import useCurrencyInfo from "./assets/hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(0);
  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);
  console.log(options);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount);
  };
  const convert = () => {
    setConvertAmount(amount * CurrencyInfo[to]);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VycmVuY3klMjBleGNoYW5nZXxlbnwwfHwwfHx8MA%3D%3D")`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1 ">
                <Input
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => {
                    setAmount(amount);
                  }}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <Input
                  label="to"
                  amount={convertAmount}
                  currencyOptions={options}
                  selectCurrency={to}
                  onCurrencyChange={(currency) => {
                    setTo(currency);
                  }}
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600  text-white  px-4 py-3 rounded-lg" onClick={convert}
              >
                {" "}
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
