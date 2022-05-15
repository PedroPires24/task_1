//This action is used to get the list of items related to the input text
const show_data_restr = (inputed_text) => {
    return {
        type: "SHOW_ITEMS_RESTRICTED",
        payload: inputed_text,
    }
}

export default show_data_restr;
