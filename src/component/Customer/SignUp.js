import Base from "../Base/Base";
import { Container,Row,Col, Card, CardHeader, CardBody, Button, Input, Form, FormGroup, Label, ToastHeader, FormFeedback } from "reactstrap";
import{NavLink as ReactLink} from "react-router-dom";
import { useState } from "react";
import connection from '../../services/connection'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
    const [data,setData] = useState({
        name:"",
        contact_detail:"",
        password:""
    });
    const[error, setError] = useState({
        error:{},
        isError:false
    })

    const submitForm =(event) =>{
        event.preventDefault();
        // if(error.isError){
        //     toast.error("Form data is invalid, correct all details then submit!!");
        //     return ;
        // }
        console.log(data);
    
        // Creating newUser Object...
        const newUser = {
            name:data.name ,
            contactdetail: data.contact_detail,
            password: data.password,
        };
        console.log(newUser);

         // send data into database
    
        connection.post("/api/v1/auth/register", newUser)
        .then(response => {
            toast.success("created Successfully !! user id"+response.data.id)
            console.log(response.data);
            return response.data;
        })
        .catch(error =>{
            console.log(error.message);
            toast.error(error.message);
            //handle errors in proper way
            setError({
                errors:error,
                irError:true
            })
        
        
        });

        setData({
            name:"",
            contact_detail:"",
            password:""
        });
        
    }

    return (
        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{size:7,offset:3}} >
                    <Card color="dark" outline="inverse">
                    <CardHeader>

                        <h3>Customer Registration Form</h3>

                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={submitForm}>
                            {/*Name field */}
                            <FormGroup>
                                <Label for="name">Enter your Name</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter here"
                                    id="name"
                                    onChange={(e)=>setData({...data,name:e.target.value})}
                                    value={data.name}
                                    invalid = {error.errors?.response?.data?.name ? true:false }/> 

                                    <FormFeedback>
                                        {error.errors?.response?.data?.name}
                                    </FormFeedback>
                            </FormGroup>


                            <FormGroup>
                                <Label for="contact">Enter your Email/Phone No.</Label>
                                <Input
                                    type="text"
                                    placeholder="Enter here"
                                    id="contact"
                                    onChange={(e)=>setData({...data,contact_detail:e.target.value})}
                                    value={data.contact_detail}
                                    invalid = {error.errors?.response?.data?.name ? true:false }/> 

                                    <FormFeedback>
                                        {error.errors?.response?.data?.name}
                                    </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Enter your password</Label>
                                <Input
                                    type="password"
                                    placeholder="Enter here"
                                    id="password"
                                    onChange={(e)=>setData({...data,password:e.target.value})}
                                    value={data.password}
                                    invalid = {error.errors?.response?.data?.contact_detail ? true:false }/> 

                                    <FormFeedback>
                                        {error.errors?.response?.data?.contact_detail}
                                    </FormFeedback> 
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" />
                                {' '}
                                <Label check>
                                    Check me out
                                </Label>
                            </FormGroup>
                            
                            <Container className="text-center">
                                <Button color="dark" type="submit">Register</Button>
                                <Button color="secondary"className="ms-2" type="reset">Reset</Button>
                            </Container>
                            
                            <Container>
                                <Button color="dark" className="mt-2" tag={ReactLink} to="/customerLogin">If you are already Register Click here</Button>
                            </Container>
                        </Form>
                    </CardBody>

                </Card>
                    </Col>
                </Row>
                

            </Container>

        </Base>
    )
}

export default SignUp;