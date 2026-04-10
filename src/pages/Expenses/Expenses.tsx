import Footer from '../../components/Layout/Footer'
import { useEffect } from 'react';
import useShowActivity from '../../hooks/useShowActivity';
import useUpdateActivity from '../../hooks/useUpdateActivity';
import Activity from '../../models/ActivityModel';
import useDeleteActivity from '../../hooks/useDeleteActivity';
import useComputeTotalMoneyLeft from '../../hooks/useComputeTotalMoneyLeft';
import useSaveActivity from '../../hooks/useCreateActivity';
export default function Expenses() {
     const { show, activities, loading } = useShowActivity();
    const { updateActivity } = useUpdateActivity();
    const { deleteActivity } = useDeleteActivity();
    const { totalMoneyLeft, computeTotal } = useComputeTotalMoneyLeft();
    const { saveActivity, loading: saving } = useSaveActivity();

    const handleRefresh = () => {
        show();
        computeTotal();
    }

    const handleActivityUpdate = async (activity: Activity) => {
        await updateActivity(activity);
        handleRefresh();
    }

    const handleActivitySave = async()=>{
        await saveActivity();
        handleRefresh();
    }

    const handleActivityDelete = async (id: number) => {
        await deleteActivity(id);
        handleRefresh();
    }

    useEffect(() => { handleRefresh(); }, []);
    console.log(activities);
    return (
    <div className='flex flex-col bg-white items-center gap-4 w-full h-full position-relative justify-evenly text-gray-900'>
        <section className='w-full mt-10 flex flex-col items-center gap-5 justify-center'>
            <h1 className='text-2xl font-bold text-purple-800'>Here You Can Manage Your Expenses</h1>
        <div className='flex flex-col items-center gap-4 w-full'>
            <table className='table-auto border-separate border-spacing-x-2 border-spacing-y-1 w-full justify-between items-center'>
                <thead>
                    <tr className='bg-purple-50 text-purple-900 font-semibold text-sm w-full'> 
                        <th className='w-1/6'>Name</th>
                        <th className='w-1/6'>Money In</th>
                        <th className='w-1/6'>Money Out</th>
                        <th className='w-1/6'>Date</th>
                        <th className='w-1/6'>Balance</th>
                        <th className='w-1/6'>Actions</th>
                    </tr>
                </thead>
                {loading ? <p>Loading...</p> : (
                    <tbody className="gap-2 w-full">
                        {activities.map((activity:Activity) => (
                            <tr key={activity.getId()} className="justify-between items-center w-1/6">
                                <td>
                                    <input name='name' type="text" defaultValue={activity.getName()} placeholder="Name" className='w-full  bg-gray-50 border border-gray-200 text-gray-800 p-2 rounded focus:ring-2 focus:ring-purple-300 focus:border-purple-400'/>
                                </td>
                                <td>
                                    <input name='moneyIn' type="number" defaultValue={activity.getMoneyIn()} placeholder="Money In" className='w-full bg-gray-50 border border-gray-200 text-gray-800 p-2 rounded focus:ring-2 focus:ring-purple-300 focus:border-purple-400'/>
                                </td>
                                <td>
                                    <input name='moneyOut' type="number" defaultValue={activity.getMoneyOut()} placeholder="Money Out" className='w-full bg-gray-50 border border-gray-200 text-gray-800 p-2 rounded focus:ring-2 focus:ring-purple-300 focus:border-purple-400'/>
                                </td>
                                <td>
                                    <input name='date' type="date" defaultValue={activity.getDate() ? new Date(activity.getDate()!).toISOString().split('T')[0] : ''} placeholder="Date" className='w-full bg-gray-50 border border-gray-200 text-gray-800 p-2 rounded focus:ring-2 focus:ring-purple-300 focus:border-purple-400'/>
                                </td>
                                <td>
                                    <p className={`w-full bg-gray-50 border border-gray-200 ${(activity.getMoneyIn()||0)-(activity.getMoneyOut()||0) < 0 ? 'text-red-700' : 'text-green-700'} p-2 rounded focus:ring-2 focus:ring-purple-300 focus:border-purple-400`}>{(activity.getMoneyIn()||0)-(activity.getMoneyOut()||0)}</p>
                                </td>
                                <td>
                                    <div className='w-full flex flex-row gap-1 justify-between'>
                                        <button type='button' onClick={(e) => {
                                            const row = e.currentTarget.closest('tr');
                                            const name = (row?.querySelector('input[name="name"]') as HTMLInputElement).value;
                                        const moneyIn = parseFloat((row?.querySelector('input[name="moneyIn"]') as HTMLInputElement).value);
                                        const moneyOut = parseFloat((row?.querySelector('input[name="moneyOut"]') as HTMLInputElement).value);
                                        const date = (row?.querySelector('input[name="date"]') as HTMLInputElement).value;
                                        const updatedActivity = new Activity(
                                            name,
                                            moneyIn,
                                            moneyOut,
                                            date ? new Date(date) : new Date(),
                                            activity.getId()
                                            );
                                            handleActivityUpdate(updatedActivity);
                                        }}
                                        className='w-1/2 text-blue-600 bg-blue-100 font-medium px-4 py-1.5 rounded-full hover:bg-blue-200 transition'>
                                            Edit</button>
                                    <button type='button' onClick={() => {handleActivityDelete((activity.getId()||-1));}}
                                        className='w-1/2 text-pink-600 bg-pink-100 font-medium px-4 py-1.5 rounded-full hover:bg-pink-200 transition'>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
            
        </div>
        </section>
        <Footer
        width='w-full'
        height='h-1/6'
        >
            <div className='flex flex-col items-center gap-4 w-full h-full justify-center'>
                <div className='flex flex-row gap-4 items-center justify-center'>
                <p className='text-gray-700 font-medium'>Total Money Left: </p>
                <p className='text-4xl font-bold text-gray-950'>{totalMoneyLeft !== null ? totalMoneyLeft : 0}</p>
            </div>
            <button type='button' onClick={() => handleActivitySave()} className="w-1/4 h-1/4 border-2 border-purple-600 bg-purple-600 text-white font-bold hover:bg-purple-700">Add</button>
            </div>
                        
        </Footer>
    </div>
    );
}   