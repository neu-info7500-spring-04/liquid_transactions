# Liquid Transactions
Features:

Displays the latest transactions from liquid fetched from a specified API endpoint.

Displays transaction IDs, sizes, and fees in a tabular format.

# Installation:

npm install

npm start

# API Endpoint:
https://blockstream.info/liquid/api/mempool/recent

# Sample Output:
    {
        "txid": "ef5a004331363e9a19efee41f44e1daa2a342e92cb446d33db987dd3301b26cd",
        "fee": 162,
        "vsize": 1461
    }

# Dependencies:
The entire output depends on React Hooks for state management and side effects. It also uses the fetch API for fetching data from the specified API endpoint.

# License:
This project is licensed under the MIT License - see the LICENSE file for details.
