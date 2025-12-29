import { Component, OnInit } from '@angular/core';
import { bookInfo, coursesInfo, earningInfo, employeesInfo, productInfo, tasks2Info } from '../../models/cardInterface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
 langs : string[] = ["JavaScript", "Python", "Java", "C#", "C++", "TypeScript", "Go", "Rust", "Swift", "PHP", "Kotlin"];

 items : string[]= ["Milk", "Eggs", "Bread", "Butter", "Coffee", "Rice", "Sugar", "Salt", "Biscuits", "Maggi", "Tea"];

// 

  hobbies:string[]= ["Reading", "Gaming", "Drawing", "Singing", "Dancing", "Swimming", "Cooking", "Cycling", "Photography", "Writing"];

// Show: "1. Reading", "2. Gaming" etc.

languages = ["Hindi", "English", "Marathi", "Gujarati", "Punjabi", "Bengali", "Tamil", "Telugu", "Kannada", "Malayalam"];

// Wrap each item in <strong>


 fruits:string[] = ["Apple", "Banana", "Grapes", "Mango", "Orange", "Pineapple", "Watermelon", "Strawberry", "Kiwi", "Papaya"];

// I eat Apple</li> etc.

 frameworks = [
  { name: "React", url: "https://reactjs.org" },
  { name: "Angular", url: "https://angular.io" },
  { name: "Vue", url: "https://vuejs.org" },
  { name: "Svelte", url: "https://svelte.dev" },
  { name: "Next.js", url: "https://nextjs.org" },
  { name: "Nuxt.js", url: "https://nuxt.com" },
  { name: "Ember", url: "https://emberjs.com" },
  { name: "Backbone", url: "https://backbonejs.org" },
  { name: "Preact", url: "https://preactjs.com" },
  { name: "Meteor", url: "https://www.meteor.com" }
];
tasks :string[]= ["Learn JS", "Build Project", "Practice Daily", "Read Docs", "Watch Tutorials", "Try Challenges", "Learn Node", "Understand APIs", "Test Code", "Write Clean Code"];


 movies = [
  { title: "Inception", rating: 9 },
  { title: "Interstellar", rating: 8.5 },
  { title: "The Dark Knight", rating: 9.2 },
  { title: "Avengers", rating: 8.3 },
  { title: "Iron Man", rating: 7.9 },
  { title: "Joker", rating: 8.4 },
  { title: "Tenet", rating: 7.5 },
  { title: "Dunkirk", rating: 7.8 },
  { title: "Shutter Island", rating: 8.2 },
  { title: "Prestige", rating: 8.5 }
];

// Show: "Inception - Rating: 9"


 employees = [
  { name: "Amit", role: "Developer" },
  { name: "Sneha", role: "Designer" },
  { name: "Raj", role: "Tester" },
  { name: "Pooja", role: "Manager" },
  { name: "Nikhil", role: "Analyst" },
  { name: "Tina", role: "HR" },
  { name: "Ravi", role: "Support" },
  { name: "Kiran", role: "Lead" },
  { name: "Sameer", role: "Architect" },
  { name: "Roshni", role: "Developer" }
];

// Show: "Amit (Developer)" list

colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta"];

// Each <li> should have background of the respective color
 employees2 : employeesInfo[]= [
  { name: "John", dept: "HR", email: "john@abc.com" },
  { name: "Sara", dept: "IT", email: "sara@abc.com" },
  { name: "Amit", dept: "Finance", email: "amit@abc.com" },
  { name: "Pooja", dept: "IT", email: "pooja@abc.com" },
  { name: "Tina", dept: "HR", email: "tina@abc.com" },
  { name: "Ravi", dept: "Sales", email: "ravi@abc.com" },
  { name: "Sneha", dept: "IT", email: "sneha@abc.com" },
  { name: "Nikhil", dept: "Support", email: "nikhil@abc.com" },
  { name: "Simran", dept: "Finance", email: "simran@abc.com" },
  { name: "Karan", dept: "Admin", email: "karan@abc.com" }
];

// Table columns: Sr No, Name, Department, Email

 products :productInfo[]= [
  { title: "Laptop", price: 45000 },
  { title: "Mouse", price: 500 },
  { title: "Keyboard", price: 1000 },
  { title: "Monitor", price: 8000 },
  { title: "Printer", price: 6000 },
  { title: "Scanner", price: 7000 },
  { title: "Pen Drive", price: 700 },
  { title: "Hard Disk", price: 3000 },
  { title: "Webcam", price: 1200 },
  { title: "Headphones", price: 1500 }
];

// Show: Product Name | Price

 books :bookInfo[]= [
  { title: "1984", author: "Orwell", genre: "Dystopian" },
  { title: "The Alchemist", author: "Coelho", genre: "Fiction" },
  { title: "Wings of Fire", author: "Kalam", genre: "Biography" },
  { title: "Sherlock Holmes", author: "Doyle", genre: "Mystery" },
  { title: "Ikigai", author: "Héctor", genre: "Self-help" },
  { title: "Rich Dad Poor Dad", author: "Kiyosaki", genre: "Finance" },
  { title: "Atomic Habits", author: "Clear", genre: "Productivity" },
  { title: "Sapiens", author: "Harari", genre: "History" },
  { title: "Bhagavad Gita", author: "Vyasa", genre: "Spiritual" },
  { title: "Deep Work", author: "Cal Newport", genre: "Focus" }
];

// Table: Sr No, Title, Author, Genre

 earnings :earningInfo[]= [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 15000 },
  { month: "Mar", amount: 14000 },
  { month: "Apr", amount: 16000 },
  { month: "May", amount: 15500 },
  { month: "Jun", amount: 13000 },
  { month: "Jul", amount: 17500 },
  { month: "Aug", amount: 19000 },
  { month: "Sep", amount: 14500 },
  { month: "Oct", amount: 20000 }
];

// Table: Sr No, month , amout and Highlight rows with amount > 13000
 tasks2:tasks2Info[] = [
  { title: "UI Design", status: "Done" },
  { title: "Backend Setup", status: "Pending" },
  { title: "API Integration", status: "Done" },
  { title: "Database", status: "Pending" },
  { title: "Auth Module", status: "Done" },
  { title: "Deployment", status: "Pending" },
  { title: "Testing", status: "Done" },
  { title: "Analytics", status: "Pending" },
  { title: "Bug Fixing", status: "Done" },
  { title: "Optimization", status: "Pending" }
];

// Status column shows text color: green for done, red for pending

 courses: coursesInfo[] = [
  { name: "Angular", duration: "3 months" },
  { name: "React", duration: "2.5 months" },
  { name: "Node.js", duration: "2 months" },
  { name: "MongoDB", duration: "1.5 months" },
  { name: "Express", duration: "1.5 months" },



  
  { name: "TypeScript", duration: "1 month" },
  { name: "Bootstrap", duration: "15 days" },
  { name: "HTML & CSS", duration: "1 month" },
  { name: "Git & GitHub", duration: "15 days" },
  { name: "Jasmine Testing", duration: "1 month" }
];

// Table: Sr No, Course Name, Duration



}
