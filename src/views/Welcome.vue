<template>
  <div class="welcome container" >
    <h2>Welcome</h2> 
    <div v-if="showLogin" >
      <h2 class="h2-title">Login</h2>
      <Login @login="enterChat" />  
      <p>No account yet? <span @click="showLogin = false" >SignUp</span></p>
    </div> 
    <div v-else >
      <h2 class="h2-title">Sign Up</h2>
      <SignupForm @signup="enterChat" />
      <p>Already Registered? <span @click="showLogin = true" >Login</span></p>
    </div>

  </div>
</template>

<script >
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import SignupForm from '../components/SignupForm.vue';
import Login from '../components/Login.vue';


export default {
  components: { SignupForm, Login },
  setup(){
    const showLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }


    return { showLogin, enterChat }
  }
}

</script>

<style>
.welcome{
  text-align: center;
  padding: 20px 0;
  color: #eee;
}
.h2-title {
  color: #ed7138;
}

 /* form styles */
 .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #222;
    margin: 10px auto;
    font-weight: bold;
  }

  .welcome input::placeholder{
    color: #333;
    font-weight: bold;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }

</style>