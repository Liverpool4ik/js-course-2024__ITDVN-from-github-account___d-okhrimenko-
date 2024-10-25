const array = [
   {  name:"dddd",
      years: 20
   },

   {  name:"aaa", 
      years: 21},

   {  name:"ffff",
      years: 22 },

   {  name:"1",      
      years: 23
   },

   {  name:"22222",      
      years: 24},
];




// for (const el of array) {
//    console.log(el);
// }


for( key in array) {
   console.log(array[key]);
}
