// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city: string, Country: string = "default country"){
    console.log(`Such as ${city} is in ${Country}`)
}

describe_city('Mumbai', 'India');

describe_city('New York', 'America');

describe_city('Toronto');