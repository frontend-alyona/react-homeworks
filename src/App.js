import React from "react"
import './App.css';

// export function HomePage(props) {
//   return (
//     <button onClick={props.onClick}>
//       Home
//     </button>
//   );
// }

// export function NewPage(props) {
//   return (
//     <button onClick={props.onClick}>
//       New
//     </button>
//   );
// }

// export function CallbackPage(props) {
//   return (
//     <button onClick={props.onClick}>
//       Callback
//     </button>
//   );
// }

// export function ContactsPage(props) {
//   return (
//     <button onClick={props.onClick}>
//       Contacts
//     </button>
//   );
// }

// class PageControl extends React.Component{
//   constructor(props) {
//     super(props);
//     this.handleHomeClick = this.handleHomeClick.bind(this);
//     this.handleNewClick = this.handleNewClick.bind(this);
//     this.handleCallbackClick = this.handleCallbackClick.bind(this);
//     this.handleContactsClick = this.handleContactsClick.bind(this);
//     this.state = {home:"home"}
//     this.state = {new:"new"}
//     this.state = {callback:"callback"}
//     this.state = {contacts:"contacts"}
//   }

//   handleHomeClick(){
//     this.setState({home: "home"});
//   }
//   handleNewClick(){
//     this.setState({new:"new"})
//   }
//   handleCallbackClick(){
//     this.setState({callback:"callback"})
//   }
//   handleContactsClick(){
//     this.setState({contacts: "contacts"})
//   }

//   render(){
//     const currentPageHome = this.state.home
//     const currentPageNew= this.state.new;
//     const currentPageCallback =this.state.callback;
//     const currentPageContacts = this.state.contacts
//     let button

//     if(currentPageHome){
//       button = <HomePage onClick={this.handleHomeClick}/>
//     } 
//     if(currentPageNew){
//       button = <NewPage onClick={this.handleNewClick}/>

//     }
//     if(currentPageCallback){
//       button =  <CallbackPage onClick={this.handleCallbackClick}/>
//     }
//     if(currentPageContacts){
//       button = <ContactsPage onClick= {this.handleContactsClick}/>
//     }

//     return(
//       <div>
//         <HomePage currentPageHome={'home'}/>
//         <NewPage currentPageNew={'new'}/>
//         <CallbackPage currentPageCallback={'callback'} />
//         <ContactsPage currentPageContacts={"contacts"} />
//         {button}
//       </div>
//     )
    
//   }
// }

// export default PageControl


const Home = () => {
    return <div>Home page</div>;
};

const News = () => {
    return <div>News page</div>;
};

const CallBack = () => {
    return <div>CallBack page</div>;
};

const Contacts = () => {
    return <div>Contacts page</div>;
};

class PageControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentPage: '',
          
        };
        this.page = '';
        
    }

    handleClick(page) {
        this.setState({currentPage: this.state.currentPage = page});
        if (page === 'home') {
            this.page = <Home/>
        }
        if (page === 'news') {
            this.page = <News/>
        }
        if (page === 'callBack') {
            this.page = <CallBack/>
        }
        if (page === 'contacts') {
            this.page = <Contacts/>
        }
        console.log(this.state.currentPage)
    }

    render() {
        return <div>
            <div className='wrapper'>
                <div className='btn' onClick={() => this.handleClick('home')}>Home</div>
                <div className='btn' onClick={() => this.handleClick('news')}>News</div>
                <div className='btn' onClick={() => this.handleClick('callBack')}>Callback</div>
                <div className='btn' onClick={() => this.handleClick('contacts')}>Contacts</div>
            </div>
            {this.page}
        </div>
    }
}

export default PageControl

  
