"use strict";

const challenges = [
  {
    name: " 01 - JavaScript Drum Kit",
    path: "./01 - JavaScript Drum Kit/index.html"
  },
  { name: " 02 - JS and CSS Clock", path: "./02 - JS and CSS Clock/index.html" },
  { name: " 03 - CSS Variables", path: "./03 - CSS Variables/index.html" },
  { name: " 04 - Array Cardio Day 1", path: "./04 - Array Cardio Day 1/index.html" }
];

const card = `
           ${challenges.map(challenge => ` 
                <div class="card">
                    <div class="container">
                        <h4>
                            <a href="${challenge.path}"><b>${challenge.name}</b></a>
                        </h4>
                    </div>
                </div>
                `).join('')}
`;

document.querySelector('.main-container').innerHTML = card;

