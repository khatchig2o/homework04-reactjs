import React from "react";

export default class Handelinput extends React.Component {
    state = {
        name: "",
        email: "",
        textarea: "",
        naemerrorText: false,
        emailerrorText: false,
        messageerrorText: false
    }

    HandelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submiting = () => {
        if (!this.state.name) {
            this.setState({ naemerrorText: true })
        } else {
            this.setState({ naemerrorText: false })
        } if (!this.state.email) {
            this.setState({ emailerrorText: true })
        } else {
            this.setState({ emailerrorText: false })
        } if (!this.state.textarea) {
            this.setState({ messageerrorText: true })
        } else {
            this.setState({ messageerrorText: false })
        }

    }
    render() {
        return <>
            <form className="P-input-form">
                <div>
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.HandelChange} />
                    {this.state.naemerrorText ? <p className='P-error-message'>Pleas fill the name to submit</p> : <></>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={this.HandelChange} />
                    {this.state.emailerrorText ? <p className='P-error-message'>Pleas fill the email to submit</p> : <></>}
                </div>
                <div>
                    <textarea name="textarea" cols="30" rows="5" placeholder='Message' style={{ resize: 'none' }} onChange={this.HandelChange}></textarea>
                    {this.state.messageerrorText ? <p className='P-error-message'>Pleas fill the Message to submit</p> : <></>}
                </div>
                <button type="button" onClick={this.submiting}>Send</button>

            </form>
        </>
    }
}