import React from 'react'
import styles from '../styles/form.module.css'
import emailjs from 'emailjs-com'
import { render } from 'react-dom';
    const initialState = {
        name: '',
        email: '',
        password: '',
        text: '',
        subject:'',
        nameError: '',
        emailError: '',
        passwordError: '',
        phoneNumberError: '',
        textError: '',
     
    } 

  function sendEmail(e) {
        e.preventDefault();

      emailjs.sendForm('service_vzoqlpe', 'template_gecvdv7', '.emmy ',"user_RmvvzALK4NP8WUZKjDgmF",  e.target).then(res=>{
    console.log(res);
}).catch(err=> console.log(err))

    }
export class Contact extends React.Component{
state = initialState;
  


    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validate = () => {
        let nameError = ' ';
        let emailError = '';
        let textError ='';
        if (!this.state.textError) {
            textError = 'enter your message'
        } else if (this.state.textError.length < 4) {
            textError = 'your message must be atleast 40 letters'
        }

        if (!this.state.name) {
            nameError = 'enter a your name'
        } else if (this.state.name.length < 10) {
            nameError = 'enter a valid name'
        }

        if (!this.state.email.includes('@')) {
            emailError = 'email is not correct'
        }

        if (emailError || nameError || textError) {
            this.setState({ emailError, nameError, textError });
            return false;
        }
        return true;
    }

    handleSubmited = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(initialState)
        }

        

    }


 
render() {

    return (
        <div className={styles.Form}>


            <form onSubmit={this.handleSubmited}  className='emmy'>
                <h2 className="lined text-uppercase text-center">CONTACT</h2>
                <div className="row100">
                    <div className="col">
                        <div className={styles.forms}>
                            <input type="text" required='require' name='name' value={this.state.name} onChange={this.handleChange}  placeholder='Enter your name'/>
                            
                        

                        </div>
                        <div className={styles.error}>{this.state.nameError}</div>
                    </div>

                    <div >
                        <div className="col">
                            <div className={styles.forms}>
                                <input type="email " required='require' name='email' value={this.state.email} onChange={this.handleChange}  placeholder='Enter your Email e.g crystal@gmail.com'/>
                            </div>
                            <div className={styles.error}>{this.state.emailError}</div>
                        </div>
                    </div>



                    <div className="row100">
                        <div className="col">
                            <div className="input-area">
                                <textarea type="text" required='require' name='text' value={this.state.phoneNumber} onChange={this.handleChange} placeholder='Write your message here'
                                className={styles.textArea}
                                />



                            </div>
                        </div>
                        <div className={styles.error}>{this.state.textError}</div>
                    </div>
                </div>

                <div className="row100 btn-3">
                    <div className={styles.btn}>
                        <button  type='sumit'>SUBMIT</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

}

export default Contact
