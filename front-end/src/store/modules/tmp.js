import { defineStore } from 'pinia'

export const useMeritsStore = defineStore('merits', {
  state: () => ({
    user:{},
    task: {},
    merits: 0,
    stamina: 1000,
    today:0,
    limit:{},
    click:{},
  }),
  actions: {
    setInfo(info) {
      this.merits = info.merits
      this.stamina = info.stamina
      this.today = info.today
    },
    addMerits() {
      this.merits+=1
    },
    addStamina() {
      this.stamina-=1
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
