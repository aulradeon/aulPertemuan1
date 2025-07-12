import Link from "next/link"

function Header() {
  const luping = ["home", "blogs", "partners", "contacts","about"]
  const headerTitle = "NeonTech"
  return (
    <header className="flex gap-4 p-2.5 bg-white">
      <img alt="nope" />
      <h1 className="text-xl font-bold bg-gradient-to-r from-[#ad0e8d] to-[#7d00d1] bg-clip-text text-transparent">{headerTitle}</h1>
      <nav className='self-center ml-auto mr-4'>
        <ul className="flex flex-row gap-5 justify-end">
          {luping.map(num => <li key={`${num}`}><Link className='text-sm text-[#7d00d1]' href={num == "home" ? '/' : `${num}`}>{num.charAt(0).toUpperCase() + num.slice(1)} </Link></li>)}
        </ul>
      </nav>
    </header>
  )
}


export default Header
