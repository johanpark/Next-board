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
                            <span onClick={() => {
                                fetch('/delete', {
                                    method: 'DELETE',
                                    body : JSON.stringify()
                                }).then(() => {
                                    return res.status(200).redirect('/list');
                                    })
                            }}>🗑️</span>️
                        </div>
                    )
                })
            }
        </div>
    )
}