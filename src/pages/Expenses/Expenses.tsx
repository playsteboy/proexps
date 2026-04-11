import Footer from '../../components/Layout/Footer'
import { useEffect, useState } from 'react';
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
    const [totalUnit, setTotalUnit] = useState<string>('MGA');
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

    const displayTotal = () => {
    if (totalMoneyLeft === null) return "0";

    const fromMGARates: Record<string, number> = {
        'MGA': 1,
        'MGF': 5,
        'EUR': 1 / 4850.50,
        'USD': 1 / 4500.00
    };

    const rate = fromMGARates[totalUnit] || 1;
    const finalValue = totalMoneyLeft * rate;

    const decimals = (totalUnit === 'MGA' || totalUnit === 'MGF') ? 0 : 2;

    return finalValue.toLocaleString('fr-MG', { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
    });
};

    useEffect(() => { handleRefresh(); }, []);
    console.log(activities);
    return (
    <div className='flex flex-col bg-white items-center gap-4 w-full h-full position-relative justify-evenly text-gray-900'>
        <section className='w-full h-full mt-[5%] flex flex-col items-center gap-5 justify-center'>
            <h1 className='text-2xl font-bold text-purple-800'>Here You Can Manage Your Expenses</h1>
        <div className='flex flex-col items-center gap-4 w-full h-full'>
            <table className='table-auto border-separate border-spacing-x-2 border-spacing-y-1 w-full h-full justify-between items-center'>
                <thead>
                    <tr className='bg-purple-50 text-purple-900 font-semibold text-sm w-full h-full'> 
                        <th className='w-1/6'>Name</th>
                        <th className='w-1/6'>Money In</th>
                        <th className='w-1/6'>Money Out</th>
                        <th className='w-1/6'>Date</th>
                        <th className='w-1/6'>Balance</th>
                        <th className='w-1/6'>Actions</th>
                    </tr>
                </thead>
                {loading ? <p>Loading...</p> : (
                    <tbody className="w-full h-full">
                        {activities.map((activity:Activity) => (
                            <tr key={activity.getId()} className="justify-between items-center w-1/6 h-full">
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
                                    <div className='w-full bg-gray-50 border border-gray-200 flex flex-row justify-between'>
                                        <p className={`${(activity.getMoneyIn()||0)-(activity.getMoneyOut()||0) < 0 ? 'text-red-700' : 'text-green-700'} p-2 rounded focus:ring-2 focus:ring-purple-300 focus:border-purple-400`}>{(activity.getMoneyIn()||0)-(activity.getMoneyOut()||0)}</p>
                                    <select 
                                    key={`select-${activity.getId()}-${activity.getCurrency()}`}
                                    name="currency" 
                                    id={`currency-${activity.getId()}`}
                                    defaultValue={activity.getCurrency()?.toString().trim().toUpperCase() || 'MGA'}
                                    aria-label="Select currency unit"
                                    >
                                        <option value="MGA">Ar</option>
                                        <option value="MGF">Fmg</option>
                                        <option value="USD">$</option>
                                        <option value="EUR">€</option>
                                    </select>
                                    </div>
                                    
                                </td>
                                <td>
                                    <div className='w-full h-full flex flex-row gap-[2%] justify-between items-center'>
                                        <button type='button' onClick={(e) => {
                                            const row = e.currentTarget.closest('tr');
                                            const name = (row?.querySelector('input[name="name"]') as HTMLInputElement).value;
                                        const moneyIn = parseFloat((row?.querySelector('input[name="moneyIn"]') as HTMLInputElement).value);
                                        const moneyOut = parseFloat((row?.querySelector('input[name="moneyOut"]') as HTMLInputElement).value);
                                        const date = (row?.querySelector('input[name="date"]') as HTMLInputElement).value;
                                        const currencySelect = row?.querySelector(`select[name="currency"]`) as HTMLSelectElement;
                                        const currency = currencySelect ? currencySelect.value.toUpperCase() : 'MGA'
                                        const updatedActivity = new Activity(
                                            name,
                                            moneyIn,
                                            moneyOut,
                                            date ? new Date(date) : new Date(),
                                            currency,
                                            activity.getId()
                                            );
                                            handleActivityUpdate(updatedActivity);
                                        }}
                                        className='w-1/2 h-[75%] text-blue-600 bg-blue-100 font-medium text-center justify-center rounded-full hover:bg-blue-200 transition'>
                                            Edit</button>
                                    <button type='button' onClick={() => {handleActivityDelete((activity.getId()||-1));}}
                                        className='w-1/2 h-[75%] text-pink-600 bg-pink-100 font-medium text-center justify-center rounded-full hover:bg-pink-200 transition'>Delete</button>
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
            <div className='flex flex-col items-center gap-[9%] w-full h-full justify-center'>
                <div className='flex flex-col  items-center justify-center gap-[1%]'>
                <p className=' text-gray-700 font-medium'>Total Money Left</p>
                <div className={` bg-gray-50 border rounded-sm border-gray-200 flex flex-row justify-around items-center pl-[5%] pr-[5%]`}>
                <div className='w-full '>
                    <p className='text-4xl font-bold text-gray-950'>
                        {displayTotal()}
                    </p>  
                </div>
                <select 
                name="currency"
                id="currency-total"
                aria-label="Select currency unit"
                defaultValue='MGA'
                className='ml-[2%]'
                onChange={(e) => {
                    const newUnit = e.target.value;
                    setTotalUnit(newUnit);
                    handleRefresh();
                }}
                >
                <option value="MGA">Ar</option>
                <option value="MGF">Fmg</option>
                <option value="USD">$</option>
                <option value="EUR">€</option>
                </select>
                </div>
                
            </div>
            <button type='button' onClick={() => handleActivitySave()} className="w-1/4 h-1/4 border-2 border-purple-600 bg-purple-600 text-white font-bold hover:bg-purple-700">Add</button>
            </div>
                        
        </Footer>
    </div>
    );
}   