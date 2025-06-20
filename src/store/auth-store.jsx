import {create} from "zustand"
import { actionLogin } from "../api/auth";
import { persist } from "zustand/middleware"

// 1. Create store
const authStore = (set) => ({
  token: null,
  user: [],
  actionLoginWithZustand: async(value)=>{
    try {
      const res = await actionLogin(value);
      const {payload, token} = res.data;
      // console.log(res.data.payload);
      // console.log(res.data.token);
      set({token: token, user: payload});
        return{ success: true, role: payload.role};
    } catch (error) {
      // console.log(error)
      return {success: false, message: error.response?.data?.message}
    }
  }
})
// 2. Use Store
const useAuthStore = create(persist(authStore, {name: "auth-store"}))

export default useAuthStore;
