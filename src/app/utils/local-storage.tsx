export const saveToLocalStorage = (key: string, value: unknown) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e)
    }
}

export const getFromLocalStorage = (key: string) => {
    try {
        const storedValue = localStorage.getItem(key)

        if (storedValue) JSON.parse(storedValue)

        return undefined

    } catch (e) {
        console.log(e)
        return undefined
    }
}