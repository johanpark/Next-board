export default function Join() {
    return (
        <div>
            <form action="/api/join" method="POST">
                <input name="name" placeholder="이름"></input>
                <input name="id"></input>
                <input type="password" name="password"></input>
                <button type="submit">가입</button>
            </form>
        </div>
    )
}