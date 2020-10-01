import React,{useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

function AddEditForm(props){

  const [_id , setId ] = useState('');
  const [icon , setIcon] = useState('');
  const [oldIcon , setOldIcon] = useState('');
  const [name , setName] = useState('');
  const [price , setPrice] = useState('');
  const [stock , setStock] = useState('');
  const [description , setDescription] = useState('');
  const [imagePreviewUrl , setImagePreviewUrl] = useState('');

  const submitFormAdd = e => {
    let formData = new FormData();
    formData.append('icon', icon);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('description', description);

    console.log('icon  :', icon);
    console.log('name  :', name);
    console.log('price :', price);
    console.log('stock :', stock);
    console.log('description :', description);
    e.preventDefault()
    fetch('http://localhost:4010/api/product/addAndUpdateProduct', {  
      //authorization:token
      method: 'post',
      headers: {
        // 'Content-Type': 'application/json'
      },
      body: formData
    })
      .then(response => response.json())
      .then(item => {
        // if(Array.isArray(item)) {
        //   this.props.addItemToState(item[0])
        //   this.props.toggle()
        // } else {
        //   console.log('failure')
        // }
        console.log('item add :', item);
        alert(item.message)
        window.location.reload();
      })
      .catch(err => console.log('fail at add product :' , err))
  }

  const submitFormEdit = e => {

    let formData = new FormData();
    formData.append('_id', _id);
    formData.append('icon', icon);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('description', description);

    console.log('_id  :', _id);
    console.log('icon  :', icon);
    console.log('name  :', name);
    console.log('price :', price);
    console.log('stock :', stock);
    console.log('description :', description);
    e.preventDefault()
    fetch('http://localhost:4010/api/product/addAndUpdateProduct', {
      method: 'post',
      headers: {
        // 'Content-Type': 'application/json'
      },
      body: formData
    })
      .then(response => response.json())
      .then(item => {
        console.log('edit item :', item);
        alert(item.message)
        window.location.reload();
      })
      .catch(err => console.log('Product Edit Fail :' , err))
  }

  useEffect (() => {
    // if item exists, populate the state with proper data
    if (props.item) {
      setId(props.item._id);
      setIcon(props.item.icon);
      setOldIcon(props.item.icon);
      setName(props.item.name);
      setPrice(props.item.price);
      setStock(props.item.stock);
      setDescription(props.item.description);
    }
  },[props.item])
  
  const getPhoto = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setIcon(file);
      setOldIcon('');
      setImagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(file);
  }
  
  console.log('icon :',icon);

  let imagePreview = null;
  if (imagePreviewUrl) {
    imagePreview = (<img style={{"width":"100px","height":"70px"}} src={imagePreviewUrl} alt={'p-i'}/>);
  } else {
    imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
  }

    return (
      <Form onSubmit={props.item ? submitFormEdit : submitFormAdd}>
        <FormGroup>
          <Input style={{ "visibility": "hidden" }} type="text" name="_id" id="_id" onChange={e => setId(e.target.value)} value={_id === '' ? '' : _id} />
        </FormGroup>
        <FormGroup>
          <Label for="icon">Icon</Label>{' '}<br></br>
         { oldIcon === ''  ? '' : <img className="productImg" style={{ "width": "100px" }} src={oldIcon === '' ? '' : 'http://localhost:4010/' + oldIcon} alt={'p-'} /> }<br></br> 
          {/* <Input type="text" name="icon" id="icon" onChange={this.onChange} value={icon === null ? '' : icon} /> */}
          <div className="imgPreview">
                {imagePreview}
          </div>
          <input type='file'  onChange={getPhoto}/><br></br>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" onChange={e => setName(e.target.value)} value={name === null ? '' : name} />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="text" name="price" id="price" onChange={e => setPrice(e.target.value)} value={price === null ? '' : price} />
        </FormGroup>
        <FormGroup>
          <Label for="stock">stock</Label>
          <Input type="text" name="stock" id="stock" onChange={e => setStock(e.target.value)} value={stock === null ? '' : stock} />
        </FormGroup>
        <FormGroup>
          <Label for="description">description</Label>
          <Input type="text" name="description" id="description" onChange={e => setDescription(e.target.value)} value={description} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
}export default AddEditForm
