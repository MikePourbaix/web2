import {User} from '../types';
import UserCard from './UserCard';

const users: User[] = [
    {
        name: 'Alice',
        age: 25,
        isOnline: true
    },
    {
        name: 'Bob',
        age: 30,
        isOnline: false
    },
    {
        name: 'Charlie',
        age: 35,
        isOnline: true
    }
];

const App = () => {
    return (
        <div>
            {users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
        </div>
    );
};

export default App;