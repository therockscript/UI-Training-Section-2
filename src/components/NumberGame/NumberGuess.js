import { useState } from 'react';

let randomNumber=parseInt(Math.random()* 100);

function GuessTheNumber(){

	const[userNumber,setUserNumber]=useState();
	const[message,setMessage]=useState("");
  const[showRestart, setShowRestart]=useState();
  
  function onUserSubmit(e){
     if(isNaN(userNumber)){
     	setMessage("Please Enter the Number");
     	return;
     }

     if(userNumber < randomNumber){
      setMessage("Value is Smaller");
     } else if(userNumber > randomNumber){
      setMessage("Value is Greater");
     } else{
       setMessage("You Won...");
       setShowRestart(true);

     }
  }

  function onUserNumberChange(e){
  {/*console.log(e);*/}
     const value=e.target.value;
      if(value < 0 || value > 100){
      	return;
      }
      setUserNumber(e.target.value);
  }

  function onUserRestart(){
    randomNumber=parseInt(Math.random()* 100);
    setShowRestart(false);
    setMessage("");
    setUserNumber(0);

  }

return <div>
           {/*{randomNumber}
           <div>User Entered number : {userNumber}</div>*/} 

           <div className="container p-3">
	           <div>
		            <input type="number" value={userNumber} placeholder="Enter your Guess..." 
		            className="form-control" onChange={onUserNumberChange}/>
	           </div>

	            <div>
	                <button className="btn btn-success m-3" onClick={onUserSubmit}>Submit</button>
                  {showRestart &&
                    <button className="btn btn-warning" onClick={onUserRestart}>Restart</button>
                  }
	            </div>

	            <div>
                     {message}
	            </div>

           </div>

           <div>
           </div>
      </div>

}
export default GuessTheNumber;
