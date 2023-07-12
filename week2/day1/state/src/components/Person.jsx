import React, {useState} from 'react';

const Person = ({firstName, lastName, age, hairColor}) => {
    const [currentAge, setCurrentAge] = useState(age);

    const celebrateBirthday = () => {
    setCurrentAge(currentAge + 1);

};
    return (
        <div>
           <h1>{lastName}, {firstName}</h1> 
            <p>Age: {currentAge}</p>
            <p>hair Color: {hairColor}</p>
            <button onClick={celebrateBirthday}>Happy Birthday</button>
        </div>
    );
}

export default Person