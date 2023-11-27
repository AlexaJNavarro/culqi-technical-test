import { defineStore } from 'pinia'
interface IEmployees {
    id:           number;
    nombre:       string;
    correo:       string;
    cargo:        string;
    departamento: string;
    oficina:      string;
    estadoCuenta: string;
}
interface EmployeesState {
    status: string
    data: IEmployees[];
    total: number;
}
export const useEmployeesStore = defineStore('employees', {
    state: (): EmployeesState => ({
        status: '',
        data: [],
        total: 0
    }),
    actions: {
        async getEmployees(status: string, data: IEmployees[], total: number){
            this.status = status;
            this.data = data;
            this.total = total;
        }
    }
})