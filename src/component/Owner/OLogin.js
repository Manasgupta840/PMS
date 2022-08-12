
import Base from "../Base/Base";
import { Container, Row, Col, Card, CardHeader, CardBody, Button, Input, Form, FormGroup, Label } from "reactstrap";
import connection from '../../services/connection'
import { useState } from "react";
import { toast } from "react-toastify";
import { doLogin, isLoggedIn } from "../../auth";
import { Navigate } from "react-router-dom";
const OLogin = () => {
    const [loginDetail, setLoginDetail] = useState({
        username: "",
        password: ""

    })
    const handleChange=(event,field)=>{
        
        let actualValue = event.target.value
        setLoginDetail({
            ...loginDetail,
            [field]:actualValue

        })
    }
    
    const handleReset =()=>{
        setLoginDetail({
            username:"",
            password:""
        })
    }
    const dashboard =() =>{
        
        if(isLoggedIn()){
            console.log("I am inside the function")
            return <Navigate to={"/owner/dashboard"} />;
        }
        return;

    }

     const submitForm = (e) => {
        //validation
          if(loginDetail.username.trim()=='' || loginDetail.password.trim()==''){
            toast.error("Contact Detail or password is empty is required !!");
            return;
          }
          e.preventDefault()
          console.log(loginDetail);

          
        connection
            .post("/api/v1/auth/loginOwner",loginDetail)
            .then(response => {
                    console.log(response.data);

                    //save the data to Localstorage
                    doLogin(response.data,()=>{
                        console.log("login detail is saved to localStorage")
                    })

                    toast.success("Login Successfully")
                    dashboard();

                    
                    
            })
            .catch(error => {
                console.log(error)
                if(error.response.status == 400 || error.response.status==404){
                    toast.error(error.response.data.message)
                }
                else{
                    toast.error("Something went wrong on server !!")
                }
            });

     
 }  
    return (

        <Base>
            <Container>
                <Row className="mt-4">
                    <Col sm={{ size: 6, offset: 3 }} >
                        <Card color="primary" outline="inverse">
                            <CardHeader>
                                <h3>Owner Login</h3>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={submitForm}>
                                    <FormGroup>
                                        <Label for="contact">Enter your Email/Phone No.</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter here"
                                            id="contact"
                                            value={loginDetail.username}
                                            onChange={(e)=>handleChange(e,'username')} 
                                            required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Enter your password</Label>
                                        <Input
                                            type="password"
                                            placeholder="Enter here"
                                            id="password" 
                                            value={loginDetail.password}
                                            onChange={(e)=>handleChange(e,'password')}
                                            required />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        {' '}
                                        <Label check>
                                            Check me out
                                        </Label>
                                    </FormGroup>
                                    <Container className="text-center">
                                        <Button color="dark" type="submit">Login</Button>
                                        <Button color="secondary" className="ms-2" type="reset" onClick={handleReset}>Reset</Button>
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


export default OLogin;