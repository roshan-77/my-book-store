import {Card, ListGroup, ListGroupItem, ButtonGroup, Button} from 'react-bootstrap'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export function BooksCards({books, handleClick}){
    return(
        <div style={{padding:"20px"}}>
            {books !==null && <div style={{display:"grid", flexWrap:"wrap", gridTemplateColumns:"repeat(3,1fr)", gap:"20px"}}>
                {books.map((books)=>{
                    return(
                        // <Card style={{ width: '15rem', display:"flex",flexWrap:"none"}}>

                        //     <Card.Img src={books.volumeInfo.imageLinks.thumbnail} />
                        //     <Card>
                        //       <Card.Body>
                        //         <Card.Title>{books.volumeInfo.title}</Card.Title>
                        //         <Card.Text style={{overflow:"hidden", height:"80px"}}>
                        //         Description: {books.volumeInfo.hasOwnProperty('description')?books.volumeInfo.description:"NA"}
                        //         </Card.Text>
                        //       </Card.Body>
                        //       <ListGroup className="list-group-flush">
                        //         <ListGroupItem>Authors: {books.volumeInfo.authors}</ListGroupItem>
                        //         <ListGroupItem>Price: {books.saleInfo.listPrice.amount}</ListGroupItem>
                        //       </ListGroup>
                        //       <Card.Body>
                        //           <ButtonGroup>
                        //               <Button variant="outline-success">Add to Cart</Button>
                        //           </ButtonGroup>
                        //       </Card.Body>
                        //     </Card>
                        // </Card>
                        <div style={{display:"grid", gridTemplateColumns:"200px 1fr"}}>
                            <Card.Img src={books.volumeInfo.imageLinks.thumbnail} />
                            <Card>
                            <Card.Body>
                                 <Card.Title>{books.volumeInfo.title}</Card.Title>
                                 <Card.Text style={{overflow:"hidden", height:"80px"}}>
                                 Description: {books.volumeInfo.hasOwnProperty('description')?books.volumeInfo.description:"NA"}
                                 </Card.Text>
                               </Card.Body>
                               <ListGroup className="list-group-flush">
                                 <ListGroupItem>Authors: {books.volumeInfo.authors}</ListGroupItem>
                                 <ListGroupItem>Price: {books.saleInfo.listPrice.amount}</ListGroupItem>
                               </ListGroup>
                               <Card.Body>
                                   <ButtonGroup>
                                       <Button variant="outline-success" onClick={()=>handleClick(books)}>Add to Cart</Button>
                                   </ButtonGroup>
                               </Card.Body>
                            </Card>
                        </div>
                    )
                })}</div>
                }
        </div>
    )
}
