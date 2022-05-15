import React, {useEffect} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import show_data from './actions/showDataAction';
import InputField from './InputField';
//Main React component
const App = () => {

  const dispatch = useDispatch();


  //Here we fetch the items from the json api and store them in our store
  const fetchProducts = async () => {
    const response = await axios
      .get('https://jsonplaceholder.typicode.com/users')
      .catch((err) => {
        console.log("Err",err);
      });      
      dispatch(show_data(response.data));
  };

  useEffect(() => {
      fetchProducts();
      
  }, []);




  return (
    <div className="App">
      <InputField />
    </div>
  );
}



export default App;
