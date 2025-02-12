import { useState } from 'react'
import './App.css'
import { Formik, Form } from 'formik'
import Input from './components/Input'

function App() {
  return (
    <Formik>
      <Input name='accion' label='Ingrese una acción'/>
    </Formik>
  )
}

export default App
