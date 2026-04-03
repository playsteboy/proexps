import useCreateActivity from "../../hooks/useCreateActivity";
import ActivityModel from "../../models/ActivityModel";

export default function ActivityCreator({ onRefresh }: { onRefresh?: () => void }) {
    const { saveActivity, loading } = useCreateActivity();

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        
        const name = fd.get("name") as string;
        const description = (fd.get("description") as string) || "";
        const moneyIn = parseFloat((fd.get("moneyIn") as string) || "0");
        const moneyOut = parseFloat((fd.get("moneyOut") as string) || "0");
        
        const dateString = fd.get("date") as string;
        const date = dateString ? new Date(dateString) : new Date();

        const activity = new ActivityModel(
            name, 
            description,
            moneyIn, 
            moneyOut, 
            date
        );

        await saveActivity(activity);
        
        if (onRefresh) {
            onRefresh();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 gap-2 flex flex-col">
            <input type="text" name="name" placeholder="Activity Name" required />
            <input type="text" name="description" placeholder="Description" />
            <input type="number" name="moneyIn" placeholder="Money In" step="0.0" />
            <input type="number" name="moneyOut" placeholder="Money Out" step="0.0" />
            <input type="date" name="date" placeholder="Date" required />
            <button type="submit" disabled={loading}>Save Activity</button>
        </form>
    );
}