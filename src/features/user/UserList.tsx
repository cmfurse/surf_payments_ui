import {useEffect, useState} from "react";
import api from "../../api.ts";
import {Page} from "../../models/Page.ts";
import {User} from "../../models/User.ts";
import {Link} from "react-router-dom";
import {ProgressSpinner} from "primereact/progressspinner";

export default function UserList() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        setLoading(true);

        api.get<Page<User>>("users/").then(resp => {
            setUsers(resp.results);
        })
        .finally( () => {
            setLoading(false);
        });
    }, []);

    return(
        <div>
            <h1>UserList</h1>
            <h2>{loading}</h2>
            <div>
                {loading ? <ProgressSpinner /> :
                    users.map((user) => (
                        <div key={user.id}>
                            <div><Link to={`/users/${user.id}`}>{user.email}</Link></div>
                            <div>{user.email}</div>
                            <div>{user.first_name}</div>
                            <div>{user.last_name}</div>
                            <div>{user.phone}</div>
                            <div>{user.is_active}</div>
                            <div>{user.player_name}</div>
                            <div>{user.balance}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

