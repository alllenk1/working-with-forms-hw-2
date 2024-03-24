import React, {ChangeEvent, useState} from 'react';

import { cnFeed } from './Feed.classname';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

import './Feed.css';

type CommentProps = {
    text: string,
    emoji?: string
}

const reactions = ['🙂', '👍', '👎', '❤️', '😅', '🎉', '😡', '✅'];

const Feed = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<CommentProps[]>([]);
    const [emoji, setEmoji] = useState('');

    const handleUpdateComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    }

    const handleChangeEmoji = (event: SelectChangeEvent) => {
        setEmoji(event.target.value);

        comments.map((comment) => comment.emoji = emoji);
    };

    const handleAddComment = () => {
        setComments(prev => {
            return [
                ...prev,
                { text: comment },
            ];
        });

        setComment('');
    }

    return (
        <div className={ cnFeed() }>
            <div className={ cnFeed("Container") }>
                <TextField
                    className={cnFeed("Textarea")}
                    onChange={handleUpdateComment}
                    value={comment}
                    variant="outlined"
                    fullWidth
                    label="Напишите что-нибудь..."
                />
                <Button variant="outlined" onClick={handleAddComment}>&gt;</Button>
            </div>

            {
                comments.map((comment, index) =>
                    <div className={cnFeed("Post")} key={index}>
                        <p className={cnFeed("Text")}>{comment.text}</p>

                        <Select
                            sx={{minWidth: 65}}
                            className={cnFeed("SelectButton")}
                            value={comment.emoji}
                            onChange={handleChangeEmoji}
                            label="emoji"
                        >
                            {
                                reactions.map((reaction) =>
                                    <MenuItem key={reaction} value={reaction}>{reaction}</MenuItem>)
                            }
                        </Select>
                    </div>)
            }
        </div>
    );
}

export { Feed };