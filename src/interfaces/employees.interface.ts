export interface IEmployees {
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