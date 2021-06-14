import { useState } from "react";

let randomNumber = parseInt(Math.random() * 100);

function GuessTheNumber() {

    const [userNumber, setUserNumber ] = useState();
    const [message, setMessage] = useState("");
    const [showRestart, setShowRestart] = useState(false);

    function onUserNumberChange(e) {
        const value = e.target.value;
        if (value < 0 || value > 100) {
            return;
        }
        setUserNumber(e.target.value);
    }

    function onUserSubmit(e) {
        if (userNumber === "") {
            setMessage("Please enter the number");
            return;
        }
        if (userNumber < randomNumber) {
            setMessage("You entered lesser number");
        } else if (userNumber > randomNumber) {
            setMessage("You entered greater number");
        } else {
            setMessage("You won !!!");
            setShowRestart(true);
        }
    }

    function onUserRestart() {
        randomNumber = parseInt(Math.random() * 100);
        setUserNumber(0);
        setShowRestart(false);
        setMessage("");
    }

    return <div>
        {/* {randomNumber} */}
        {/* <div>User Entered number : {userNumber}</div> */}
        <div>
            <input 
                type="number" 
                value={userNumber} 
                onChange={onUserNumberChange}
                placeholder="Enter your guess.."
            />
        </div>
        <div>
            <button type="button" onClick={onUserSubmit}>Submit</button>
            {showRestart && 
                <button type="button" onClick={onUserRestart}>Restart</button>
            }
            
        </div>
        <div>
            {message}
        </div>
    </div>
}

export default GuessTheNumber;
