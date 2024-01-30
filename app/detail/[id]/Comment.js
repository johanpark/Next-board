'use client'
import {useState} from "react";

export default function Comment() {
    const [comment, setComment] = useState('');
    return (
        <div>
            <div>댓글목록</div>
            <input onChange={(e) => {
                setComment(e.target.value)
            }}/>
            <button onClick={() => {
                fetch('/api/post/comment/new',
                    {
                        method: 'POST',
                        body: comment
                    })
            }}>댓글 전송
            </button>
        </div>
    )
}