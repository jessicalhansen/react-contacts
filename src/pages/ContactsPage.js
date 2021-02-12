import React from 'react';
import ContactsList from '../Components/ContactsList';

class ContactsPage extends React.Component {
    state = {
        contacts: [],
    }

    componentDidMount() {
        // const data = [
        //     {id: 1, name: 'John Doe', email: 'jdoe@gmail.com'},
        //     {id: 2, name: 'Sara Doe', email: 'sdoe@gmail.com'}
        // ];
        
        const data = fetch('https://jsonplaceholder.typicode.com/users')
            .then((result) => {
                // console.log(result);
                // result not yet json data, must be converted
                return result.json();
            })
            .then((jsonData) => {
                this.setState({
                    contacts: jsonData
                });
                console.log(jsonData);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        console.log('Contacts State = ', this.state);

    return (
        <ContactsList contacts={this.state.contacts} />
    )
    }
}

export default ContactsPage;
