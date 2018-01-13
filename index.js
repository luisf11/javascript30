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
  }
  
];
// 07 - Array Cardio Day 2
const card = `
           ${challenges
             .map(
               challenge => ` 
           <div class="card">
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
                `
             )
             .join("")}
`;

document.querySelector(".main-container").innerHTML = card;
