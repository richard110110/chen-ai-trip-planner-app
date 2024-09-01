import { 
    GoogleGenerativeAI, 
    HarmCategory, 
    HarmBlockThreshold 
  } from "@google/generative-ai";
  

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  // systemInstruction: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotel options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating. Time travel each of the location for 3 days with each day plan with best time to visit in JSON format",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotel options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating. Time travel each of the location for 3 days with each day plan with best time to visit in JSON format\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotelOptions": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50-$100 per night",\n      "hotelImageUrl": "https://www.theD.com/images/hotel/the-d-hotel-exterior.jpg",\n      "geoCoordinates": "36.1699, -115.1423",\n      "rating": "3.5 stars",\n      "description": "A budget-friendly hotel located in the heart of Fremont Street Experience, offering comfortable rooms and a casino."\n    },\n    {\n      "hotelName": "Golden Nugget Las Vegas",\n      "hotelAddress": "129 E Fremont Street, Las Vegas, NV 89101",\n      "price": "$70-$150 per night",\n      "hotelImageUrl": "https://www.goldennugget.com/las-vegas/media/images/hotel-room.jpg",\n      "geoCoordinates": "36.1696, -115.1422",\n      "rating": "4 stars",\n      "description": "A historic hotel with a modern twist, featuring a vibrant casino, a shark tank, and various dining options."\n    },\n    {\n      "hotelName": "Plaza Hotel & Casino",\n      "hotelAddress": "1 Main Street, Las Vegas, NV 89101",\n      "price": "$60-$120 per night",\n      "hotelImageUrl": "https://www.plazahotelcasino.com/media/images/hero-images/hero-home.jpg",\n      "geoCoordinates": "36.1695, -115.1420",\n      "rating": "3.5 stars",\n      "description": "A centrally located hotel on Fremont Street, offering a variety of amenities, including a casino, restaurants, and a pool."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": "$40-$80 per night",\n      "hotelImageUrl": "https://www.circuscircus.com/media/images/hero-images/hero-home.jpg",\n      "geoCoordinates": "36.1205, -115.1745",\n      "rating": "3 stars",\n      "description": "A budget-friendly hotel known for its circus theme, offering a variety of entertainment options, including a midway."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": "Day 1",\n      "plan": [\n        {\n          "time": "9:00 AM",\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "Walk along the pedestrian-friendly street, enjoy free live music, and marvel at the Viva Vision light show.",\n          "placeImageUrl": "https://www.vegasexperience.com/media/images/gallery/freemont-street-experience-2.jpg",\n          "geoCoordinates": "36.1699, -115.1423",\n          "ticketPricing": "Free",\n          "rating": "4.5 stars"\n        },\n        {\n          "time": "12:00 PM",\n          "placeName": "The D Las Vegas",\n          "placeDetails": "Have a casual lunch at one of the many restaurants in the casino.",\n          "placeImageUrl": "https://www.theD.com/images/hotel/the-d-hotel-exterior.jpg",\n          "geoCoordinates": "36.1699, -115.1423",\n          "ticketPricing": "N/A",\n          "rating": "3.5 stars"\n        },\n        {\n          "time": "2:00 PM",\n          "placeName": "Neon Museum",\n          "placeDetails": "Explore a collection of vintage neon signs, showcasing the history of Las Vegas.",\n          "placeImageUrl": "https://www.neonmuseum.org/images/neon-museum-las-vegas.jpg",\n          "geoCoordinates": "36.1720, -115.1445",\n          "ticketPricing": "$20",\n          "rating": "4.5 stars"\n        },\n        {\n          "time": "6:00 PM",\n          "placeName": "The Golden Steer Steak House",\n          "placeDetails": "Enjoy a classic steak dinner at this iconic Las Vegas restaurant.",\n          "placeImageUrl": "https://www.goldensteer.com/images/restaurant/golden-steer-las-vegas-steak-house.jpg",\n          "geoCoordinates": "36.1387, -115.1646",\n          "ticketPricing": "N/A",\n          "rating": "4 stars"\n        }\n      ]\n    },\n    {\n      "day": "Day 2",\n      "plan": [\n        {\n          "time": "9:00 AM",\n          "placeName": "Red Rock Canyon National Conservation Area",\n          "placeDetails": "Go for a scenic hike or drive through the stunning red rock formations.",\n          "placeImageUrl": "https://www.nps.gov/redr/learn/nature/images/redrockcanyon_highangle.jpg",\n          "geoCoordinates": "36.2337, -115.3177",\n          "ticketPricing": "$15 per vehicle",\n          "rating": "4.5 stars"\n        },\n        {\n          "time": "1:00 PM",\n          "placeName": "In-N-Out Burger",\n          "placeDetails": "Enjoy a classic Californian burger for lunch.",\n          "placeImageUrl": "https://www.in-n-out.com/images/menu/Double-Double-Burger.png",\n          "geoCoordinates": "36.1232, -115.1655",\n          "ticketPricing": "N/A",\n          "rating": "4 stars"\n        },\n        {\n          "time": "3:00 PM",\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "Marvel at the beautiful floral displays and themed gardens.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/bellagio/media/conservatory/Conservatory_Hero_Desktop.jpg",\n          "geoCoordinates": "36.1140, -115.1724",\n          "ticketPricing": "Free",\n          "rating": "4.5 stars"\n        },\n        {\n          "time": "7:00 PM",\n          "placeName": "The LINQ Promenade",\n          "placeDetails": "Have dinner at one of the many restaurants and enjoy the lively atmosphere.",\n          "placeImageUrl": "https://www.caesars.com/content/dam/caesars/casino-hotels/linq/linq-promenade-daytime.jpg",\n          "geoCoordinates": "36.1211, -115.1726",\n          "ticketPricing": "N/A",\n          "rating": "4 stars"\n        }\n      ]\n    },\n    {\n      "day": "Day 3",\n      "plan": [\n        {\n          "time": "10:00 AM",\n          "placeName": "Hoover Dam",\n          "placeDetails": "Take a day trip to the iconic Hoover Dam and learn about its history and engineering marvel.",\n          "placeImageUrl": "https://www.usbr.gov/lc/hooverdam/images/hooverdam_aerial.jpg",\n          "geoCoordinates": "36.0155, -114.9005",\n          "ticketPricing": "$30 per person",\n          "rating": "5 stars"\n        },\n        {\n          "time": "2:00 PM",\n          "placeName": "Seven Magic Mountains",\n          "placeDetails": "Admire the colorful, large-scale art installation in the Nevada desert.",\n          "placeImageUrl": "https://www.visitlasvegas.com/media/images/gallery/seven-magic-mountains.jpg",\n          "geoCoordinates": "36.0955, -115.0711",\n          "ticketPricing": "Free",\n          "rating": "4 stars"\n        },\n        {\n          "time": "6:00 PM",\n          "placeName": "The Strip",\n          "placeDetails": "Walk along the Strip and enjoy the vibrant atmosphere and free shows.",\n          "placeImageUrl": "https://www.visitlasvegas.com/media/images/gallery/las-vegas-strip-at-night.jpg",\n          "geoCoordinates": "36.1143, -115.1721",\n          "ticketPricing": "N/A",\n          "rating": "4.5 stars"\n        }\n      ]\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
