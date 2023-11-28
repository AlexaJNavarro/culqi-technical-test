import { defineStore } from 'pinia'

export const useEmployeesStore = defineStore('employees', {
    state: () =>({
        name: ''
    }),
    actions: {
        async setEmployeeName(value: string){
            this.name = value;
        }
    }
})