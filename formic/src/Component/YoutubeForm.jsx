import React from 'react'
import { Formik, Form , Field, ErrorMessage } from 'formik'
import * as Yup from 'Yup'
import TextError from './TextError'

const initialValues={
    name:'Habeeba',
    email:'',
    channel:'',
    // comments:'',
    // address:''
}
const onSubmit=values=>{
    console.log('form data',values); 
}

const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Invalid email format').required('Required'),
    channel:Yup.string().required('Required')
})

function YoutubeForm() {
  return (
    <Formik 
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit} >
          {formik=>(
        <Form >
            <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <Field type='text'id='name'name='name'/>
              {/* <ErrorMessage name='name'/> */}
              <ErrorMessage name='name' component={TextError}/>
            </div>

            <div className='form-control'>
            <label htmlFor='email'>E-mail</label>
            <Field type='email'id='email'name='email'/>  
              {/* <ErrorMessage name='email'/>  */}
              <ErrorMessage name='email'>
                {errorMsg=> <div className='error'>{errorMsg}</div>}
              </ErrorMessage>
              </div> 

            <div className='form-control'>
            <label htmlFor='channel'>Channel</label>
            <Field type='text'id='channel'name='channel'/>
              <ErrorMessage name='channel'/>
               </div>

            {/* <div className='form-control'>
            <label htmlFor='comments'>Comments</label>
            <Field as='textarea' id='comments'name='comments'/>
               </div>

            <div className='form-control'>
            <label htmlFor='address'>Address</label>
            <Field name='address'>
               {props =>{
                const {field,form,meta} =props
                console.log('render props',props);
                return(
                  <div>
                    <input type='text' id='address' {...field}/>
                  {meta.touched && meta.error ? <div>{meta.error} </div>:null} 
                  </div>             
                 )
               }}
               </Field>
               </div> */}
            <button type='submit'>Submit</button>
        </Form>
        )}
    </Formik>
  )
}

export default YoutubeForm
