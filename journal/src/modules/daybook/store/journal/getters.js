/**
 * Traer información del state para procesarla
 * Leer el state y trater la información de lo que necesito.
 */

/* export const myGetter = (state) => {
    return state.something
} */

export const getEntriesByTerm = (state) => (term = '') => {
    if (term.length === 0) return state.entries

    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()))
    
}

export const getEntryById = (state) => (id = '') =>  {
    const entry = state.entries.find(entry => entry.id === id)

    if (!entry) return

    return {...entry}
}