import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";
import Link from "next/link";
import Comment from "@/app/detail/[id]/Comment";

export default async function Detail(props) {
    const db = (await connectDB).db("board");
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})
    return (
        <div>
            <h4>상세페이지임</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <Comment></Comment>

            <Link href='/list'>목록으로</Link>
        </div>
    )
}