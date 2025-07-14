const fs = require('fs');
const readline = require('readline');
const path = require('path');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filePath = path.resolve('./data/')
const tambahData = (filePath, data) => {
  try {
    fs.appendFileSync(filePath, data + '\n');
    console.log('Data berhasil ditambahkan ke file');
  } catch (error) {
    console.error('Error menambah data:', error.message);
  }
};


const hapusFile = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log('File berhasil dihapus');
    } else {
      console.log('File tidak ditemukan');
    }
  } catch (error) {
    console.error('Error menghapus file:', error.message);
  }
};

const ubahData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
    console.log('Data berhasil diubah');
  } catch (error) {
    console.error('Error mengubah data:', error.message);
  }
};

const lihatData = (filePath) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      console.log('Isi file:');
      console.log(data);
    } else {
      console.log('File tidak ditemukan');
    }
  } catch (error) {
    console.error('Error membaca file:', error.message);
  }
};


const tampilkanMenu = () => {
  console.log('\nSISTEM MANAJEMEN FILE');
  console.log('1. Tambah data ke file');
  console.log('2. Hapus file');
  console.log('3. Ubah isi file');
  console.log('4. Lihat isi file');
  console.log('5. Keluar');
};

const jalankanProgram = () => {
  tampilkanMenu();
  
  rl.question('Pilih menu (1-5): ', (pilihan) => {
    switch (pilihan) {
      case '1':
        rl.question('Masukkan path file: ', (filePath) => {
          rl.question('Masukkan data yang ingin ditambahkan: ', (data) => {
            tambahData(filePath, data);
            jalankanProgram();
          });
        });
        break;
        
      case '2':
        rl.question('Masukkan path file yang ingin dihapus: ', (filePath) => {
          hapusFile(filePath);
          jalankanProgram();
        });
        break;
        
      case '3':
        rl.question('Masukkan path file: ', (filePath) => {
          rl.question('Masukkan data baru: ', (data) => {
            ubahData(filePath, data);
            jalankanProgram();
          });
        });
        break;
        
      case '4':
        rl.question('Masukkan path file: ', (filePath) => {
          lihatData(filePath);
          jalankanProgram();
        });
        break;
        
      case '5':
        console.log('Terima kasih!');
        rl.close();
        break;
        
      default:
        console.log('Pilihan tidak valid!');
        jalankanProgram();
        break;
    }
  });
};

// jalankanProgram();


module.exports = {jalankanProgram}