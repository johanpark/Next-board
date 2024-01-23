'use client'
import {useRouter} from "next/navigation";

export default function DetailLink() {
    let router = useRouter() //use client에서만 사용 가능
    return (
        <button onClick={() => {
            router.push('/')
        }}>버튼쓰</button>
    )
}