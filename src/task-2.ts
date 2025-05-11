type Currency = "USD" | "EUR" | "UAH";

interface Convert {
    amount: number;
    currency: Currency;
}

function convertCurrency({ amount, currency}: Convert): void {
    console.log(`Converting ${amount} to ${currency}`);
}


const lalala: Convert = {
    amount: 5,
    currency: "USD",
}

convertCurrency(lalala);