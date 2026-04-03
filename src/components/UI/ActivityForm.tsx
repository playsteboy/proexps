import React, { useEffect } from 'react';
import useShowActivity from '../../hooks/useShowActivity';
import useUpdateActivity from '../../hooks/useUpdateActivity';
import ActivityCreator from './ActivityCreator';
import Button from './Button';
export default function ActivityForm() {
    const { show, activities, loading } = useShowActivity();
    const [onEdit, setOnEdit] = React.useState(false);
    const { updateActivity } = useUpdateActivity();

    const handleActivityUpdate = async (activity) => {
        await updateActivity(activity);
        show();
    }

    useEffect(() => { show(); }, []);

    return (
        <div className='flex flex-col items-center gap-4'>
            <h1>Activity List</h1>
            {onEdit ? (
                <ActivityCreator onRefresh={() => { setOnEdit(false); show(); }} />
            ) : (
                <Button onClick={() => setOnEdit(true)} text="Add Activity" bgColor="bg-yellow-400" />
            )}

            {/* Pas de <form> ici ! */}
            <section className='w-full'>
                {loading ? <p>Loading...</p> : (
                    <ul className="gap-2 flex flex-col">
                        {activities.map((activity) => (
                            <li key={activity.id} className="flex gap-2">
                                <input type="text" defaultValue={activity.name}/>
                                <input type="number" defaultValue={activity.moneyIn}/>
                                <input type="number" defaultValue={activity.moneyOut}/>
                                <input type="date" defaultValue={activity.date}/>
                                <button onClick={() => {handleActivityUpdate}}>Edit</button>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}