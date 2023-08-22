import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

export function Header(){
    return (
        <header>
            <nav>
                <Link to='/'>
                Dev Shop 
                </Link>
            </nav>
        </header>
    )
}