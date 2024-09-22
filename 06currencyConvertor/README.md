## React Currency Convertor

### Project Objective 
The objective of the project is to build a functional currency converter using the latest conversion rate API and following best practices for learning purposes.

### Features
- Select the currency options from the drop down menu.
- Enter the amount that needs to be converted from one currency to another.
- Convert button to initiate the conversion.
- Swap the currencies from `from` label to `to`.

### Technologies
- React + Vite
- Tailwind CSS

### Functions and Hooks

#### Custom Hooks

1. `useCurrencyInfo(currency)`
   - Description: Fetches the latest currency conversion rates for the specified currency.
   - Parameters:
     - `currency` (string): The currency code to fetch rates for.
   - Returns: An object containing the conversion rates for the specified currency.

#### Components and Their Functions

1. `InputBox`
   - Props:
     - `label` (string): Label for the input box ('From' or 'To').
     - `amount` (number): The current amount in the input box.
     - `onAmountChange` (function): Callback for when the amount changes.
     - `onCurrencyChange` (function): Callback for when the selected currency changes.
     - `currencyOptions` (array): List of available currency options.
     - `selectCurrency` (string): Currently selected currency.
     - `amountDisable` (boolean): Whether the amount input should be disabled.
     - `currencyDisable` (boolean): Whether the currency select should be disabled.
   - Description: Renders an input box for entering amounts and selecting currencies.

2. `App`
   - State Hooks:
     - `useState` for managing:
       - `amount`: The amount to be converted.
       - `from`: The currency to convert from.
       - `to`: The currency to convert to.
       - `convertedAmount`: The result of the conversion.
   - Effects:
     - `useEffect` for fetching currency data when the 'from' currency changes.
   - Functions:
     - `swap`: Swaps the 'from' and 'to' currencies.
     - `convert`: Performs the currency conversion.
   - Description: The main component that orchestrates the currency conversion functionality.

### How to Run the Project
1. Clone the repository
2. Navigate to the project directory: `cd 06currencyConvertor`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open your browser and visit `http://localhost:5173` (or the port specified by Vite)

### API Used
This project uses a currency conversion rate API (ExchangeRate-API).



### Contributing
Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

### License
This project is open source and available under the [MIT License](LICENSE).
