<template>
  <form  >
    <textarea 
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div v-if="error" class="error" >{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue';
import useCollection from '../composables/useCollection';
import getUser from '../composables/getUser';
import { timestamp } from '../firebase/config';
  export default {
    setup(){
      const message = ref('')
      const { user } = getUser()
      const { addDoc, error } = useCollection('messages')

      const handleSubmit = async () => {
        const chat = {
          name: user.value.displayName,
          message: message.value,
          createdAt: timestamp()

        }
        await addDoc(chat)
        if(!error.value){
          message.value = ''

        }
      }

      return { message, handleSubmit, error }
    }
  }
</script>
<style>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    font-size: 20px;
    color: #fff;
    outline: none;
    background-color: #777;
  }

  textarea::placeholder{
    color: #fff;
    font-size: 18px;
 
  }

  .error {
    text-align: center;
    color: crimson;
    font-size: 12px;
    padding: 10px 0;
  }

</style>