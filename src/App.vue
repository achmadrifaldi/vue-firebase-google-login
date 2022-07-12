<template>
  <div>
    <button @click="googleSignIn">Sign In with Google</button>
  </div>
</template>

<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default {
  name: "App",
  methods: {
    googleSignIn: function () {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      provider.addScope("https://www.googleapis.com/auth/userinfo.email");
      provider.addScope("https://www.googleapis.com/auth/firebase.database");

      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
