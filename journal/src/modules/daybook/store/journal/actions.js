/**
 * Son tareas síncronas o asíncronas que llaman a una mutación
 */

import journalApi from "@/api/journalApi"

/* export const myAction = async ({ commit }) => {
    commit('myMutation')
} */
export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json');

    if (!data)
        return commit('setEntries', [])

    const entries = []
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntries', entries)
}


export const updateEntry = async ({ commit }, entry) => {
    // Extraer sólo lo que se necesita
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }
    
    await journalApi.put(`/entries/${entry.id}.json`, dataToSave)

    commit('updateEntry',  {...entry})
}

export const createEntry = async ({ commit }, entry) => {
    // dataToSave
    const { date, picture, text } = entry
    const dataToSave = { date, picture, text }
    const { data } = await journalApi.post('/entries.json', dataToSave)

    dataToSave.id = data.name

    commit('addEntry', {...dataToSave})

    return data.name
}

export const deleteEntry = async ({ commit }, entry) => {
    await journalApi.delete(`/entries/${entry.id}.json`)
    commit('deleteEntry', entry)
}
