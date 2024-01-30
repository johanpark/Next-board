import {connectDB} from "@/util/database";
import bcrypt from "bcrypt";
import {ObjectId} from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const body = req.body;
        if(body.email === '' || body.password === '' || body.name === '') {
            return res.status(500).json('빈칸 채워와라');
        }
        //패스워드 암호화
        body.password = await bcrypt.hash(body.password, 10);

        const db = (await connectDB).db('board');
        const collection = await db.collection('member');
        const memberList = await collection.findOne({email : body.email})
        if (memberList) {
            return res.status(500).json('아이디 중복이요');
        }
        await db.collection('member').insertOne(body);
        res.status(200).json('회원가입 성공');
    }
}