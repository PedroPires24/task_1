//This action is used to get all the items so we know them at the begging and during the entire project
const show_data = (inputed_text) => {
    
    return {
        type: "SHOW_ITEMS",
        payload: inputed_text
    };
}

export default show_data;