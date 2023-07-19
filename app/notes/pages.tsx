// in next js, components are server components by default
// so, they run on the server, and we can fetch data by using async await
import Link from 'next/link';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

function getNotes() {
    const res = await pb.collection('Todos').getList(1, 50, {
        filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
    })
    const data = await res.json()
    return data?.items as any[]
}
export default async function NotesPages() {
    const notes = await getNotes()
  return (
    <div>
        <h1>Notes</h1>
        <div>
            {notes?.map(n=>{
                return <Note key={n.id} note={n}/>
            })}
        </div>
    </div>
  )
}


function Note({note}:any){
    const {id,title,content,created} = note || {}

    return (
        <Link href={`/Todos/${id}`}>
            <div>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}