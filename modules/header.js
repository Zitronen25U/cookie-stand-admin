import Link from 'next/link'

function Header(){
    return (
        <div>
          <h1 className="px-4 py-2 text-2xl bg-green-200"> Cookie Stand Admin</h1>
          <Link href="/overview" className="bg-red-400 border-2">
            <a className="px-3 m-3 py-1.5 ">Overview</a>
          </Link>
        </div>

      
    )
  }

export default Header 