
const initial_state = {
    global_list: [],
    updated_list: [],
}

const managerReducer = (state = initial_state, action) => {
    switch (action.type) {
        case "SHOW_ITEMS":
            return {...state, global_list: action.payload};
        case "SHOW_ITEMS_RESTRICTED":
            return {...state, updated_list: action.payload};
        case "CLEAR_ITEMS":
            return {...state, updated_list: action.payload};
        default:
            return state;
    }
}

export default managerReducer;

















/*const managerReducer = (state = 0, action) => {
   /* var arr;
    async function componentDidMount(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log('hi');
        console.log(data[0].name);
        state = data.results;
    }
    componentDidMount();
    switch(action.type) {
        case "SHOW_DATA":
            //return the state with the correct array 
            return state
        default:
            return state
    }
}*/



/*async function getdat() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json();
    console.log("- "+data[1].name);
    return data;
  }



var arr = getdat();
console.log("arr is")
console.log(arr);*/

//export default managerReducer;