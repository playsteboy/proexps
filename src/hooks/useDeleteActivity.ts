import { useState } from "react";
import activityService from "../services/ActivityService";

export default function useDeleteActivity() {
    const [loading, setLoading] = useState(false);

    const deleteActivity = async (id: number) => {
        setLoading(true);
        try {
            await activityService.deleteActivity(id);
        } catch (error) {
            console.error("Error deleting activity:", error);
        } finally {
            setLoading(false);
        }
    };

    return { deleteActivity, loading };
}
