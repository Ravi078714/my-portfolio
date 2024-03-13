export const projects = [
  {
    title: "Pathfinder Visualisation Tool",
    subtitle: "Python and A* search algorithm ",
    description:
      "Developed a path visualisation tool, using Pygame module and A* search algorithm to find the path with minimum cost (the shortest path). The starting point, end point and obstacles are defined by the user. The pathfinder then searches for the shortest path between the start and end point while avoiding the obstacles. It uses two functions one is heuristic function {h(n)}and the other {g(n)}, which stores the cost to reach from start node to the node we are currently looking at.",
    image : require("./Images/pathpic.png"),
    link: "https://github.com/Ravi078714/Pathfinder.git",
  },
  {
      title: "Game of life",
      subtitle: "Python and traversing algorithms",
      description: "In late 1940, John von Neumann defined life as a creation (as a being or organism) which can reproduce itself and simulate a Turing machine. As we observe life of elements some amazing patterns are formed. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. Still lifes, oscillators and spaceships are some examples of it.",
      image : require("./Images/gamelife.png"),
      link: "https://github.com/Ravi078714/python/blob/6b225118453aee19c9d7905b9e27ceaa852e4daf/Game_of_life_toad.py",
  },
  {
      title: "My Budget Planner",
      subtitle: "Expense Tracking ",
      description: "In this project I learned how to break down UI into React components, how to work with state using Context Api, actions, reducers and the Dispatch function.",
      image : require("./Images/Expense.png"),
      link: "https://github.com/Ravi078714/Budget-Planner",

  },
  {
    title: "Covid Tracker",
    subtitle: "Live Covid Stats Around the World ",
    description: "It uses an API to fetch current covid data across the world and displays it on the front-end using chart libraries/modules to display the data in a more readable format.",
    image : require("./Images/covid.png"),
    link: "https://github.com/Ravi078714/covidT",
},

  
];


export const skills = [
  {skill: "Python"},
  {skill: "C++"},
  {skill: "React"},
  {skill: "HTML"},
  {skill: "CSS"},
  {skill: "Selenium"},
  {skill: "Node.js"},
  {skill: "Express"},
  {skill: "Java"},
  {skill: "AWS"},
  {skill: "Terraform"},
  {skill: "PostMan"},
  {skill: "Git"},
  {skill: "JavaScript"},
  {skill: "TypeScript"},
  {skill: "MySQL"},
  {skill: "Django"},
  {skill: "OOPS"},
  {skill: "DSA"},
  {skill: "Grafana"},
  {skill: "Terraform"}
]
