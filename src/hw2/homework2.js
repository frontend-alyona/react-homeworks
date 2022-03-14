import React from "react"


// task 1
// userCard это компонент
// const UserCard = (props)=>{
//     return <div> 
//         <div>User Info: {this.state.userName}</div>
//         <div>User Name: </div>
//         <div>User Surname :</div>
//         <div>User Age: </div>
//     </div>
// }

const UserCardText = props =>{
    return <div>
        <div> <h3>My info :</h3>{props.userInfo} </div>
    </div>
}
export default class App extends React.Component{
    constructor(props){
        super(props);
    
        this.state ={
            // userName: 'Alena',
            // userSurname: 'Tyrnovaia',
            // userAge: 26
        }
        
    }
    // dataChecking(){
    //     if(this.userAge >=18){
    //         alert("Hello" + this.userName + " " + "take some drinks")
    //     }
    // }
    render(){
        return (
            <div>
                {/* <UserCard> 
                    <div> 
                        Привет {this.state.userName} {this.state.userSurname} {this.state.userAge}
                    </div>
                </UserCard> */}
                <UserCardText userInfo='Alena Tyrnovia, 26 y.o.'/>
                
            </div>
    )
    }
}


// task 2 

// export default class Form extends React.Component {
//     constructor() {
//     super();
//     this.state = {
//     input: {},
//     errors: {}

//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

// }

// handleChange(event) {
//     let input = this.state.input;
//     input[event.target.name] = event.target.value;

//     this.setState({ 
//         input

//     });

// }

// handleSubmit(event) {
//     event.preventDefault();

//     if(this.validate()){
//     console.log(this.state);
//     let input = {};
//     input["name"] = "";
//     input["surName"] = "";

//     this.setState({input:input});

//     alert('Welcome' + " " + this.state.input['name'] + " " + this.state.input['surName']);

//     }

// }

// validate(){
//     let input = this.state.input;
//     let errors = {};    
//     let isValid = true;

//     if (!input["name"]){
//     isValid = false;
//     errors["name"] = "Please enter your name.";

//     }
//     if(input['name'].length < 3){
//         errors["name"] = "Your name should be more than 3 letters.";
//     }
    
//     if (!input["surName"]) {
//     isValid = false;
//     errors["surName"] = "Please enter your surName";

//     }
    

//     this.setState({
//     errors: errors

//     });
//     return isValid;

// }

// render() {
//     return (
//     <div>
//         <form className="form" onSubmit={this.handleSubmit}>
//             <div >
//                 <input type="text" name="name" 
//                 value={this.state.input.name}
//                 onChange={this.handleChange}
//                 class="form-control" 
//                 placeholder="Enter name" 
//                 id="name" />
//                 <div className="text-danger">{this.state.errors.name}</div>
//             </div>

//             <div >
//                 <input type="text" name="surName" 
//                 value={this.state.input.email}
//                 onChange={this.handleChange}
//                 class="form-control" 
//                 placeholder="Enter surName" 
//                 id="surName" />
//                 <div >{this.state.errors.surName}</div>
//             </div>
//             <button type="submit" value="Submit" >Submit</button>
//         </form>
//     </div>

//     );
// }

// }

// task 3
// const INTERVAL = 100;

// export default class Timer extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {value: 0};
//     }

//     increment(){
//         this.setState({value: this.state.value + 1});
//     }

//     componentDidMount() {
//         this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }

//     render() {
//         const value = this.state.value
//         return (
//         <div>
//             <h1>Timer:</h1>
//             <p className="timer-num">
//                 <span >{Math.round(value/INTERVAL/60/60)} : </span>
//                 <span>{Math.round(value/INTERVAL/60)} : </span>
//                 <span>{Math.round(value/INTERVAL)} . </span>
//                 <span>{value % INTERVAL}</span>
//             </p>
//         </div>
//         );
//     }
// }
