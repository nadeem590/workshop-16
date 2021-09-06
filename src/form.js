// import React, { Component } from 'react'

//  class Form extends Component {
//      constructor(props) {
//          super(props)
     
//          this.state = {
//               FullName:"",
//             //   Email:"",
//             //   MobileNo:"",
//             //   Password:"",
//             //   ConfirmPassword:""

//          }
//      }
//      Handle=(e)=>{
//      e.preventDefault();
//      }
//      componentDidMount(){
//          const getData=async()=>{
//             const data=await fetch('http://localhost:5000/loginapi', {
//                 headers : { 
//                   'Content-Type': 'application/json',
//                   'Accept': 'application/json'
//                  }}).then((response) => response.json()).then((messages) => {console.log("messages");});
//             const res=await data.json();
//             this.setState({
//                 FullName:res.FullName
//             })
//             // console.log(this.state.FullName)
//             getData();
//          }
//          console.log(this.state.FullName)

         
//      }
//      changeMe=(e)=>{
//      this.setState({
//          FullName:e.target.name
//      })
//      }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.Handle}>
//                     <input type="text" name="FullName"  onChange={this.changeMe}/>
//                 <button type="submit">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Forma
