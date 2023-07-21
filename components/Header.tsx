'use client';
import { useRouter } from "next/navigation";

interface HeaderProps {
    children: React.ReactNode,
    className?: string
}
const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const router = useRouter();
    const handleLogOut = () => {
        
    }
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}
export default Header;