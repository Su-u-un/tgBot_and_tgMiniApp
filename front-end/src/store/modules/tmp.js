import { defineStore } from 'pinia'

export const useMeritsStore = defineStore('merits', {
  state: () => ({
    user:{},
    attr:{},
    merits: 0,
    stamina: 1000
  }),
  actions: {
    setInfo(info) {
      this.merits = Number(info.merits)
      this.stamina = Number(info.stamina)
    },
    addMerits(value) {
      const num = Number(value)
      this.merits+=num
    },
    addStamina(value) {
      const num = Number(value)
      this.stamina-=num
    },
    // async reloadTab(path, keepAlive) {
    //   const findItem = this.tabs.find(item => item.path === path)
    //   if (!findItem)
    //     return
    //   // 更新key可让keepAlive失效
    //   if (keepAlive)
    //     findItem.keepAlive = false
    //   $loadingBar.start()
    //   this.reloading = true
    //   await nextTick()
    //   this.reloading = false
    //   findItem.keepAlive = !!keepAlive
    //   setTimeout(() => {
    //     document.documentElement.scrollTo({ left: 0, top: 0 })
    //     $loadingBar.finish()
    //   }, 100)
    // },
    // async removeTab(path) {
    //   this.setTabs(this.tabs.filter(tab => tab.path !== path))
    //   if (path === this.activeTab) {
    //     useRouterStore().router?.push(this.tabs[this.tabs.length - 1].path)
    //   }
    // },
    // removeOther(curPath = this.activeTab) {
    //   this.setTabs(this.tabs.filter(tab => tab.path === curPath))
    //   if (curPath !== this.activeTab) {
    //     useRouterStore().router?.push(this.tabs[this.tabs.length - 1].path)
    //   }
    // },
    // removeLeft(curPath) {
    //   const curIndex = this.tabs.findIndex(item => item.path === curPath)
    //   const filterTabs = this.tabs.filter((item, index) => index >= curIndex)
    //   this.setTabs(filterTabs)
    //   if (!filterTabs.find(item => item.path === this.activeTab)) {
    //     useRouterStore().router?.push(filterTabs[filterTabs.length - 1].path)
    //   }
    // },
    // removeRight(curPath) {
    //   const curIndex = this.tabs.findIndex(item => item.path === curPath)
    //   const filterTabs = this.tabs.filter((item, index) => index <= curIndex)
    //   this.setTabs(filterTabs)
    //   if (!filterTabs.find(item => item.path === this.activeTab.value)) {
    //     useRouterStore().router?.push(filterTabs[filterTabs.length - 1].path)
    //   }
    // },
    resetTabs() {
      this.$reset()
    },
  },
  persist: {
    paths: ['merits'],
    storage: sessionStorage,
  },
})
