// import React, { useState, useEffect } from 'react'
// import { Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, FlexboxGrid, Panel } from 'rsuite';
// import { useHistory } from 'react-router-dom';

// export default function SignUp(props) {

//     let history = useHistory()

//     const initialValues = { username: '', age: '', email_address: '', password: '' }

//     let [ form, setForm ] = useState(initialValues)

//     let setValue = (key, value) => {
//         setForm({ ...form, [key]: value })
//     }

//     let handleSignup = (newUser) => {
//         console.log(newUser)
//         fetch('http://localhost:3000/users', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newUser)
//         })
//         .then(resp => resp.json())
//         .then(data => setForm(initialValues))
//         history.push('/watches')
//     }

//     useEffect(() => { console.log('running') }, [])

//     return(
//         <FlexboxGrid align="middle" justify="center">
//             <FlexboxGrid.Item colspan={12}>
//                 <Panel header={<h3>Sign Up</h3>} bordered>
//                     <Form formValue={form} fluid>
//                         <FormGroup>
//                             <ControlLabel>Username</ControlLabel>
//                             <FormControl 
//                                 name='username'  
//                                 onChange={e => setValue('username', e)}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <ControlLabel>Password</ControlLabel>
//                             <FormControl 
//                                 name="password"
//                                 type="password" 
//                                 onChange={e => setValue('password', e)}
//                             />
//                         </FormGroup>
//                         <FormGroup>
//                             <ButtonToolbar>
//                                 <Button className="btn btn-primary" onClick={() => handleSignup(form)}>Signup</Button>
//                                 <Button className="btn btn-secondary" onClick={() => history.push('/')}>Cancel</Button>
//                             </ButtonToolbar>
//                         </FormGroup>
//                     </Form>
//                 </Panel>
//             </FlexboxGrid.Item>
//         </FlexboxGrid>   
//     )
// }