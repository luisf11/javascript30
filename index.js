// "use strict";

const challenges = [
  {
    id: '01',
    name: "JavaScript Drum Kit",
    path: "./01 - JavaScript Drum Kit/index.html"
  },
  {
    id: '02',
    name: "JS and CSS Clock",
    path: "./02 - JS and CSS Clock/index.html"
  },
  { id: '03', name: "CSS Variables", path: "./03 - CSS Variables/index.html" },
  {
    id: '04',
    name: "Array Cardio Day 1",
    path: "./04 - Array Cardio Day 1/index.html"
  },
  {
    id: '05',
    name: "Flex Panel Gallery",
    path: "./05 - Flex Panel Gallery/index.html"
  },
  {
    id: '06',
    name: "Type Ahead",
    path: "./06 - Type Ahead/index.html"
  },
  {
    id: '07',
    name: "Array Cardio Day 2",
    path: "./07 - Array Cardio Day 2/index.html"
  },
  {
    id: '08',
    name: "Fun with HTML5 Canvas",
    path: "./08 - Fun with HTML5 Canvas/index.html"
  },
  {
    id: '09',
    name: "Dev Tools Domination",
    path: "./09 - Dev Tools Domination/index.html"
  },
  {
    id: '10',
    name: "Hold Shift and Check Checkboxes",
    path: "./10 - Hold Shift and Check Checkboxes/index.html"
  },
  {
    id: '11',
    name: "Custom Video Player",
    path: "./11 - Custom Video Player/index.html"
  },
  {
    id: '12',
    name: "Key Sequence Detection",
    path: "./12 - Key Sequence Detection/index.html"
  },
  {
    id: '13',
    name: "Slide in on Scroll",
    path: "./13 - Slide in on Scroll/index.html"
  },
  {
    id: '14',
    name: "JavaScript References VS Copying",
    path: "./14 - JavaScript References VS Copying/index.html"
  },
  {
    id: '15',
    name: "LocalStorage",
    path: "./15 - LocalStorage/index.html"
  },
  {
    id: '16',
    name: "Mouse Move Shadow",
    path: "./16 - Mouse Move Shadow/index.html"
  },
  {
    id: '17',
    name: "Sort Without Articles",
    path: "./17 - Sort Without Articles/index.html"
  },
  {
    id: '18',
    name: "Adding Up Times with Reduce",
    path: "./18 - Adding Up Times with Reduce/index.html"
  },
  {
    id: '19',
    name: "Webcam Fun",
    path: "19 - Webcam Fun/index.html"
  },
  {
    id: '20',
    name: "Speech Detection",
    path: "20 - Speech Detection/index.html"
  },
  {
    id: '21',
    name: "Geolocation",
    path: "21 - Geolocation/index.html"
  },
  {
    id: '22',
    name: "Follow Along Link Highlighter",
    path: "22 - Follow Along Link Highlighter/index.html"
  },
  {
    id: '24',
    name: "Sticky Nav",
    path: "24 - Sticky Nav/index.html"
  },
  {
    id: '25',
    name: "Event Capture, Propagation, Bubbling and Once",
    path: "25 - Event Capture, Propagation, Bubbling and Once/index.html"
  },
  {
    id: '26',
    name: "Stripe Follow Along Nav",
    path: "26 - Stripe Follow Along Nav/index.html"
  },
  {
    id: '27',
    name: "Click and Drag",
    path: "27 - Click and Drag/index.html"
  },
  {
    id: '28',
    name: "Video Speed Controller",
    path: "28 - Video Speed Controller/index.html"
  },
  {
    id: '29',
    name: "Countdown Timer",
    path: "29 - Countdown Timer/index.html"
  },
  {
    id: '30',
    name: "Whack A Mole",
    path: "30 - Whack A Mole/index.html"
  }
];

const colorsArray = [
  "#ffffff", 
  "#000000",
]

const card =
challenges
.map(challenge => 
  `<div class="card">
    <a href="${challenge.path}" class="card-container">
      <div class="card-day">
        <b>Day</b>
        <p>${challenge.id}</p> 
      </div>
      <div class="card-body">
          <h4>
              <b>${challenge.name}</b>
          </h4>
      </div>
    </a>
  </div>
`)
.join("");


document.querySelector(".main-container").innerHTML = card;
