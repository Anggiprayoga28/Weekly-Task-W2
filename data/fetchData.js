const fetchData = (status) => {                             // Mendeklarasikan fungsi arrow fetchData yang menerima parameter status
  return new Promise((resolve, reject) => {                 // Mengembalikan Promise baru dengan parameter resolve (untuk sukses) dan reject (untuk error)
    if (status) {                                           // Mengecek apakah parameter status bernilai true
      setTimeout(() => {                                    // Jika status true, menjalankan setTimeout untuk simulasi operasi asynchronous
        resolve("Data berhasil disimpan");
      }, 3000);                                             // Setelah 3 detik, Promise akan resolved dengan pesan sukses
    } else {                                                // Jika status false, masuk ke blok else
      reject("Gagal mengambil data");                       // Promise akan rejected dengan pesan error
    }
  });
};



fetchData(true)
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
function fetchDataThen(){

fetchData(true)
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
}

const handleFetchData = async (status) => {
  try {
    const result = await fetchData(status);
    console.log("Success:", result);
  } catch (error) {
    console.log("Error:", error);
  }
};


// handleFetchData(true);
// handleFetchData(false);

const processMultipleData = async () => {
  try {
    console.log("\nMemproses multiple data");
    

    const results = await Promise.all([
      fetchData(true),
      fetchData(true)
    ]);
    
    console.log("Semua data berhasil:", results);
    
  } catch (error) {
    console.log("Ada error dalam memproses data:", error);
  }
};

// processMultipleData();


module.exports = {
  processMultipleData,
  fetchDataThen,
}



// 1. promise adalah perwakilan dari sebuah nilai yang belum tentu di ketahui nilai nya saat promise di buat
//    promise memungkinkan pengguna untuk menghubingkan fungsi handler dengan keberhasilan atau kegagalan aksi asynchronous

//    jika pake output reject("") maka yang muncul string
//    jika pake reject(new Error("")); maka yang muncul object string 

// 2. Async Await 
//    fitur ini memudahkan kita dalam menangani proses, asynchronous merupakan solusi lain untuk menangani promise
//    Asyncs
//    mengubah function seolah olah berjalan secara synchronous
//    Await
//    menunda eksekusi hingga proses ashyncronous selesai


// 3. Try - catch
//    untuk mengatasi error (error handling) pada async / await bisa menggunakan try - catch
//    Try
//    biasanya kita sisipkan code javascript yang mungkin terjadi error
//    Catch
//    blok ini lah yang akan menangkap error yang terjadi pada blok try apabila pada blok try si error muncul

//    Try - Catch bisa di pake di asynchronous dan synchronous


// 4. then - catch
//    Then
//    digunakan untuk menentukan tindakan yang akan dilakukan ketika Promise berhasil diselesaikan
//    catch 
//    digunakan untuk menangani kesalahan (penolakan) yang mungkin terjadi dalam Promise


// perbedaan
// try - catch: Digunakan untuk menangani kesalahan dalam kode sinkron.
// then - catch: Digunakan untuk menangani kesalahan dalam operasi asyncronous (Promise). 
