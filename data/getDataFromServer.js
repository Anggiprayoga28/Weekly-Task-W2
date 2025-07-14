const getDataFromServer = (status, callback) =>{
    if(status){
        setTimeout(() => {
            const products =[
            'Product 1',
            'Product 2',
            'Product 3'
        ];
        callback(products, null);
    }, 3000);
    }else {
        const err = new Error (' Failed to fetch data');
        callback(null, err);
    }
};


const processData = (data, error) => {
    try{
        if (error){
            throw error;
        }
        console.log('Data berhasil di terima:', data);
    }catch (err){
        console.log('Error handling:', err.message);
    }
};

// getDataFromServer(true, processData);

module.exports = {
    getDataFromServer,
    processData
}
