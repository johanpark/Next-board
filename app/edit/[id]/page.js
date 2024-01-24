import {connectDB} from "@/util/database";
import {ObjectId} from "mongodb";

export default async function Edit(props) {
    const db = (await connectDB).db("board");
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    return (
        <div className="p-20">
            <h4>글 수정</h4>
            <form action="/api/edit" method="POST">
                <input type="hidden" name="id" defaultValue={result._id.toString()}/>
                <input name="title" defaultValue={result.title}></input>
                <input name="content" defaultValue={result.content}></input>
                <button type="submit">작성</button>
            </form>
        </div>
    )
}