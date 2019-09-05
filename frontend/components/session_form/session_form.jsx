import React from 'react'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(type) {
      return (e) => {
          this.setState({ [type]: e.target.value });
      };
  }

  handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
      this.props.closeModal()
  }

  render() {
    return (
      // <div className="modal open">
        <form className="modal-session-form" onSubmit={this.handleSubmit}>
          <div className="modal-header">
            <h2>{this.props.formtype}</h2>

            <div className="modal-close" onClick={this.props.closeModal}> 
              <i className="fas fa-times" onClick={this.props.closeModal}></i>
            </div>

            {this.props.otherForm}
          </div>

          <div className="input-fields">
            <input className="session-input"
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />

            <input className="session-input"
              type="password" 
              value={this.state.password} 
              onChange={this.update('password')} 
              placeholder="Password"
            />
            <input className="session-submit" 
            type="submit" 
            value={this.props.buttontype}
            />
          </div>
        </form>
      // </div>
    );
  }
}
export default SessionForm;