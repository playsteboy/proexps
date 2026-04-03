import Footer from '../../components/Layout/Footer'
import React, { useEffect } from 'react';
import useShowActivity from '../../hooks/useShowActivity';
import useUpdateActivity from '../../hooks/useUpdateActivity';
import ActivityForm from '../../components/UI/ActivityForm';
import Activity from '../../models/ActivityModel';
import useDeleteActivity from '../../hooks/useDeleteActivity';
export default function Expenses() {
     const { show, activities, loading } = useShowActivity();
    const [onAdd, setOnAdd] = React.useState(false);
    const { updateActivity } = useUpdateActivity();
    const { deleteActivity } = useDeleteActivity();
    const handleActivityUpdate = async (activity: Activity) => {
        await updateActivity(activity);
        show();
    }

    const handleActivityDelete = async (id: number) => {
        await deleteActivity(id);
        show();
    }

    useEffect(() => { show(); }, []);
    console.log(activities);
    return (
    <div className='flex flex-col items-center gap-4 w-full h-full position-relative'>
        <section className='w-full p-4 flex flex-col items-center gap-4 justify-center'>
            <p>Here you can manage your expenses.</p>  
        <div className='flex flex-col items-center gap-4 w-full'>
            <h1>Activity List</h1>
            <table className='table-auto border-collapse w-full'>
                <thead>
                    <tr>
                        <th className='font-bold'>Name</th>
                        <th className='font-bold'>Money In</th>
                        <th className='font-bold'>Money Out</th>
                        <th className='font-bold'>Date</th>
                        <th className='font-bold'>Balance</th>
                        <th className='font-bold'>Actions</th>
                    </tr>
                </thead>
                {loading ? <p>Loading...</p> : (
                    <tbody className="gap-2 w-full">
                        {activities.map((activity:Activity) => (
                            <tr key={activity.getId()} className="justify-between items-center w-full">
                                <td>
                                    <input name='name' type="text" defaultValue={activity.getName()} placeholder="Name" className='w-full border-2 border-gray-300 p-1 rounded'/>
                                </td>
                                <td>
                                    <input name='moneyIn' type="number" defaultValue={activity.getMoneyIn()} placeholder="Money In" className='w-full border-2 border-gray-300 p-1 rounded'/>
                                </td>
                                <td>
                                    <input name='moneyOut' type="number" defaultValue={activity.getMoneyOut()} placeholder="Money Out" className='w-full border-2 border-gray-300 p-1 rounded'/>
                                </td>
                                <td>
                                    <input name='date' type="date" defaultValue={activity.getDate() ? new Date(activity.getDate()!).toISOString().split('T')[0] : ''} placeholder="Date" className='w-full border-2 border-gray-300 p-1 rounded'/>
                                </td>
                                <td>
                                    <p className='border-2 border-gray-300 p-1 rounded w-full'>{(activity.getMoneyIn()||0)-(activity.getMoneyOut()||0)}</p>
                                </td>
                                <td>
                                    <div className='w-full flex flex-row'>
                                        <button type='button' onClick={(e) => {
                                            const row = e.currentTarget.closest('tr');
                                            const name = (row?.querySelector('input[name="name"]') as HTMLInputElement).value;
                                        const moneyIn = parseFloat((row?.querySelector('input[name="moneyIn"]') as HTMLInputElement).value);
                                        const moneyOut = parseFloat((row?.querySelector('input[name="moneyOut"]') as HTMLInputElement).value);
                                        const date = (row?.querySelector('input[name="date"]') as HTMLInputElement).value;
                                        const updatedActivity = new Activity(
                                            name,
                                            activity.getDescription() || "",
                                            moneyIn,
                                            moneyOut,
                                            date ? new Date(date) : new Date(),
                                            activity.getId()
                                            );
                                            handleActivityUpdate(updatedActivity);
                                        }}
                                        className='bg-blue-400 text-white p-2 rounded'>
                                            Edit</button>
                                    <button type='button' onClick={() => {handleActivityDelete((activity.getId()||-1));}}
                                        className='bg-red-400 text-white p-2 rounded'>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
            
        </div>
        </section>
        <Footer>
            {onAdd ? (
                <div className='flex flex-col items-center gap-4 w-full'>
                    <ActivityForm onRefresh={() => { setOnAdd(false); show(); }} />
                    <button type='button' className='bg-red-400 text-white p-2 rounded' onClick={() => setOnAdd(false)}>Cancel</button>
                </div>
            ) : (
                <button type='button' onClick={() => setOnAdd(true)} className="bg-yellow-400 text-white p-2 rounded">Add</button>
            )}
        </Footer>
    </div>
    );
}