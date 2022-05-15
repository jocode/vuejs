/**
 * Las mutaciones son síncronas y hacen la modificación del state
 */
/* export const myMutations = (state) => {

} */

export const setEntries = (state, entries) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = (state, entry) => { 
    console.log(entry, state)
    const entryIndex = state.entries.findIndex(item => item.id === entry.id)
    state.entries[entryIndex] = entry
}

export const addEntry = (state, entry) => {
    state.entries = [entry, ...state.entries]
}

export const deleteEntry = (state, entry) => {
    const entryIndex = state.entries.findIndex(item => item.id === entry.id)
    state.entries.splice(entryIndex, 1)
}