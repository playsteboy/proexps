import Database from "@tauri-apps/plugin-sql";
import { appConfigDir } from '@tauri-apps/api/path';

const path = await appConfigDir();

console.log("Le dossier de ma base est ici :", path);

export async function initializeDatabase() {
  const db = await Database.load("proexps.db");
  await db.execute(`CREATE TABLE IF NOT EXISTS activities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    money_in REAL DEFAULT 0.0,
    money_out REAL DEFAULT 0.0,
    date TEXT DEFAULT (datetime('now', 'localtime'))
  )`);

  await db.close();
}

