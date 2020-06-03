<template>
  <form>
    <label>
      Email:
      <input type="text" name="email" v-model="form.email">
    </label>
    <label>
      Password:
      <input type="password" name="password" v-model="form.password">
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  deactivated() {
    console.log('quick safe to db', this.form);
  },
};
</script>
