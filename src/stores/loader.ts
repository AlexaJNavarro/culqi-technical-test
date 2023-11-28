import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loader', {
    state: () =>({
        loader: false
    }),
    actions: {
        async setLoader(value: boolean){
            this.loader = value;
        }
    }
})