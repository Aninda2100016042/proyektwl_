const Mahasiswa = require('../model/mahasiswamodel');

// Create a new Mahasiswa
exports.createMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.create(req.body);
    res.status(201).json(mahasiswa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Mahasiswa
exports.getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single Mahasiswa by ID
exports.getMahasiswaById = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (mahasiswa) {
      res.json(mahasiswa);
    } else {
      res.status(404).json({ message: 'Mahasiswa not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a Mahasiswa by ID
exports.updateMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    if (mahasiswa) {
      res.json(mahasiswa);
    } else {
      res.status(404).json({ message: 'Mahasiswa not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Mahasiswa by ID
exports.deleteMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findByIdAndDelete(req.params.id);
    if (mahasiswa) {
      res.json({ message: 'Mahasiswa deleted successfully' });
    } else {
      res.status(404).json({ message: 'Mahasiswa not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
