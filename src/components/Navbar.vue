<template>
  <nav v-if="user">
    <div>
      <p class="display">Hey there 
        <span>
          {{ user.displayName.toUpperCase() }}
        </span>  </p>
      <p class="email" >Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
  export default {
    setup(){
      const { logout, error } = useLogout()
      const { user } = getUser()

      const handleClick = async () => {
        await logout()
        if(!error.value){
          console.log('user logged out')
        }
      }

      return { handleClick, error, user }
    }
    
  }
</script>

<style >

nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span{
    color: #ed7138;
    font-size: 20px;
    font-weight: bold;
  }

  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #fff;
  }
  nav p.email {
    font-size: 14px;
    color: #fff;
  }

</style>