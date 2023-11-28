export const removeLocalStorage = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
}