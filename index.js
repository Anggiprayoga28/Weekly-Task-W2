// const { processData, getDataFromServer } = require("./data/getDataFromServer.js");
// const {processMultipleData, fetchDataThen} = require("./data/fetchData.js");
// const {fetchUserData} = require("./data/restAPI.js");
// const {divideAndSort} = require("./data/divideAndSort.js");
// const {jalankanProgram} = require("./data/CRUD.js");


const task = require("./data/index.js")


function weekly(){
// // nomor 1
//   try {
//    task.processMultipleData();
//    task.fetchDataThen();
//   } catch (error) {
//    console.log(error.message);
//   }
// // nomor 2
//  try {
//    task.getDataFromServer(true, task.processData);
//   } catch (error) {
//    console.log(error.message);
//   }
//  // nomor 3
//    try {
// //    task.processData();
//    task. fetchUserData();
//   } catch (error) {
//    console.log(error.message);
//   }

//  // nomor 4
//    try {
//    console.log(task.divideAndSort(5956560159466056));
//   } catch (error) {
//    console.log(error.message);
//   }
//5. 
 try {
   task.jalankanProgram();
  } catch (error) {
   console.log(error.message);
  }

}

weekly();