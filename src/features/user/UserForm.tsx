import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../../api.ts";
import {User} from "../../models/User.ts";
import {ProgressSpinner} from "primereact/progressspinner";
import {useForm} from "react-hook-form";

export default function UserForm() {
    const { id } = useParams();
    const isNew = (id === 'create');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        // setValue,
        handleSubmit,
        // formState: { errors },
        reset,
    } = useForm<User>()

    const onSubmit = handleSubmit((data) => {
        setLoading(true);
        if (isNew) {
            api.post("/users/", data).then(() => {
                navigate("/users");
            })
        } else {
            api.put(`/users/${id}/`, data).then(() => {
                navigate("/users");
            })
        }
    });

    useEffect(() => {
        if (isNew) {
            return;
        }
        setLoading(true);
        api.get<User>(`users/${id}`).then(resp => {
            reset(resp);
        })
        .finally( () => {
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <ProgressSpinner />
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='hidden' {...register("id")} />
            <label>Email</label>
            <input {...register("email")} />
            <label>First Name</label>
            <input {...register("first_name")} />
            <label>Last Name</label>
            <input {...register("last_name")} />
            <label>Active</label>
            <input type="checkbox" {...register("is_active")} />
            <label>Player Name</label>
            <input {...register("player_name")} />
            <label>Balance</label>
            <input {...register("balance")} />
            <button type="submit">Save</button>
        </form>
    );
}