import React, {Component} from 'react'
// import 'axios'
import './Login.css'
import axios from 'axios'

class Login extends React.Component{
  state = {
         email : '',
         password : '',
         Success : 'false',
         users : {}
     }
   
      componentDidMount(){
         
         axios.get("https://jsonplaceholder.typicode.com/users").then(
             res =>{
                console.log(res.data)
                this.state.users.mail = res.data.map(user => user.email)
                this.state.users.pass = res.data.map(user => user.username)
                console.log(this.state.users)
             }
         )
     }
 
  handleMail = (e) => {
         this.setState({
             email : e.target.value
         })
 
     }
     handlePassword = (e) => {
         this.setState({
             password : e.target.value
         })
 
     }
     handleSubmit = (e) =>{
         e.preventDefault(); 
 
       for (var i=0; i<this.state.users.mail.length; i++) {
           let testmail = this.state.users.mail[i]
           let testpass = this.state.users.pass[i]
          if(testmail === this.state.email && testpass === this.state.password){
               this.setState({
                   Success : 'true'
               })
            break;
               console.log(this.state.users.mail[i])
               console.log(this.state.email)
               console.log(this.state.users.pass[i])
               console.log(this.state.password)
               console.log(this.state.Success)
               
          }else{
             this.setState({
                 Success : 'false'
             })
             console.log(this.state.Success)
             console.log(this.state.users.mail[i])
               console.log(this.state.email)
          }
            }
       
                    alert(this.state.Success)
     }
   
     
   render() {
     return (
         <div className="App1">
         <div className="left"></div>
         <div className="right">
         <h2>We Are <span>Rowaad</span></h2>
         <p>Welcome back! Log in to your account to view today's updates:</p>
          <div className="form">
          
 
           <form onSubmit={this.handleSubmit}>
               <input className="buttonform" type="text" placeholder="Email" onChange={this.handleMail} />
               <input className="buttonform" type="text" placeholder="Password" onChange={this.handlePassword} />
               <button className="buttontest" >Log in</button>
               {console.log('hihi'+this.state.Success)}
               
           </form>
           </div>
         </div>
         </div>
 
     );
   }
 }
 

export default Login