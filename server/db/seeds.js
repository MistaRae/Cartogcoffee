use coffee_facts;
db.dropDatabase();

db.coffees.insertMany([
    {
        region: "Africa",
        country: "Ethiopia",
        number_of_farms: "80",
        production_volume: "18,000,000",
        bean_type: "Arabica",
        taste_profile: "Soily, Floral, Harsh",
        export_volume: "8,000,000",
        lat: "8.885369235305161",
        long: "40.15573480787972" 
    },
    {
        region: "Americas",
        country: "Colombia",
        number_of_farms: "45",
        production_volume: "23,000,000",
        bean_type: "Robusta",
        taste_profile: "Chocolate, Cherry, Smooth",
        export_volume: "16,000,000",
        lat: "3.6892782106631303",
        long: "-73.49870224613231"
    }
]);