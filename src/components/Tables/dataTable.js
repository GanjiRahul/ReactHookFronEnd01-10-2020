import React from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Models/model'

function DataTable(props) {

  const deleteItem = id => {
    let confirmDelete = window.confirm('Delete product forever?')
    if (confirmDelete) {
      fetch('http://localhost:4010/api/product/deleteProduct', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: id
        })
      })
        .then(response => response.json())
        .then(item => {
          alert(item.message);
          window.location.reload();
        })
        .catch(err => console.log(err))
    }
  }

  const items = props.items.map((item, i) => {
    return (
      <tr key={item._id}>
        <td style={{ "visibility": "hidden" }}>{item._id}</td>
        <td>{<img className="productImg" style={{ "width": "100px", "height": "70px" }} src={'http://localhost:4010/' + item.icon} alt={'p-' + i} />}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.stock}</td>
        <td>{item.description}</td>
        <td>
          <div style={{ width: "145px" }}>
            <ModalForm buttonLabel="Edit" item={item} />
            {' '}
            <Button color="danger" onClick={() => deleteItem(item._id)}>Delete</Button>
          </div>
        </td>
      </tr>
    )
  })

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th></th>
          <th>Product Picture</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </Table>
  )
} export default DataTable

