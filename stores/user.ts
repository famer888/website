/**
 * 用户状态管理 Store (Pinia)
 * 
 * 管理用户登录状态和用户信息
 */

import { defineStore } from 'pinia'

export interface UserInfo {
  userId: string
  userName: string
  loginEmail: string
}

interface UserState {
  userInfo: UserInfo | null
  isLoggedIn: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userInfo: null,
    isLoggedIn: false,
  }),

  getters: {
    /**
     * 获取用户 ID
     */
    userId: (state) => state.userInfo?.userId || null,
    
    /**
     * 获取用户名
     */
    userName: (state) => state.userInfo?.userName || null,
    
    /**
     * 获取登录邮箱
     */
    loginEmail: (state) => state.userInfo?.loginEmail || null,
  },

  actions: {
    /**
     * 设置用户信息（登录成功时调用）
     * @param userInfo 用户信息
     */
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
      this.isLoggedIn = true
      
      // 持久化到 localStorage（可选）
      if (process.client) {
        try {
          localStorage.setItem('userInfo', JSON.stringify(userInfo))
        } catch (e) {
          console.warn('保存用户信息到 localStorage 失败:', e)
        }
      }
    },

    /**
     * 清除用户信息（登出或登录失效时调用）
     */
    clearUserInfo() {
      this.userInfo = null
      this.isLoggedIn = false
      
      // 清除 localStorage
      if (process.client) {
        try {
          localStorage.removeItem('userInfo')
        } catch (e) {
          console.warn('清除 localStorage 用户信息失败:', e)
        }
      }
    },

    /**
     * 从 localStorage 恢复用户信息（页面刷新时调用）
     */
    restoreUserInfo() {
      if (!process.client) return
      
      try {
        const userInfoStr = localStorage.getItem('userInfo')
        if (userInfoStr) {
          const userInfo = JSON.parse(userInfoStr) as UserInfo
          // 验证数据完整性
          if (userInfo.userId && userInfo.userName && userInfo.loginEmail) {
            this.userInfo = userInfo
            this.isLoggedIn = true
          } else {
            // 数据不完整，清除
            this.clearUserInfo()
          }
        }
      } catch (e) {
        console.warn('从 localStorage 恢复用户信息失败:', e)
        this.clearUserInfo()
      }
    },
  },
})

