import React from 'react'
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";



      function Login() {
        const fields = [
          { label: "Email", type: "email", placeholder: "Enter email" },
          { label: "Password", type: "password", placeholder: "Enter password" }
        ];
      
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Email:", email, "Password:", password);
        };
      
        return (
          <div className="bgR" style={{ backgroundImage: ("https://scontent.fceb2-2.fna.fbcdn.net/v/t1.15752-9/343955126_258858226525442_4580600243298041568_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFHa3Bgm9GvNzhGqKs_A6csJmqhqa9sen0maqGpr2x6fZleQOGXDktcHvy6MIw1RXbf-DQqMD_GtVxkc2bnO_61&_nc_ohc=dPAS9XD8Z-IAX_XheEO&_nc_ht=scontent.fceb2-2.fna&oh=03_AdTUutq7krtalH2qplhH4ujVPSCFuykn1HhUuXgLXQWuqQ&oe=648109D6"), backgroundColor: "#BDCDD6", backgroundSize: "cover", backgroundPosition: "center center", backdropFilter: "blur(15px)" }}>
            <div className="container" >
               <div className="row justify-content-center">
                 <div className="col-md-5 col-lg-5" >
                    <div className="card my-5" style={{ backgroundColor: "#A984EB", opacity: 0.8, position: "relative", zIndex: 1 }}>
                            <Form onSubmit={handleSubmit} className="shadow p-4 rounded">
                              <h1 className="text-center mb-4">Power Fitness</h1>
                              {fields.map((field) => (
                                <Form.Group key={field.label} className="mb-3">
                                  <Form.Label>{field.label}</Form.Label>
                                  <Form.Control
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={field.label === "Email" ? email : password}
                                    onChange={(e) =>
                                      field.label === "Email"
                                        ? setEmail(e.target.value)
                                        : setPassword(e.target.value)
                                    }
                                  />
                                </Form.Group>
                              ))}
                                <Button variant="primary" type="submit" className="w-100 mt-3">
                                Sign in
                                </Button>
                                  <div className="text-center mt-3">
                                      <a href="#">Forgot password?</a>
                                  </div>
                            </Form>
                                  {email && <h2>Your email: {email}</h2>}
                                  {password && <h2>Your password: {password}</h2>}
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
             );
          }
    export default Login;
