import React, { Component } from 'react'

import {Button} from 'react-bootstrap'
import InputSelect from './inputSelect'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


export default class TodoForm extends Component {

    render() {
        return (
            <>
            <Container fluid className='todoForm'>
                <Row >
                    <InputSelect cols="4 4 4 4"/>
                    <InputSelect cols="3 3 3 3"/>
                    <InputSelect cols="3 3 3 3"/>
                    <div>                
                        <Button className="btn-separa" variant="outline-primary" onClick={() => alert("Adicionar")}> 
                            <i className={'fa fa-plus'}></i>
                        </Button>
                        <Button className="btn-separa" variant="outline-dark"
                            onClick={() => alert("Limpar")}> 
                            <i className={'fa fa-close'}></i>
                        </Button>
                    </div>                
                </Row>
            </Container>
            </>
        )
    }
}
