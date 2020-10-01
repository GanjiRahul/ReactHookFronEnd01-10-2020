import React , {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import dropdownInfo from '../../files/dropDownInfo'
import Info from './info'

function DropdownComponent(props) {
    console.log('dropdownInfo :',dropdownInfo , typeof dropdownInfo);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    var [dropDownKey, changeKey] = useState('Select');
    var [dropDownValue,setValueInfo] = useState();
    const toggle = () => setDropdownOpen(!dropdownOpen);

    const onChangeKey = (e) => {
        changeKey(e.currentTarget.value);
        var info = <Info selectedValue={e.currentTarget.value} />
        setValueInfo(info);
    }

    console.log('dropDownKey :' , dropDownKey);
  return (
      <div className="dropDownDiv">
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} style={{ "marginBottom": "15px" }}>
          <DropdownToggle caret>
            {dropDownKey}
          </DropdownToggle>
          <DropdownMenu>
            {    
               dropdownInfo.map((data, i)=>{
                    console.log('drop map val :',data , i);
                    return <DropdownItem id={i} key={i} value={data.key} onClick={onChangeKey}>
                            {data.key}
                           </DropdownItem>
                })
            }    
          </DropdownMenu>
        </ButtonDropdown><br/><br/>
        {dropDownValue}
    </div>
  );
}export default withRouter(DropdownComponent);
