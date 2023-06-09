import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";


const RandomUserForm = ({ onGetDat }) => {
    const extentsList = ["location", "email", "dob", "registered", "phone", "cell", "login"];

    const [quantity, setQuantity] = useState("");
    const [gender, setGender] = useState("");
    const [extents, setExtents] = useState(extentsList);
    const [extent, setExtent] = useState("");
    const [checkedExtents, setCheckedExtents] = useState({
        location: false,
        email: false,
        dob: false,
        registered: false,
        phone: false,
        cell: false,
        login: false
    });

    let extentOption = "";

    const getDataHandler = (event) => {
        event.preventDefault();
        const userResults = quantity ? `&results=${quantity}` : "";
        const userGender = gender ? `&gender=${gender}` : "";
        const userExtents = Object.keys(checkedExtents).filter((key) => checkedExtents[key]).toString();
        let userExtent = "";
        if (extent) {
            userExtent = `&inc=name,picture,${extent}`;
        } else if (userExtents) {
            userExtent = `&inc=name,picture,${userExtents}`;
        }
        onGetDat(`https://randomuser.me/api/?${userResults}${userGender}${userExtent}`);
        setQuantity("");
        setGender("");
        setExtent("");
        setCheckedExtents({
            location: false,
            email: false,
            dob: false,
            registered: false,
            phone: false,
            cell: false,
            login: false
        });
    };

    const addQuantityHandler = (event) => setQuantity(event.target.value);
    const addGenderHandler = (event) => setGender(event.target.value);
    const getExtentHandler = (event) => setExtent(event.target.value);

    if (extents.length > 0) {
        extentOption = extents.map((item, index) => (
            <option key={index} value={item}>
                {item}
            </option>
        ));
    }

    const checkedExtentsHandler = (event) => {
        const { value, checked } = event.target;
        setCheckedExtents((prevState) => ({
            ...prevState,
            [value]: checked
        }));
    };


    return (
        <form className="random-user-form" onSubmit={getDataHandler}>
            <div className="input-content">
                <label htmlFor="input-quantity">Write Quantity</label>
                <input id="input-quantity" min="1" max="500" type="number" value={quantity} onChange={addQuantityHandler}></input>
            </div>
            <div className="input-content">
                <fieldset onChange={addGenderHandler}>
                    <legend>Gender</legend>
                    <input id="male" value="male" type="radio" name="gender"></input>
                    <label htmlFor="male">Male</label>
                    <input id="female" value="female" type="radio" name="gender"></input>
                    <label htmlFor="female">Female</label>
                </fieldset>
            </div>
            {extents.length > 0 ?
                <div className="input-content">
                    
                    <select value={extent} onChange={getExtentHandler}>
                        <option value="" disabled>--Including--</option>
                        {extentOption}
                    </select>
                </div> : ""}
            <div className="input-content">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="location"
                                checked={checkedExtents.location}
                                onChange={checkedExtentsHandler}
                                value="location"
                            />
                        }
                        label="Location"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="email"
                                checked={checkedExtents.email}
                                onChange={checkedExtentsHandler}
                                value="email"
                            />
                        }
                        label="Email"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="dob"
                                checked={checkedExtents.dob}
                                onChange={checkedExtentsHandler}
                                value="dob"
                            />
                        }
                        label="Dob"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="registered"
                                checked={checkedExtents.registered}
                                onChange={checkedExtentsHandler}
                                value="registered"
                            />
                        }
                        label="Registered"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="phone"
                                checked={checkedExtents.phone}
                                onChange={checkedExtentsHandler}
                                value="phone"
                            />
                        }
                        label="Phone"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="cell"
                                checked={checkedExtents.cell}
                                onChange={checkedExtentsHandler}
                                value="cell"
                            />
                        }
                        label="Cell"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                id="login"
                                checked={checkedExtents.login}
                                onChange={checkedExtentsHandler}
                                value="login"
                            />
                        }
                        label="Login"
                    />
                </FormGroup>
            </div>
            <button type="submit">Get</button>
        </form>
    )
}
export default RandomUserForm
