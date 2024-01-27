'use client'
import Link from "next/link";

export default function ListItem({result}) {  //이런식으로 쓸 수 있는데 Destructuring 문법 참조
    // const result = props.result; //이렇게 꺼내쓰든가
    return (
        <div>
            {
                result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link prefetch={false} href={'/detail/' + a._id}><h4>{a.title}</h4></Link>
                            <p>{a.content}</p>
                            <Link href={'/edit/' + a._id}>✏️</Link>
                            <span onClick={(e) => {
                            /*    fetch('api/post/delete', {method: 'DELETE', body: a._id})
                                    .then((r) => r.json())
                                    .then(r => {
                                        e.target.parentElement.style.opacity =  0;
                                        setTimeout(() => {
                                            e.target.parentElement.style.display =  'none';
                                        }, 1000);
                                    })*/
                                fetch('/api/post/delete/' +a._id.toString())
                                    .then((r) => r.json())
                                    .then(r => {
                                        e.target.parentElement.style.opacity =  0;
                                        setTimeout(() => {
                                            e.target.parentElement.style.display =  'none';
                                        }, 1000);
                                    })
                            }}>🗑️</span>️
                        </div>
                    )
                })
            }
        </div>
    )
}