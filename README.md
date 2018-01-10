//This repo is for logging my progress as I learn Node.js.

let skillsLearnt = {
  'commandLineNotesApp':['API basics- using Yarg, Lodash, OS and FS', 'Basic JSON', 'Tertinary operator and arrow functions'],
  'commandLineWeatherApp':['Callbacks and promises', 'Fetching data from 3rd party APIs using request', 'Parsing data to and from     JSON']
};


//NUMBER OF BROWNIE POINTS COLLECTED!

let Browniepoints=0;
const nodeProjects = Object.keys(skillsLearnt);

for(i=0; i<nodeProjects.length; i++) {
  let projectKey = nodeProjects[i];
  let skillKey = skillsLearnt[projectKey];
  
  for (j=0; j<skillKey.length;j++){
    Browniepoints++
  }
};

console.log(`You have ${Browniepoints} brownie points.`);
