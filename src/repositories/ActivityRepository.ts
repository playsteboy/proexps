import Database from "@tauri-apps/plugin-sql";
import { executeQuery } from "../utils/executeQuery";
import {initializeDatabase} from "../config/DBConnection";
import Activity from "../models/ActivityModel";
import "use strict";
"use strict";
class ActivityRepository {
    constructor() {
        initializeDatabase();
    }
async getActivities() {
    try{
        const query = "SELECT name, description, money_in, money_out, date FROM activities";
        const rows = await executeQuery(query);
        
        return rows.map(row => new Activity(
            row.name, 
            row.description, 
            row.money_in, 
            row.money_out, 
            row.date
        ));
    }catch(error){
        console.error("Error fetching activities:", error);
        return error;
    }
}

async addActivity(activity) {
    try{
        const query = "INSERT INTO activities (name, description, money_in, money_out, date) VALUES (?, ?, ?, ?, ?)";
    const params = [activity.getName(), activity.getDescription(), activity.getMoneyIn(), activity.getMoneyOut(), activity.getDate()];
    return await executeQuery(query, params);
    }catch(error){
        console.error("Error adding activity:", error);
        return error;
    }
}

async updateActivity(activity) {
    try{
        const query = "UPDATE activities SET name = ?, description = ?, money_in = ?, money_out = ?, date = ? WHERE id = ?";
    const params = [activity.getName(), activity.getDescription(), activity.getMoneyIn(), activity.getMoneyOut(), activity.getDate(), activity.getId()];
    return await executeQuery(query, params);
    }catch(error){
        console.error("Error updating activity:", error);
        return error;
    }
}

async deleteActivity(activityId) {
    try{
        const query = "DELETE FROM activities WHERE id = ?";
    const params = [activityId];
    return await executeQuery(query, params);
    }catch(error){
        console.error("Error deleting activity:", error);
        return error;
    }
}
}
export default ActivityRepository;