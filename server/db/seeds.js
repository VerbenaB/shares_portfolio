use shares;
db.dropDatabase();

db.portfolio.insertMany([
    {
        name: "Tesco",
        num_of_shares: 5,
        // initial_share_price: 567.96

    },
    {
        name: "IBM",
        num_of_shares: 7,
        // initial_share_price: 12.30

    }
]);