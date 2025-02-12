import { useState } from 'react'
import './App.css'
import { Formik, Form } from 'formik'
import Input from './components/Input'

function App() {
  return (
    <Formik>
      <form>
        <Input name='accion' label='Ingrese una acción' />
        <Input name='carrera' label='Ingrese una carrera' />
      </form>
    </Formik>
  )
}

export default App
