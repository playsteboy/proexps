import React, { useEffect } from 'react';
import useShowActivity from '../../hooks/useShowActivity';
import useUpdateActivity from '../../hooks/useUpdateActivity';
import ActivityCreator from './ActivityCreator';
import Activity from '../../models/ActivityModel';
export default function ActivityForm() {
    const { show, activities, loading } = useShowActivity();
    const [onEdit, setOnEdit] = React.useState(false);
    const { updateActivity } = useUpdateActivity();

    const handleActivityUpdate = async (activity: Activity) => {
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
                <button type='button' onClick={() => setOnEdit(true)} className="bg-yellow-400 text-white p-2 rounded">Add Activity</button>
            )}

            {/* Pas de <form> ici ! */}
            <section className='w-full'>
                {loading ? <p>Loading...</p> : (
                    <ul className="gap-2 flex flex-col">
                        {activities.map((activity) => (
                            <li key={activity.getId()} className="flex gap-2">
                                <input type="text" defaultValue={activity.getName()} placeholder="Activity Name"/>
                                <input type="number" defaultValue={activity.getMoneyIn()} placeholder="Money In"/>
                                <input type="number" defaultValue={activity.getMoneyOut()} placeholder="Money Out"/>
                                <input type="date" defaultValue={activity.getDate()?.toString()} placeholder="Date"/>
                                <button type='button' onClick={() => {handleActivityUpdate(activity)}}>Edit</button>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
}