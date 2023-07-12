<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input v-model="credentials.username" type="text" placeholder="Username" required>
      <input v-model="credentials.password" type="password" placeholder="Password" required>
      <button type="submit">Register</button>
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
    async register() {
      try {
        const response = await axios.post('http://localhost:3001/api/register', this.credentials);
        console.log(response.data);
        // Display registration success alert
        window.alert('Registration successful. Please proceed to login.');
        // Redirect to login page after alert is closed
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
        // Display registration failure alert
        window.alert('Registration failed. Please try again.');
      }
    }
  }
};
</script>

