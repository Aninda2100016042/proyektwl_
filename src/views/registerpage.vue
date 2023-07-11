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
        // Handle successful registration, e.g., redirect to another page
      } catch (error) {
        console.error(error);
        // Handle registration error, e.g., display error message
      }
    }
  }
};
</script>
