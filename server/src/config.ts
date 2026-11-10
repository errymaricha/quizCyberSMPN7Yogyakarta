import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import type { AppConfig } from './types';

// All persistent data lives in DATA_DIR (Docker) or <project-root>/data/ (local dev)
const dataDir = process.env.DATA_DIR || path.join(process.cwd(), '..', 'data');
const configPath = path.join(dataDir, 'config.json');

// Sentinel: a config/env that still carries this value is treated as "unset".
const PLACEHOLDER_SECRET = 'change-this-secret-in-production';

// Defaults ensure any field added to the codebase after a deployment
// still has a sane value even if the persisted config.json pre-dates it.
const DEFAULTS: AppConfig = {
  port: 3000,
  appName: 'Quis SMP Negeri 7 Yogyakarta',
  appSubtitle: 'Cyber Challenge: Klik atau Skip? — Think Before You Click!',
  jwtSecret: PLACEHOLDER_SECRET,
  allowedDomain: '',
  questionTimeSec: 10,
  defaultBaseScore: 500,
  speedBonusMax: 200,
  speedBonusMin: 10,
  maxPlayersPerSession: 300,
  showLeaderboardAfterQuestion: true,
  streakBonusEnabled: true,
  streakMinimum: 2,
  streakBonusBase: 50,
  resultsAutoAdvanceSec: 0,
  publicUrl: '',
};

export function loadConfig(): AppConfig {
  // On first run, create the data dir and seed a default config
  if (!fs.existsSync(configPath)) {
    fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(configPath, JSON.stringify(DEFAULTS, null, 2), 'utf-8');
  }

  const raw = fs.readFileSync(configPath, 'utf-8');
  const saved = JSON.parse(raw) as Partial<AppConfig>;
  // Merge: saved values win; any key missing from the file falls back to DEFAULTS
  const cfg = { ...DEFAULTS, ...saved };
  // Env vars always win over file — useful for Docker deployments
  if (process.env.PORT) cfg.port = parseInt(process.env.PORT, 10) || 3000;
  if (process.env.JWT_SECRET) cfg.jwtSecret = process.env.JWT_SECRET;
  if (process.env.ALLOWED_DOMAIN !== undefined) cfg.allowedDomain = process.env.ALLOWED_DOMAIN;
  if (process.env.PUBLIC_URL) cfg.publicUrl = process.env.PUBLIC_URL;

  // If JWT_SECRET is unset, uses the placeholder, or is too short:
  // Instead of crashing the container in a restart-loop, auto-generate a secure random secret!
  if (!cfg.jwtSecret || cfg.jwtSecret === PLACEHOLDER_SECRET || cfg.jwtSecret.length < 32) {
    cfg.jwtSecret = crypto.randomBytes(32).toString('hex');
    console.warn(
      '\n[quizz] ⚠️  JWT_SECRET was unset or too short. Generated an automatic secure random secret:\n' +
        `        ${cfg.jwtSecret}\n` +
        '        (To use a fixed secret, configure JWT_SECRET in your environment variables).\n',
    );
    try {
      fs.writeFileSync(configPath, JSON.stringify(cfg, null, 2), 'utf-8');
    } catch {
      // In case data directory is read-only
    }
  }
  return cfg;
}

export function saveConfig(cfg: AppConfig): void {
  fs.writeFileSync(configPath, JSON.stringify(cfg, null, 2), 'utf-8');
}

/** Config safe to expose over the API — secrets stripped. */
export function toPublicConfig(cfg: AppConfig = config): Omit<AppConfig, 'jwtSecret'> {
  const { jwtSecret: _jwtSecret, ...publicConfig } = cfg;
  return publicConfig;
}

export const config = loadConfig();
