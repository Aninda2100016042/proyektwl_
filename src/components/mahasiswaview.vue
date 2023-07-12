<template>
    <div>
      <h1>Create Mahasiswa</h1>
      <form @submit.prevent="createMahasiswa">
        <input v-model="mahasiswaData.nama" type="text" placeholder="Nama" required>
        <input v-model="mahasiswaData.email" type="email" placeholder="Email" required>
        <input v-model="mahasiswaData.prodi" type="text" placeholder="Prodi" required>
        <input v-model="mahasiswaData.jenisKelamin" type="text" placeholder="Jenis Kelamin" required>
        <button type="submit">Create</button>
      </form>

      <h1>Edit Mahasiswa</h1>
      <form @submit.prevent="updateMahasiswa">
        <input v-model="selectedMahasiswa.nama" type="text" placeholder="Nama" required>
        <input v-model="selectedMahasiswa.email" type="email" placeholder="Email" required>
        <input v-model="selectedMahasiswa.prodi" type="text" placeholder="Prodi" required>
        <input v-model="selectedMahasiswa.jenisKelamin" type="text" placeholder="Jenis Kelamin" required>
        <button type="submit">Update</button>
      </form>
  
      <h1>All Mahasiswa</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Prodi</th>
            <th>Jenis Kelamin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mahasiswa in mahasiswas" :key="mahasiswa._id">
            <td>{{ mahasiswa.nama }}</td>
            <td>{{ mahasiswa.email }}</td>
            <td>{{ mahasiswa.prodi }}</td>
            <td>{{ mahasiswa.jenisKelamin }}</td>
            <td>
              <button @click="getMahasiswaById(mahasiswa._id)">Edit</button>
              <button @click="deleteMahasiswa(mahasiswa._id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <button @click="handleLogout">Logout</button>
  
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        mahasiswaData: {
          nama: '',
          email: '',
          prodi: '',
          jenisKelamin: ''
        },
        mahasiswas: [],
        selectedMahasiswa: {
          _id: '',
          nama: '',
          email: '',
          prodi: '',
          jenisKelamin: ''
        }
      };
    },
    mounted() {
      this.getAllMahasiswa();
    },
    methods: {
      getToken() {
        return localStorage.getItem('token');
      },
      async createMahasiswa() {
        try {
          const response = await axios.post('http://localhost:3001/api/', this.mahasiswaData, {
            headers: { Authorization: `Bearer ${this.getToken()}` }
          });
          this.mahasiswas.push(response.data);
          this.mahasiswaData.nama = '';
          this.mahasiswaData.email = '';
          this.mahasiswaData.prodi = '';
          this.mahasiswaData.jenisKelamin = '';

          alert('Mahasiswa berhasil ditambahkan!');
        } catch (error) {
          console.error(error);
        }
      },
      async getAllMahasiswa() {
        try {
          const response = await axios.get('http://localhost:3001/api/', {
            headers: { Authorization: `Bearer ${this.getToken()}` }
          });
          this.mahasiswas = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      async getMahasiswaById(id) {
        try {
          const response = await axios.get(`http://localhost:3001/api/${id}`, {
            headers: { Authorization: `Bearer ${this.getToken()}` }
          });
          this.selectedMahasiswa = { ...response.data };
        } catch (error) {
          console.error(error);
        }
      },
      async updateMahasiswa() {
        try {
          const response = await axios.put(`http://localhost:3001/api/${this.selectedMahasiswa._id}`, this.selectedMahasiswa, {
            headers: { Authorization: `Bearer ${this.getToken()}` }
          });
          const index = this.mahasiswas.findIndex(mahasiswa => mahasiswa._id === response.data._id);
          if (index !== -1) {
            this.mahasiswas.splice(index, 1, response.data);
          }
          this.selectedMahasiswa.nama = '';
          this.selectedMahasiswa.email = '';
          this.selectedMahasiswa.prodi = '';
          this.selectedMahasiswa.jenisKelamin = '';

          alert('Mahasiswa berhasil diperbarui!');
        } catch (error) {
          console.error(error);
        }
      },
      async deleteMahasiswa(id) {
      const confirmed = confirm('Apakah Anda yakin ingin menghapus data?');
      if (confirmed) { 
        try {
          await axios.delete(`http://localhost:3001/api/${id}`, {
            headers: { Authorization: `Bearer ${this.getToken()}` }
          });
          this.mahasiswas = this.mahasiswas.filter(mahasiswa => mahasiswa._id !== id);

        } catch (error) {
          console.error(error);
        }
      }
      },
      handleLogout() {
      const confirmed = confirm('Apakah Anda yakin ingin logout?');
      if (confirmed) { 
      // Hapus token dari local storage atau jalankan logika logout sesuai kebutuhan
      localStorage.removeItem('token');
      
      // Redirect ke halaman login
      this.$router.push('/login');
      }
    }
    }
  };
  </script>
  <style>
  /* Add your styles here */
  /* For example: */
  
  /* Style for headings */
  h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
  }

  /* Style for form inputs */
  form input {
    width: 200px;
    padding: 5px;
    margin-bottom: 10px;
  }

  /* Style for form buttons */
  form button {
    padding: 8px 16px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  /* Style for table */
  table {
    width: 100%;
    border-collapse: collapse;
  }

  /* Style for table headings */
  th {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }

  /* Style for table cells */
  td {
    border: 1px solid #ccc;
    padding: 10px;
  }

  /* Style for table buttons */
  td button {
    margin-right: 5px;
    padding: 5px 10px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>
  