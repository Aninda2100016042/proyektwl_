<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="credentials.username" type="text" placeholder="Username" required>
      <input v-model="credentials.password" type="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3001/api/login', this.credentials);
        const token = response.data.token;

        // Store the token in local storage
        localStorage.setItem('token', token);

        console.log(response.data);
        // Display login success alert
        window.alert('Login successful.');
        // Redirect to the appropriate page after alert is closed
        this.$router.push('/mahasiswa');
      } catch (error) {
        console.error(error);
        // Display login failure alert
        window.alert('Login failed. Please try again.');
      }
    }
  }
};
</script>

