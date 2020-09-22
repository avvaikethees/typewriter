let string = "hello there from lighthouselabs";

// setTimeout(() => {
//   for (const char of sentence) {
//     //console.log(char); //this prints out each character on a new line
//     process.stdout.write (char)
//   }

// }, 1000 )


string = string + "\n";
let delay = 50 
for (const char of string) {
  setTimeout  (() => {
    process.stdout.write (char)
  }, delay)
  delay += 50
}





// setTimeout(() => {
//   process.stdout.write(string[0]);
// }, 1000); 

// setTimeout(() => {
//   process.stdout.write(string[1]);
// }, 2000); 

// setTimeout(() => {
//   process.stdout.write(string[2]);
// }, 3000); 