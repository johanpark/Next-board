export default function Write() {
    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post" method="POST">
                <input name="title" placeholder="제목써"></input>
                <input name="content" placeholder="내용써"></input>
                <button type="submit">작성</button>
            </form>
        </div>
    )
}