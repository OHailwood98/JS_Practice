import React from "react";

function formComp(props){
    return(
        <div>
      <form>
      input type="text" name="firstName" value={props.data.firstName} placeholder="first name" onChange={props.dataChange}
        <br/>
        <br/>
        <input type="text" name="sirname" value={props.data.sirame} placeholder="sirname" onChange={props.dataChange} />
        <br />
        <br/>
        <input type="number" name="age" value={props.data.age} placeholder="age" onChange={props.dataChange} />
        <br/>
        <br/>
        <label> Male <input type="radio" name="gender" value="male" checked={props.data.gender === "male"} onChange={props.dataChange} /> </label>
        <br/>
        <label>Female <input type="radio" name="gender" value="female" checked={props.data.gender === "female"} onChange={props.dataChange} /> </label>
        <br/>
        <br/>
        <label>Choose a Destination  :
          <select value={props.data.destination} name="destination" onChange={props.dataChange}>
            <option>London</option>
            <option>Madrid</option>
            <option>Paris</option>
            <option>Berlin</option>
            <option>Amsterdam</option>
          </select> 
        </label>
        <br/>
        <br/>
        <label>Do you have any dietary requirements?</label>
        <br/>
        <label> Vegeterian :
            <input type="checkbox" name="vegi" checked={props.data.vegi} onChange={props.dataChange}/>
        </label>
        <label> Vegan :
            <input type="checkbox" name="vegan" checked={props.data.vegan} onChange={props.dataChange}/>
        </label>
        <label> Nuts :
            <input type="checkbox" name="nuts" checked={props.data.nuts} onChange={props.dataChange}/>
        </label>
      </form>
      <p>name: {props.data.firstName} {props.data.sirname} age: {props.data.age} gender: {props.data.gender} destination: {props.data.destination} </p>
    </div>
    );
}

export default formComp;