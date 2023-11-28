import { defineStore } from 'pinia'

export const useEmployeesStore = defineStore('employees', {
    state: () =>({
        search: ''
    }),
    actions: {
        async setSearch(value: string){
            this.search = value;
        }
    }
})