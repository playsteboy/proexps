import { useState } from "react";
import activityService from "../services/ActivityService";

const useComputeTotalMoneyLeft = () => {
    const [totalMoneyLeft, setTotalMoneyLeft] = useState<number | null>(null);

    const computeTotal = async () => {
        const result = await activityService.computeTotalMoneyLeft();
        setTotalMoneyLeft(result);
    };

    return { totalMoneyLeft, computeTotal };
};

export default useComputeTotalMoneyLeft;
