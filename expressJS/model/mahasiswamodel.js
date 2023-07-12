const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  prodi: {
    type: String,
    required: true
  },
  jenisKelamin: {
    type: String,
    required: true
  }
});

const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);

module.exports = Mahasiswa;