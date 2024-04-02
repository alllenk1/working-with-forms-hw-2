import React from 'react';
import type { FC } from 'react';

import { cnComment } from './Comment.classname';
import { Reaction } from '../Reaction/Reaction';

import './Comment.css';

type CommentProps = {
    text: string,
}

const Comment: FC<CommentProps> = ({ text }) => {
    return (
        <div className={cnComment()}>
            <p className={cnComment("Text")}>{text}</p>
            <Reaction />
        </div>
    );
}

export { Comment };