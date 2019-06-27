import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr >
                <td>Desligar</td>
                <td>17:00</td>
                <div>
                    {/* <Button title="Ligar" variant='outline-success'
                        onClick={() => props.markAsDone(todo)}> 
                        <i className={'fa fa-power-off'}></i>
                        </Button> */}
                    <Button title="Editar" variant='outline-warning'
                        onClick={() => alert("Editar")}> 
                        <i className={'fa fa-pencil'}></i>
                        </Button>
                </div>                              
            </tr>
            
            
        ))
    }

    return (
        <Container fluid>
        <table className='table'>
            <thead>
                <tr>
                    <th>Dispositivo</th>
                    <th>Ação</th>
                    <th>Horário</th>
                    <th className='tableActions'>Editar</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
        <div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button className="btn-sm" variant='outline-info'> 
                        <i className={'fa fa-search'}></i>
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
        </Container>
    )
}
