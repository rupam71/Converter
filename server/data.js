const tempList = [{ name: "Fahrenheit", id:'fahrenheit' }, { name: "Celsius", id:'celsius' }];
const farToCel = (x) => ( x - 32 ) / 1.8
const calToFar = (x) => x * 1.8 + 32

const currencyList = [
    {
      "name": "US Dollar",
      "code": "USD"
    },
    {
      "name": "Canadian Dollar",
      "code": "CAD"
    },
    {
      "name": "Euro",
      "code": "EUR"
    },
    {
      "name": "United Arab Emirates Dirham",
      "code": "AED"
    },
    {
      "name": "Afghan Afghani",
      "code": "AFN"
    },
    {
      "name": "Albanian Lek",
      "code": "ALL"
    },
    {
      "name": "Armenian Dram",
      "code": "AMD"
    },
    {
      "name": "Argentine Peso",
      "code": "ARS"
    },
    {
      "name": "Australian Dollar",
      "code": "AUD"
    },
    {
      "name": "Azerbaijani Manat",
      "code": "AZN"
    },
    {
      "name": "Bosnia-Herzegovina Convertible Mark",
      "code": "BAM"
    },
    {
      "name": "Bangladeshi Taka",
      "code": "BDT"
    },
    {
      "name": "Bulgarian Lev",
      "code": "BGN"
    },
    {
      "name": "Bahraini Dinar",
      "code": "BHD"
    },
    {
      "name": "Burundian Franc",
      "code": "BIF"
    },
    {
      "name": "Brunei Dollar",
      "code": "BND"
    },
    {
      "name": "Bolivian Boliviano",
      "code": "BOB"
    },
    {
      "name": "Brazilian Real",
      "code": "BRL"
    },
    {
      "name": "Botswanan Pula",
      "code": "BWP"
    },
    {
      "name": "Belarusian Ruble",
      "code": "BYN"
    },
    {
      "name": "Belize Dollar",
      "code": "BZD"
    },
    {
      "name": "Congolese Franc",
      "code": "CDF"
    },
    {
      "name": "Swiss Franc",
      "code": "CHF"
    },
    {
      "name": "Chilean Peso",
      "code": "CLP"
    },
    {
      "name": "Chinese Yuan",
      "code": "CNY"
    },
    {
      "name": "Colombian Peso",
      "code": "COP"
    },
    {
      "name": "Costa Rican Colón",
      "code": "CRC"
    },
    {
      "name": "Cape Verdean Escudo",
      "code": "CVE"
    },
    {
      "name": "Czech Republic Koruna",
      "code": "CZK"
    },
    {
      "name": "Djiboutian Franc",
      "code": "DJF"
    },
    {
      "name": "Danish Krone",
      "code": "DKK"
    },
    {
      "name": "Dominican Peso",
      "code": "DOP"
    },
    {
      "name": "Algerian Dinar",
      "code": "DZD"
    },
    {
      "name": "Estonian Kroon",
      "code": "EEK"
    },
    {
      "name": "Egyptian Pound",
      "code": "EGP"
    },
    {
      "name": "Eritrean Nakfa",
      "code": "ERN"
    },
    {
      "name": "Ethiopian Birr",
      "code": "ETB"
    },
    {
      "name": "British Pound Sterling",
      "code": "GBP"
    },
    {
      "name": "Georgian Lari",
      "code": "GEL"
    },
    {
      "name": "Ghanaian Cedi",
      "code": "GHS"
    },
    {
      "name": "Guinean Franc",
      "code": "GNF"
    },
    {
      "name": "Guatemalan Quetzal",
      "code": "GTQ"
    },
    {
      "name": "Hong Kong Dollar",
      "code": "HKD"
    },
    {
      "name": "Honduran Lempira",
      "code": "HNL"
    },
    {
      "name": "Croatian Kuna",
      "code": "HRK"
    },
    {
      "name": "Hungarian Forint",
      "code": "HUF"
    },
    {
      "name": "Indonesian Rupiah",
      "code": "IDR"
    },
    {
      "name": "Israeli New Sheqel",
      "code": "ILS"
    },
    {
      "name": "Indian Rupee",
      "code": "INR"
    },
    {
      "name": "Iraqi Dinar",
      "code": "IQD"
    },
    {
      "name": "Iranian Rial",
      "code": "IRR"
    },
    {
      "name": "Icelandic Króna",
      "code": "ISK"
    },
    {
      "name": "Jamaican Dollar",
      "code": "JMD"
    },
    {
      "name": "Jordanian Dinar",
      "code": "JOD"
    },
    {
      "name": "Japanese Yen",
      "code": "JPY"
    },
    {
      "name": "Kenyan Shilling",
      "code": "KES"
    },
    {
      "name": "Cambodian Riel",
      "code": "KHR"
    },
    {
      "name": "Comorian Franc",
      "code": "KMF"
    },
    {
      "name": "South Korean Won",
      "code": "KRW"
    },
    {
      "name": "Kuwaiti Dinar",
      "code": "KWD"
    },
    {
      "name": "Kazakhstani Tenge",
      "code": "KZT"
    },
    {
      "name": "Lebanese Pound",
      "code": "LBP"
    },
    {
      "name": "Sri Lankan Rupee",
      "code": "LKR"
    },
    {
      "name": "Lithuanian Litas",
      "code": "LTL"
    },
    {
      "name": "Latvian Lats",
      "code": "LVL"
    },
    {
      "name": "Libyan Dinar",
      "code": "LYD"
    },
    {
      "name": "Moroccan Dirham",
      "code": "MAD"
    },
    {
      "name": "Moldovan Leu",
      "code": "MDL"
    },
    {
      "name": "Malagasy Ariary",
      "code": "MGA"
    },
    {
      "name": "Macedonian Denar",
      "code": "MKD"
    },
    {
      "name": "Myanma Kyat",
      "code": "MMK"
    },
    {
      "name": "Macanese Pataca",
      "code": "MOP"
    },
    {
      "name": "Mauritian Rupee",
      "code": "MUR"
    },
    {
      "name": "Mexican Peso",
      "code": "MXN"
    },
    {
      "name": "Malaysian Ringgit",
      "code": "MYR"
    },
    {
      "name": "Mozambican Metical",
      "code": "MZN"
    },
    {
      "name": "Namibian Dollar",
      "code": "NAD"
    },
    {
      "name": "Nigerian Naira",
      "code": "NGN"
    },
    {
      "name": "Nicaraguan Córdoba",
      "code": "NIO"
    },
    {
      "name": "Norwegian Krone",
      "code": "NOK"
    },
    {
      "name": "Nepalese Rupee",
      "code": "NPR"
    },
    {
      "name": "New Zealand Dollar",
      "code": "NZD"
    },
    {
      "name": "Omani Rial",
      "code": "OMR"
    },
    {
      "name": "Panamanian Balboa",
      "code": "PAB"
    },
    {
      "name": "Peruvian Nuevo Sol",
      "code": "PEN"
    },
    {
      "name": "Philippine Peso",
      "code": "PHP"
    },
    {
      "name": "Pakistani Rupee",
      "code": "PKR"
    },
    {
      "name": "Polish Zloty",
      "code": "PLN"
    },
    {
      "name": "Paraguayan Guarani",
      "code": "PYG"
    },
    {
      "name": "Qatari Rial",
      "code": "QAR"
    },
    {
      "name": "Romanian Leu",
      "code": "RON"
    },
    {
      "name": "Serbian Dinar",
      "code": "RSD"
    },
    {
      "name": "Russian Ruble",
      "code": "RUB"
    },
    {
      "name": "Rwandan Franc",
      "code": "RWF"
    },
    {
      "name": "Saudi Riyal",
      "code": "SAR"
    },
    {
      "name": "Sudanese Pound",
      "code": "SDG"
    },
    {
      "name": "Swedish Krona",
      "code": "SEK"
    },
    {
      "name": "Singapore Dollar",
      "code": "SGD"
    },
    {
      "name": "Somali Shilling",
      "code": "SOS"
    },
    {
      "name": "Syrian Pound",
      "code": "SYP"
    },
    {
      "name": "Thai Baht",
      "code": "THB"
    },
    {
      "name": "Tunisian Dinar",
      "code": "TND"
    },
    {
      "name": "Tongan Paʻanga",
      "code": "TOP"
    },
    {
      "name": "Turkish Lira",
      "code": "TRY"
    },
    {
      "name": "Trinidad and Tobago Dollar",
      "code": "TTD"
    },
    {
      "name": "New Taiwan Dollar",
      "code": "TWD"
    },
    {
      "name": "Tanzanian Shilling",
      "code": "TZS"
    },
    {
      "name": "Ukrainian Hryvnia",
      "code": "UAH"
    },
    {
      "name": "Ugandan Shilling",
      "code": "UGX"
    },
    {
      "name": "Uruguayan Peso",
      "code": "UYU"
    },
    {
      "name": "Uzbekistan Som",
      "code": "UZS"
    },
    {
      "name": "Venezuelan Bolívar",
      "code": "VEF"
    },
    {
      "name": "Vietnamese Dong",
      "code": "VND"
    },
    {
      "name": "CFA Franc BEAC",
      "code": "XAF"
    },
    {
      "name": "CFA Franc BCEAO",
      "code": "XOF"
    },
    {
      "name": "Yemeni Rial",
      "code": "YER"
    },
    {
      "name": "South African Rand",
      "code": "ZAR"
    },
    {
      "name": "Zambian Kwacha",
      "code": "ZMK"
    },
    {
      "name": "Zimbabwean Dollar",
      "code": "ZWL"
    }
  ]


module.exports = {tempList,farToCel,calToFar,currencyList}