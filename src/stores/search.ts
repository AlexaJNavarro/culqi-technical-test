import { defineStore } from 'pinia'

export const useSearchStore = defineStore('employees', {
    state: () =>({
        search: ''
    }),
    actions: {
        async setSearch(value: string){
            this.search = value;
        }
    }
})