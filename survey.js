const readline = require('readline');



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr =[];

const question1 = () => {
  return new Promise((resolve, reject) => {

    rl.question('What is your name? ', (answer) => {
      
      arr.push(answer);
     resolve();
   })
   })
}
const question2 = () => {
  return new Promise((resolve, reject) => {

    rl.question('What Activity you like doing ? ', (answer) => {

      arr.push(" when doing "+answer);
     resolve();
   })
  })
}
const question3 = () => {
  return new Promise((resolve, reject) => {

    rl.question('What do you listen to while doing your favourite activity ? ', (answer) => {

      arr.push(" listens "+ answer);
     resolve();
   })
  })
}
const question4 = () => {
  return new Promise((resolve, reject) => {

    rl.question('Which meal is your favourite ? ', (answer) => {

      arr.push(", like eating "+ answer);
     resolve();
   })
  })
}
const question5 = () => {
  return new Promise((resolve, reject) => {

    rl.question(`What's your favourite thing to drink for that meal? `, (answer) => {

      arr.push("  only with "+ answer);
     resolve();
   })
  })
}

const main = async ()=>{
  await question1();
  await question2();
  await question3();
  await question4();
  await question5();
  for(let ele of arr){
 process.stdout.write(ele);
 if(ele === arr[arr.length-1]){
   process.stdout.write('\n');
 }
  }
  rl.close();
}
main();


