const { processData, getDataFromServer } = require("./getDataFromServer.js");
const {processMultipleData, fetchDataThen} = require("./fetchData.js");
const {fetchUserData} = require("./restAPI.js");
const {divideAndSort} = require("./divideAndSort.js");
const {jalankanProgram} = require("./CRUD.js");

module.exports= {
    getDataFromServer,
    processData,
    processMultipleData,
    fetchDataThen,
    fetchUserData,
    divideAndSort,
    jalankanProgram
};