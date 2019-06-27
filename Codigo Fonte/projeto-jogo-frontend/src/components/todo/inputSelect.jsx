import React , {Component} from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'

export default class InputSelect extends Component{
    
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = []

        if(cols[0]) classes[0] = `${cols[0]}`
        if(cols[1]) classes[1] = `${cols[1]}`
        if(cols[2]) classes[2] = `${cols[2]}`
        if(cols[3]) classes[3] = `${cols[3]}`

        return classes 
    }

    render() {
        const inputClasses = this.toCssClasses(this.props.cols || '12')
        return(
            <>            
            <Col xs={inputClasses[0]} sm={inputClasses[1]} md={inputClasses[2]} lg={inputClasses[3]} className="inputColumn">
                <InputGroup className="input-group mb-4">
                        <FormControl  
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        
                        />
                
                <DropdownButton size="sm"
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-2"
                >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2" href="#">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3" href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                
                </InputGroup>
            
            </Col>
            </>
        )
    }
}