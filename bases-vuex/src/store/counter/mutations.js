export const incement = (state) => {
    state.count++;
    state.lastMutation = "increment";
}

export const incrementBy = (state, amount) => {
    state.count += amount;
    state.lastMutation = "incrementBy " + amount;
}

export const decrement = (state) => {
    state.count--;
    state.lastMutation = "decrement";
}
  
export const setLoading = (state, isLoading) => {
    state.isLoading = isLoading;
}