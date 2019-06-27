import React from 'react'

import PageHeader from './pageHeader.jsx'
import TodoForm from './todoForm.jsx'
import TodoList from './todoList.jsx'
import Container from 'react-bootstrap/Container'

export default props => (
    <Container fluid>
        <PageHeader name='Dispositivos' small='Cadastro'></PageHeader>
        <TodoForm />
        <TodoList />
    </Container>
)