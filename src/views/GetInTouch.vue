<template>
  <!-- This comp is defining the contact section  -->
  <h1 class="header">Get In Touch</h1>
  <div>
    <div class="form-outer">
      <form @submit.prevent="handleSubmit">
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your Email"
          v-model="email"
          required
        />
        <label>Mobile</label>
        <input
          type="text"
          placeholder="Enter your mobile"
          v-model="mobile"
          required
        />
        <label>Description</label>
        <textarea
          type="text"
          placeholder="Enter your message"
          v-model="message"
          required
        />
        <input type="submit" />
      </form>
    </div>
    <footer>
      <h3>Made with 💗 by Aditya</h3>
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";
import useCollection from "../composable/getCollection";
export default {
  setup() {
    const { adding, error } = useCollection();
    const email = ref("");
    const mobile = ref("");
    const message = ref("");
    const handleSubmit = async () => {
      try {
        const set = {
          email: email.value,
          mobile: mobile.value,
          message: message.value,
        };
        await useCollection(adding(set));
        if (!error.value) {
          console.log("Data sent to db");
        }
        console.log(set);
        email.value = "";
        message.value = "";
        mobile.value = "";
      } catch (err) {
        console.log(err.message, "From Input Data for Firestore");
      }
    };
    return { handleSubmit, email, mobile, message };
  },
};
</script>

<style scoped>
* {
  /* background: white; */
  color: #f7f7f7;
}
.header {
  margin-top: 50px;
  padding-block: 20px 60px;
  color: aliceblue;
}
h1 {
  text-align: center;
}
form {
  display: inline-flex;
  flex-direction: column;
}
.form-outer {
  display: flex;
  justify-content: center;
  padding-bottom: 5vw;
}
input {
  /* Auto layout */
  padding: 0px 12px;
  gap: 12px;
  width: 25vw;
  height: 40px;
  background: #f8f8f8;
  border: 1px solid #d8d8d800;
  border-radius: 4px;
  margin: 10px;
  /* Inside auto layout */
}
input[type="submit"] {
  width: 27vw;
  background: var(--btnglow);
  cursor: pointer;
  transition: all 0.25s;
}
input[type="submit"]:hover {
  background: green;
  color: white;
}
textarea::placeholder {
  padding: 10px 5px;
}

input,
select,
textarea {
  color: rgb(0, 0, 0);
}
textarea {
  height: 200px;
  padding: 0px 12px;
  gap: 12px;
  width: 25vw;

  background: #f8f8f8;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  margin: 10px;
}
footer h3 {
  font-weight: 300;
  font-size: 1rem;

  vertical-align: middle;
  background: transparent;
}
footer {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--bg1);
  border-radius: 20px 20px 0px 0px;
}
/* Responsive Media Queries 1  */

@media only screen and (max-width: 1160px) {
  input {


  width: 50vw;


}
input[type="submit"] {
  width: 52vw;

}
textarea {
  
  width: 50vw;


}
}
</style>
