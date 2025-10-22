import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
testDir: './tests',
timeout: 30_000,
use: {
headless: true,
ignoreHTTPSErrors: true,
viewport: { width: 1280, height: 720 }
}
};


export default config;
