use coffee_facts;
db.dropDatabase();

db.coffees.insertMany([
    {
        region: "Africa",
        country: "Burundi",
        number_of_farms: "14",
        production_volume: "420,000",
        bean_type: "Arabica",
        taste_profile: "Complex, Berries, Juicy",
        export_volume: "351,000 60kg bags",
        lat: "-3.3153364990452148",
        long: "29.90861957595555",
        farm_info: [{
            bean_variety: "Bourbon, Jackson, Mibirzi",
            harvest_period: "March - July",
            harvest_regions: "Ngozi Province",
            farm_lat: "-2.878723907934651",
            farm_long: "29.919791793157742"
        },
        {
            bean_variety: "Bourbon, Jackson, Mibirzi",
            harvest_period: "March - July",
            harvest_regions: "Kayanza Province",
            farm_lat: "-2.9243719968427206",
            farm_long: "29.624138117890137"
        }] 
    },
    {
        region: "Africa",
        country: "Democratic Republic of the Congo",
        number_of_farms: "11",
        production_volume: "400,000",
        bean_type: "Robusta & Arabica",
        taste_profile: "Full-bodied, Fruity, Sweet",
        export_volume: "335,000 60kg bags",
        lat: "-2.7771225722426878",
        long: "23.361105261250994"
    },
    {
        region: "Africa",
        country: "Ethiopia",
        number_of_farms: "9",
        production_volume: "7,500,000",
        bean_type: "Arabica",
        taste_profile: "Complex, Citrus, Floral",
        export_volume: "6,600,000 60kg bags",
        lat: "3.6892782106631303",
        long: "-73.49870224613231"
    },
    {
        region: "Africa",
        country: "Kenya",
        number_of_farms: "7",
        production_volume: "900,000",
        bean_type: "Arabica",
        taste_profile: "Bright, Fruity, Acidic",
        export_volume: "783,000 60kg bags",
        lat: "0.5496074930576166",
        long: "38.09205686621277",
        farm_info: [{
            bean_variety: "Ruiru, Batian, Kent",
            harvest_period: "March – July",
            harvest_regions: "Nyeri",
            farm_lat: "-0.4001158471389174",
            farm_long: "36.953814258432494"
        },
        {
            bean_variety: "Ruiru, Batian, Kent",
            harvest_period: "March – July",
            harvest_regions: "Kiambu",
            farm_lat: "-1.1251080029711478",
            farm_long: "36.81726956469809"
        }]
    },
    {
        region: "Africa",
        country: "Malawi",
        number_of_farms: "5",
        production_volume: "23,000",
        bean_type: "Robusta",
        taste_profile: "Clean, Subtle Fruits, Sweet",
        export_volume: "18,000 60kg bags",
        lat: "3.6892782106631303",
        long: "-73.49870224613231"
    },
    {
        region: "Africa",
        country: "Rwanda",
        number_of_farms: "8",
        production_volume: "300,000",
        bean_type: "Arabica",
        taste_profile: "Fresh, Fruity",
        export_volume: "220,000 60kg bags",
        lat: "-2.0039524247242557",
        long: "29.913239424035705"
    },
    {
        region: "Africa",
        country: "United Republic of Tanzania",
        number_of_farms: "9",
        production_volume: "1,000,000",
        bean_type: "Arabica",
        taste_profile: "Bright, Berries, Complex",
        export_volume: "870,000 60kg bags",
        lat: "-6.484360704330531",
        long: "34.99812028433937"
    },
    {
        region: "Africa",
        country: "Uganda",
        number_of_farms: "8",
        production_volume: "7,000,000",
        bean_type: "Arabica",
        taste_profile: "Clean, Dark Fruits, Sweet",
        export_volume: "4,900,000 60kg bags",
        lat: "3.6892782106631303",
        long: "-73.49870224613231"
    },
    {
        region: "Africa",
        country: "Zambia",
        number_of_farms: "3",
        production_volume: "5,000",
        bean_type: "Robusta",
        taste_profile: "Bright, Floral, Clean",
        export_volume: "2,000 60kg bags",
        lat: "-13.464843258915668",
        long: " 27.665493473402282"
    },
    {
        region: "Asia",
        country: "China",
        number_of_farms: "20",
        production_volume: "3,000,000",
        bean_type: "Arabica",
        taste_profile: "Woody, Fruity, Low-Acidic",
        export_volume: "2,200,000 60kg bags",
        lat: "3.6892782106631303",
        long: "-73.49870224613231"
    },
    {
        region: "Asia",
        country: "India",
        number_of_farms: "9",
        production_volume: "7,000,000",
        bean_type: "Robusta",
        taste_profile: "Creamy, Heavy, Low-Acidic",
        export_volume: "5,333,000 60kg bags",
        lat: "22.871938775218965",
        long: "79.52857464930946"
    },
    {
        region: "Asia",
        country: "Indonesia",
        number_of_farms: "23",
        production_volume: "13,000,000",
        bean_type: "Robusta",
        taste_profile: "Earthy, Spicy, Heavy",
        export_volume: "11,491,000 60kg bags",
        lat: "-4.250710151859882",
        long: "122.42910756028397"
    },
    {
        region: "Asia",
        country: "Papa New Guinea",
        number_of_farms: "9",
        production_volume: "1,300,000",
        bean_type: "Robusta",
        taste_profile: "Buttery, Sweet, Complex",
        export_volume: "1,171,000 60kg bags",
        lat: "-6.263585848675199",
        long: "144.48965260614656"
    },
    {
        region: "Asia",
        country: "Philippines",
        number_of_farms: "25",
        production_volume: "250,000",
        bean_type: "Robusta",
        taste_profile: "Full-bodied, Light Florals, Low-Acidic",
        export_volume: "200,000 60kg bags",
        lat: "12.350588523376205",
        long: "123.2674486988937"
    },
    {
        region: "Asia",
        country: "Thailand",
        number_of_farms: "12",
        production_volume: "1,000,000",
        bean_type: "Robusta",
        taste_profile: "Clean, Chocolate/Spice, Low-Acidic",
        export_volume: "664,000 60kg bags",
        lat: "15.343605698545852",
        long: "101.03732946749474"
    },
    {
        region: "Asia",
        country: "Vietnam",
        number_of_farms: "30",
        production_volume: "30,000,000",
        bean_type: "Robusta",
        taste_profile: "Flat, Woody, Lacks Character",
        export_volume: "26,700,000 60kg bags",
        lat: "14.473061152085139",
        long: "108.24436011992793"
    },
    {
        region: "Asia",
        country: "Yemen",
        number_of_farms: "15",
        production_volume: "200,000",
        bean_type: "Robusta",
        taste_profile: "Wild, Pungent, Complex",
        export_volume: "125,000 60kg bags",
        lat: "15.861352577643292",
        long: "47.43424176791278"
    },
    {
        region: "Americas",
        country: "Bolivia",
        number_of_farms: "5",
        production_volume: "120,000",
        bean_type: "Robusta",
        taste_profile: "Very Sweet, Very Clean",
        export_volume: "81,000 60kg bags",
        lat: "-16.762940729634494",
        long: "-64.39672193098544"
    },
    {
        region: "Americas",
        country: "Brazil",
        number_of_farms: "17",
        production_volume: "75,000,000",
        bean_type: "Arabica",
        taste_profile: "Heavy-bodied, Chocolate/Nut, Low-Acidic",
        export_volume: "55,000,000 60kg bags",
        lat: "-8.706404101001437",
        long: "-54.797289692838966"
    },
    {
        region: "Americas",
        country: "Colombia",
        number_of_farms: "23",
        production_volume: "20,000,000",
        bean_type: "Robusta",
        taste_profile: "Chocolate, Jammy, Sweet",
        export_volume: "14,232,000 60kg bags",
        lat: "3.386827325291564",
        long: "-73.43010064791014"
    },
    {
        region: "Americas",
        country: "Costa Rica",
        number_of_farms: "12",
        production_volume: "2,000,000",
        bean_type: "Robusta",
        taste_profile: "Sweet, Light-bodied, Clean",
        export_volume: "1,486,000 60kg bags",
        lat: "10.35691199461996",
        long: "-84.09744059648081"
    },
    {
        region: "Americas",
        country: "Cuba",
        number_of_farms: "5",
        production_volume: "120,000",
        bean_type: "Robusta",
        taste_profile: "Heavy-bodied, Low-Acidic",
        export_volume: "100,000 60kg bags",
        lat: "21.639069487995698",
        long: "-78.80582482755595"
    },
    {
        region: "Americas",
        country: "Dominican Republic",
        number_of_farms: "8",
        production_volume: "500,000",
        bean_type: "Robusta",
        taste_profile: "Mild, Clean, Low-Acidic",
        export_volume: "400,000 60kg bags",
        lat: "18.910994483988063",
        long: "-70.19110438238667"
    },
    {
        region: "Americas",
        country: "Ecuador",
        number_of_farms: "5",
        production_volume: "900,000",
        bean_type: "Robusta",
        taste_profile: "Sweet, Complex, Pleasant-Acidic",
        export_volume: "600,000 60kg bags",
        lat: "-1.5181777416780116",
        long: "-78.30285716604827"
    },
    {
        region: "Americas",
        country: "El Salvador",
        number_of_farms: "11",
        production_volume: "1,000,000",
        bean_type: "Robusta",
        taste_profile: "Sweet, Balanced, Soft-Acidic",
        export_volume: "623,000 60kg bags",
        lat: "13.709464011218802",
        long: "-88.6479432160325"
    },
    {
        region: "Americas",
        country: "Guatemala",
        number_of_farms: "12",
        production_volume: "5,000,000",
        bean_type: "Robusta",
        taste_profile: "Light, Very Sweet, Complex",
        export_volume: "3,500,000 60kg bags",
        lat: "15.686159878416388",
        long: "-90.32674908751716"
    },
    {
        region: "Americas",
        country: "Haiti",
        number_of_farms: "5",
        production_volume: "700,000",
        bean_type: "Robusta",
        taste_profile: "Full-bodied, Earthy, Little-Acidic",
        export_volume: "350,000 60kg bags",
        lat: "3.6892782106631303",
        long: "-73.49870224613231"
    },
    {
        region: "Americas",
        country: "Hawaii",
        number_of_farms: "11",
        production_volume: "90,000",
        bean_type: "Robusta",
        taste_profile: "Mid-bodied, Low-Acidic",
        export_volume: "40,909 60kg bags",
        lat: "19.547778326483122",
        long: "-155.640653296222"
    },
    {
        region: "Americas",
        country: "Honduras",
        number_of_farms: "12",
        production_volume: "8,000,000",
        bean_type: "Robusta",
        taste_profile: "Fruity, Lively, Acidic",
        export_volume: "5,934,000 60kg bags",
        lat: "14.841811143837116",
        long: "-87.04703884461142"
    },
    {
        region: "Americas",
        country: "Jamaica",
        number_of_farms: "3",
        production_volume: "80,000",
        bean_type: "Robusta",
        taste_profile: "Clean, Sweet, Juicy",
        export_volume: "27,000 60kg bags",
        lat: "18.147414770655722",
        long: "-77.3042083333355"
    },
    {
        region: "Americas",
        country: "Mexico",
        number_of_farms: "10",
        production_volume: "5,000,000",
        bean_type: "Robusta",
        taste_profile: "Light-bodied, Delicate, Caramel",
        export_volume: "3,100,000 60kg bags",
        lat: "23.817734435506384",
        long: "-102.41268650866029"
    },
    {
        region: "Americas",
        country: "Nicaragua",
        number_of_farms: "7",
        production_volume: "2,000,000",
        bean_type: "Robusta",
        taste_profile: "Complex, Fruity, Clean-Acidic",
        export_volume: "1,500,000 60kg bags",
        lat: "12.8248945729852",
        long: "-85.01034291533938"
    },
    {
        region: "Americas",
        country: "Panama",
        number_of_farms: "6",
        production_volume: "300,000",
        bean_type: "Robusta",
        taste_profile: "Citrusy, Light-bodied, Complex",
        export_volume: "115,000 60kg bags",
        lat: "8.566969027940486",
        long: "-80.09727977139507"
    },
    {
        region: "Americas",
        country: "Peru",
        number_of_farms: "14",
        production_volume: "5,000,000",
        bean_type: "Robusta",
        taste_profile: "Sweet, Heavy-bodied, Clean",
        export_volume: "3,800,000 60kg bags",
        lat: "3.6892782106631303",
        long: "-73.49870224613231"
    },
    {
        region: "Americas",
        country: "Venezuela",
        number_of_farms: "5",
        production_volume: "1,000,000",
        bean_type: "Robusta",
        taste_profile: "Sweet, Rich, Low-Acidic",
        export_volume: "400,000 60kg bags",
        lat: "7.094946610980019",
        long: "-66.25506276936846"
    }
]);