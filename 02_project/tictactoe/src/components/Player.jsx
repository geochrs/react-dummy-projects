import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(prevEditing => !prevEditing);
    }

    const handleChange = (evt) => {
        setPlayerName(evt.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = (<input type="text" value={playerName} onChange={handleChange} required />)
        btnCaption = 'Save'
    }

    return (
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}