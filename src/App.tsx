import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { TextField, Button } from '@mui/material';

import { cnApp } from './App.classname';
import { Comment } from './components/Comment/Comment';

import './App.css';

const App = () => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState<string[]>([]);

    const handleWriteComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    }

    const handleAddComment = () => {
        if (!comment.trim().length) {
            return;
        }

        setComments(prev => [...prev, comment]);
        setComment('');
    }

    return (
        <div className={cnApp()}>
            <h1 className={cnApp("Title")}>8.3 Работа с формами в React</h1>
            <h2 className={cnApp("Subtitle")}>Диванное</h2>

            <div className={ cnApp("Container") }>
                <TextField
                    className={cnApp("Textarea")}
                    onChange={handleWriteComment}
                    value={comment}
                    variant="outlined"
                    fullWidth
                    label="Напишите что-нибудь..."
                />
                <Button variant="outlined" onClick={handleAddComment}>&gt;</Button>
            </div>

            {comments.map(comment => <Comment text={comment} />)}
        </div>
    );
}

export default App;
