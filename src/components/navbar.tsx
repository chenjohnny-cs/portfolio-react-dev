import { Link, useMatch, useResolvedPath } from 'react-router-dom';

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
    [key: string]: any;
}

export default function NavigationBar() {
    return <nav className="nav">
        <Link to="/" className="title">Junyu Chen</Link>
         <ul>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/project">Projects</CustomLink> 
            <CustomLink to="/contact">Contact Me</CustomLink>
            <CustomLink to="/resume">Resume</CustomLink>
         </ul>
    </nav>
}

function CustomLink({to, children, ...props} : CustomLinkProps) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
