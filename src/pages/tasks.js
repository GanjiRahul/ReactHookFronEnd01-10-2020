import React ,{useState , useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap'
import ModalForm from '../components/Models/model'
import DataTable from '../components/Tables/dataTable'
import { CSVLink } from "react-csv";
import { withRouter } from 'react-router-dom';
import NavBar from '../components/OtherComponent/navbar';

function Tasks(props) {
  const [item , setItem] = useState([]);

  useEffect(()=>{
    const username = localStorage.getItem('username');
    if(username === '')
    props.history.push("/") 
    else
    getItems();
  },[])

  const getItems = () => {
    fetch('http://localhost:4010/api/product/getProduct')
      .then(response => response.json())
      .then(items => { 
        console.log('p item : ' , items);
        setItem(items.data) ;
       })
      .catch(err => console.log(err))
  }

  return (
    <div>
    <NavBar /><br/><br/>
    <Container className="App">
          <Row>
            <Col>
              <h1 style={{margin: "20px 0"}}>Product Details</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <DataTable items={item}  />
            </Col>
          </Row>
          <Row style={{"margin-top": "15px"}}>
            <Col>
              <CSVLink
                filename={"db.csv"}
                color="primary"
                style={{float: "left", marginRight: "10px"}}
                className="btn btn-primary"
                data={item}>
                Download CSV
              </CSVLink>
              <ModalForm buttonLabel="Add Product"/>
            </Col>
          </Row>
        </Container>
    </div>
  )
}export default withRouter(Tasks);
