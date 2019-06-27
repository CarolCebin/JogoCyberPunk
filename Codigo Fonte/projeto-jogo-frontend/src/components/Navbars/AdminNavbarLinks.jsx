import React, { Component } from "react";
import { Navbar,Button,FormControl,Form, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from '../../routes'

class AdminNavbarLinks extends Component {
  render() {
    const rotas = routes.map((prop, key) => {
      
      return prop.name
    })
    console.log(this.props)
    
    return (
      <div>
        <Navbar bsPrefix="navbar">
        <Navbar.Brand className='logo' href="#home">{this.props.brandText} </Navbar.Brand>
   
        
        <Nav className="ml-auto">   
        <NavLink  to={"/admin/user"}><Button variant="secondary"><i className={'fa fa-user-o'}></i></Button></NavLink>
        <NavLink  to={"/admin/opcao"}><Button variant="secondary"><i className={'fa fa-cog'}></i></Button></NavLink>
        {/* <Nav.Link  href="pricing"><Button variant="secondary"><i className={'fa fa-user-o'}></i></Button></Nav.Link>     */}
        </Nav>
       
        <Form inline>
            <FormControl className="FormProcura" size="sm" type="text" placeholder="Search" />
            <Button variant="outline-info">Procurar</Button>
        </Form>        
        <NavLink to={"/admin/login"} >
          <Button
          variant="outline-primary"
          >Deslogar
          </Button></NavLink>  
    </Navbar>
      </div>
    );
  }
}

export default AdminNavbarLinks;
