import React, {useState, useEffect} from 'react'
import API from '../../src/api';

const UserData = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        getUsersData();
    }, []);

    useEffect(() =>{
        console.log('user updated', users.length);
    }, [users]);

    // Get 
    const getUsersData = () => {
        API.get('users').then(resp => {
            console.log('response:', resp.data);
            if(resp && resp.data) {
                setUsers(resp.data);
            }
        }).catch(e => {
            console.warn(e)
        })
    }


    const saveUsersData = () => {
        const user = {
            name: 'Trinethra Reddy'
        }
        
        // Create (post)
        API.post('users', user).then(resp => {
           
            if(resp && resp.data) {
                const tempUser = [...users];
                tempUser.push(resp.data);
                setUsers(tempUser);
            }
        }).catch(e => {
            console.warn(e);
        })
    }

    // Update (put)
    const updateUsersData = (user, index) => {
        const updatedUser = {
            ...user,
            name: 'Trinethra Reddy'
        }

        API.put('users/'+user.id, updatedUser).then(resp => {
           
            if(resp && resp.data) {
                const tempUser = [...users];
                tempUser[index] = resp.data;
                setUsers(tempUser);
            }
        }).catch(e => {
            console.warn(e);
        })
    }

    // Delete
    const deleteUsersData = (user, index) => {

        API.delete('users/'+user.id).then(resp => {
           
            if(resp && resp.data) {
                const tempUser = [...users];
                tempUser.splice(index, 1);
                setUsers(tempUser);
            }
        }).catch(e => {
            console.warn(e);
        })
    }
    
    return (
        <div>
            <h1>User Data</h1>
            <button type="button" onClick={saveUsersData}>Create User</button>
            {users.map((user, index) => (
                <div key={index}>
                    <span>ID: {user.id} </span>
                    <span>Name: {user.name}</span>
                    <button type="button" onClick={()=> updateUsersData(user, index)}>Update User</button>
                    <button type="button" onClick={()=> deleteUsersData(user, index)}>Delete User</button>
                </div>
            ))}
        </div>
    )
}


export default UserData;
