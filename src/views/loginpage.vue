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
        usernama: '',
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
        // Handle successful login, e.g., redirect to another page
      } catch (error) {
        console.error(error);
        // Handle login error, e.g., display error message
      }
    }
  }
};
</script>
