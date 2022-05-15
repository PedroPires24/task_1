import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import show_data_restr from "./actions/showDataRestricted";
import clear_data from "./actions/clearDataAction";
import "./mystyle.css";

//This is the component that contains the InputField
const InputField = () => {
    
    const check_state2 = useSelector((state) => state.allReducers); 
    const dispatch = useDispatch();
    /**
     * Function fired while user is typing on the input field
     * @param {*} val - the "in-real-time" input text
     */
    function handleChange(val) {  //val is the in-real-time input text
        if(val === "") { //if nothing typed by user, it clears our store
            dispatch(clear_data());
            return;
        }
        const temp_arr = check_state2.global_list;
        const final_arr = [];
        let j = 0;
        //store in a temporary array only the names that matches with the user input
        for (let i = 0; i < temp_arr.length; i++) {
            if(temp_arr[i].name.substring(0,val.length).toLowerCase().localeCompare(val.toLowerCase()) === 0) {
                final_arr[j] = temp_arr[i].name;
                j++;
            }
            
        }
        //store the names in our store
        dispatch(show_data_restr(final_arr));
    }
    /**
     * Function triggered everytime user chooses an option and click on it
     * @param {*} val 
     */
    function onClickLIHandler(val) {
        let inp_id = document.getElementById("inp"); 
        inp_id.focus();
        inp_id.value = val; //changes the input value to the selected option
        dispatch(clear_data()); //clear the rest of the options
    }

    return (
        <div>
            <link   href="mystyle.css" type= "text/css" rel="stylesheet"></link>
            <div id="parent"> 
                <p>Input</p>
                <input id = "inp" type="text" placeholder="Enter some text" onChange={(e) => 
                    handleChange(e.target.value)} />
                { (
                    <ul>
                        {
                            check_state2.updated_list.map((suggestion, index) => {
                                return(
                                    
                                    <li  key = {index} onClick = {() => {onClickLIHandler(suggestion)}} >
                                        {suggestion}
                                    </li>
                                    
                                );
                            })
                        }
                    </ul>
                )}
            </div>
        </div>
        
    )
    
}
export default InputField;