export default function ActivityCreator({ onRefresh }) {
    const { saveActivity, loading, error } = useCreateActivity(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        
        const activity = new ActivityModel(
            Date.now(), 
            fd.get("name"), 
            parseFloat(fd.get("moneyIn") || 0), 
            parseFloat(fd.get("moneyOut") || 0), 
            fd.get("date")
        );

        await saveActivity(activity);
        if (onRefresh) onRefresh(); 
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 gap-2 flex flex-col">
            <input type="text" name="name" placeholder="Activity Name" required />
            <input type="number" name="moneyIn" placeholder="Money In" />
            <input type="number" name="moneyOut" placeholder="Money Out" />
            <input type="date" name="date" required />
            <button type="submit" disabled={loading}>Save Activity</button>
        </form>
    );
}