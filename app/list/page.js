import {connectDB} from "@/util/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";
import ListItem from "@/app/list/ListItem";

export default async function List() {

    const db = (await connectDB).db("board");
    const result = await db.collection('post').find().toArray();

    return (
        <div className="list-bg">
            <ListItem result={result}/>
        </div>
    )
}