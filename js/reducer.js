// add code snippets from READMEv
var state;

function reducer(state = {count: 0}, action) {
    switch (action.type) {
        case "INCREASE_COUNT":
            return {count: state.count + 1}
        case "DECREASE_COUNT":
            return {count: state.count - 1}
        default:
            return state

    }
}

function dispatch(action) {
    state = reducer(state,action)
    render()
}
// reducer(state, {type: 'INCREASE_COUNT'})

function render() {
    let cont = document.getElementById('container')
    cont.textContent = state.count
    
   
}

var button = document.getElementById('button')

button.onclick = () => {
    dispatch({type: "INCREASE_COUNT"})
}

dispatch({type: '@@INIT'})
