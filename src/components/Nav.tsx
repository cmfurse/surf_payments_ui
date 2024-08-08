
import { Menubar } from 'primereact/menubar';
import {MenuItem} from 'primereact/menuitem';
import {useNavigate} from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();

    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                navigate("/");
            }
        },
        {
            label: 'Users',
            icon: 'pi pi-star',
            command: () => {
                navigate("/users");
            }
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        