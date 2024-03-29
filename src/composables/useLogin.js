import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const login = async (email, password) => {
  error.value = null

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    error.value = null
    return res
  } catch (err) {
    console.log(err.value)
    error.value = 'Incorrect Login Credentials!'
  }
}

const useLogin = () => {

  return { login, error }
}

export default useLogin