import React, { useState } from 'react';
import { SelectChangeEvent, Select, MenuItem } from '@mui/material';

import { cnReaction } from './Reaction.classname';

import './Reaction.css';

const reactions = ['🙂', '👍', '👎', '❤️', '😅', '🎉', '😡', '✅'];

const Reaction = () => {
    const [emoji, setEmoji] = useState('');

    const handleChangeEmoji = (event: SelectChangeEvent) => {
        setEmoji(event.target.value);
    };

    return (
        <div className={cnReaction()}>
            <Select
                sx={{minWidth: 65}}
                className={cnReaction("SelectButton")}
                value={emoji}
                onChange={handleChangeEmoji}
                label="emoji"
            >
                {reactions.map((reaction) => <MenuItem key={reaction} value={reaction}>{reaction}</MenuItem>)}
            </Select>
        </div>
    );
}

export { Reaction };