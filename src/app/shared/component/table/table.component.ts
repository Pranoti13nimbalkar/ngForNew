import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {

 planets = [
  { planetName: "Mercury", distanceFromSunKm: 57910000, diameterKm: 4879, hasRings: false, numberOfMoons: 0 },
  { planetName: "Venus", distanceFromSunKm: 108200000, diameterKm: 12104, hasRings: false, numberOfMoons: 0 },
  { planetName: "Earth", distanceFromSunKm: 149600000, diameterKm: 12742, hasRings: false, numberOfMoons: 1 },
  { planetName: "Mars", distanceFromSunKm: 227900000, diameterKm: 6779, hasRings: false, numberOfMoons: 2 },
  { planetName: "Jupiter", distanceFromSunKm: 778500000, diameterKm: 139820, hasRings: true, numberOfMoons: 79 }
];



 mountains = [
  { mountainName: "Everest", heightMeters: 8848, locationContinent: "Asia", firstAscentYear: 1953, isVolcano: false },
  { mountainName: "K2", heightMeters: 8611, locationContinent: "Asia", firstAscentYear: 1954, isVolcano: false },
  { mountainName: "Kangchenjunga", heightMeters: 8586, locationContinent: "Asia", firstAscentYear: 1955, isVolcano: false },
  { mountainName: "Matterhorn", heightMeters: 4478, locationContinent: "Europe", firstAscentYear: 1865, isVolcano: false },
  { mountainName: "Mount Fuji", heightMeters: 3776, locationContinent: "Asia", firstAscentYear: null, isVolcano: true }
];


 universities = [
  { uniName: "Harvard University", foundedYear: 1636, countryLocated: "USA", studentCount: 21000, worldRanking: 1 },
  { uniName: "University of Oxford", foundedYear: 1096, countryLocated: "UK", studentCount: 24000, worldRanking: 2 },
  { uniName: "Stanford University", foundedYear: 1885, countryLocated: "USA", studentCount: 17000, worldRanking: 3 },
  { uniName: "University of Cambridge", foundedYear: 1209, countryLocated: "UK", studentCount: 19000, worldRanking: 4 },
  { uniName: "MIT", foundedYear: 1861, countryLocated: "USA", studentCount: 11500, worldRanking: 5 }
];


 animals = [
  { species: "African Elephant", averageWeightKg: 6000, habitatType: "Savannah", lifespanYears: 70, endangeredStatus: "Vulnerable" },
  { species: "Bald Eagle", averageWeightKg: 6.3, habitatType: "Forests", lifespanYears: 20, endangeredStatus: "Least Concern" },
  { species: "Giant Panda", averageWeightKg: 100, habitatType: "Bamboo Forests", lifespanYears: 20, endangeredStatus: "Vulnerable" },
  { species: "Blue Whale", averageWeightKg: 150000, habitatType: "Ocean", lifespanYears: 90, endangeredStatus: "Endangered" },
  { species: "Komodo Dragon", averageWeightKg: 70, habitatType: "Tropical Islands", lifespanYears: 30, endangeredStatus: "Vulnerable" }
];


 apps = [
  { appName: "WhatsApp", categoryType: "Messaging", downloadsMillion: 5000, developerCompany: "Meta", subscriptionRequired: false },
  { appName: "Spotify", categoryType: "Music Streaming", downloadsMillion: 1000, developerCompany: "Spotify AB", subscriptionRequired: true },
  { appName: "Zoom", categoryType: "Video Conferencing", downloadsMillion: 1000, developerCompany: "Zoom Video Communications", subscriptionRequired: false },
  { appName: "Uber", categoryType: "Ride Hailing", downloadsMillion: 500, developerCompany: "Uber Technologies", subscriptionRequired: false },
  { appName: "Canva", categoryType: "Design", downloadsMillion: 100, developerCompany: "Canva Pty Ltd", subscriptionRequired: true }
];

// // 9. continents
 continents = [
   { continentLabel: "Asia", surfaceAreaMillionSqKm: 44.58, countriesCount: 49, populationBillion: 4.75, largestCountry: "Russia" },
   { continentLabel: "Africa", surfaceAreaMillionSqKm: 30.37, countriesCount: 54, populationBillion: 1.4, largestCountry: "Algeria" },
   { continentLabel: "North America", surfaceAreaMillionSqKm: 24.71, countriesCount: 23, populationBillion: 0.6, largestCountry: "Canada" },
   { continentLabel: "South America", surfaceAreaMillionSqKm: 17.84, countriesCount: 12, populationBillion: 0.44, largestCountry: "Brazil" },
   { continentLabel: "Europe", surfaceAreaMillionSqKm: 10.18, countriesCount: 44, populationBillion: 0.75, largestCountry: "Russia" }
 ];

// 10. desserts
desserts = [
  { dessertName: "Chocolate Cake", sugarContentGrams: 80, servingTemp: "Room Temperature", mainIngredient: "Cocoa", calorieCount: 400 },
  { dessertName: "Ice Cream Sundae", sugarContentGrams: 60, servingTemp: "Cold", mainIngredient: "Milk", calorieCount: 300 },
  { dessertName: "Apple Pie", sugarContentGrams: 50, servingTemp: "Warm", mainIngredient: "Apples", calorieCount: 350 },
  { dessertName: "Cheesecake", sugarContentGrams: 65, servingTemp: "Cold", mainIngredient: "Cheese", calorieCount: 450 },
  { dessertName: "Baklava", sugarContentGrams: 70, servingTemp: "Room Temperature", mainIngredient: "Honey", calorieCount: 500 }
]
}

