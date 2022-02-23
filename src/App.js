import React from "react"
import './App.css';

// const Navigation = (props) =>{
//   return <div >
//     <div>{props.home}</div>
//     <div>{props.new}</div>
//     <div>{props.callBack}</div>
//     <div>{props.contacts}</div>
//     <div>{props.currentPage}</div>
//   </div>
// }
// class Home extends React.Component{
//   constructor(props){
//     super (props);

//     this.state = {
//       currentPage: ""
//     };
//   }

//   handleClick = ()=> {
//         this.setState({currentPage : this.state.currentPage + "home page" })
        
//   }
//   render(){
//     return (
//       <div className="wrapper">
//         <div className="tips-page">{this.state.currentPage}</div>
//         {/* <Navigation home = "Home" onClick={this.handleClick} />   */}
//         <div onClick={this.handleClick}>Home </div>
//       </div>
//     )
//   }
// }
// export default Home


export function HomePage(props) {
  return (
    <button onClick={props.onClick}>
      Home
    </button>
  );
}

export function NewPage(props) {
  return (
    <button onClick={props.onClick}>
      New
    </button>
  );
}

export function CallbackPage(props) {
  return (
    <button onClick={props.onClick}>
      Callback
    </button>
  );
}

export function ContactsPage(props) {
  return (
    <button onClick={props.onClick}>
      Contacts
    </button>
  );
}

class PageControl extends React.Component{
  constructor(props) {
    super(props);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleNewClick = this.handleNewClick.bind(this);
    this.handleCallbackClick = this.handleCallbackClick.bind(this);
    this.handleContactsClick = this.handleContactsClick.bind(this);
    this.state = {home:"home"}
    this.state = {new:"new"}
    this.state = {callback:"callback"}
    this.state = {contacts:"contacts"}
  }

  handleHomeClick(){
    this.setState({home: "home"});
  }
  handleNewClick(){
    this.setState({new:"new"})
  }
  handleCallbackClick(){
    this.setState({callback:"callback"})
  }
  handleContactsClick(){
    this.setState({contacts: "contacts"})
  }

  render(){
    const currentPageHome = this.state.home
    const currentPageNew= this.state.new;
    const currentPageCallback =this.state.callback;
    const currentPageContacts = this.state.contacts
    let button

    if(currentPageHome){
      button = <HomePage onClick={this.handleHomeClick}/>
    } 
    if(currentPageNew){
      button = <NewPage onClick={this.handleNewClick}/>

    }
    if(currentPageCallback){
      button =  <CallbackPage onClick={this.handleCallbackClick}/>
    }
    if(currentPageContacts){
      button = <ContactsPage onClick= {this.handleContactsClick}/>
    }

    return(
      <div>
        <HomePage currentPageHome={'home'}/>
        <NewPage currentPageNew={'new'}/>
        <CallbackPage currentPageCallback={'callback'} />
        <ContactsPage currentPageContacts={"contacts"} />
        {button}
      </div>
    )
    
  }
}

export default PageControl

