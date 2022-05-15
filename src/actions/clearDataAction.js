//This action is used to clear the items of the updated list in our store
const clear_data = () => {
    return {
        type: "CLEAR_ITEMS",
        payload: []
    };
}

export default clear_data;