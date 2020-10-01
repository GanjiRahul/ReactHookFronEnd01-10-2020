  
import React , {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import dropdownInfo from '../../files/dropDownInfo';
import '../../App.css'

function Info(props) {
    const [dropDownKey , setDropDownKey] = useState('');
    console.log('key props 1 :',dropDownKey)

    useEffect(() => {
        console.log('props.selectedValue :',props.selectedValue);
        setDropDownKey(props.selectedValue);
    },[props.selectedValue])
    
  return (
    <div>
        {
           dropdownInfo.map((data, i)=>{
                if(data.key===dropDownKey){
                 return <p className="info" key={i}>{data.value}</p>;
                }
           })
        }
    </div>
  );
}export default withRouter(Info);
