import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from '../Forms/addEditForm'

function ModalForm(props){
  const [model , setModel] = useState(false);

  const toggle = () => {
    setModel(!model);
  }

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>

  const label = props.buttonLabel

  let button = ''
  let title = ''

  if(label === 'Edit'){
    button = <Button
              color="warning"
              onClick={toggle}
              style={{float: "left", marginRight:"10px"}}>{label}
            </Button>
    title = 'Edit Product'
  } else {
    button = <Button
              color="success"
              onClick={toggle}
              style={{float: "left", marginRight:"10px"}}>{label}
            </Button>
    title = 'Add New Product'
  }

      return (
      <div>
        {button}
        <Modal isOpen={model} toggle={toggle} className={props.className}>
          <ModalHeader toggle={toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddEditForm
              toggle={toggle}
              item={props.item} />
          </ModalBody>
        </Modal>
      </div>
    )
}

export default ModalForm