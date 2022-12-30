import { Link} from "react-router-dom"
import { FC } from "react"

 const Navbar: FC = () => {
    return (
    <nav className="nav">
        <Link to="/" className="site-title">
            Personal Website
        </Link>
        <ul>
            <Link to="/form">Form</Link>
            <Link to="/project">Project</Link> 
        </ul> 
    </nav>
    )
}

export default Navbar


// function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     )
// }