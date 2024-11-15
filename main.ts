
import { AtpAgent } from '@atproto/api';
import * as dotenv from 'dotenv';
import { CronJob } from 'cron';
import * as process from 'process';
import messagesData from './messages.json';

dotenv.config();

// Create a Bluesky Agent 
const agent = new AtpAgent({
    service: 'https://bsky.social',
  })

const messages: string[] = messagesData.messages;

// 무작위 메시지 출력
function getRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

async function main() {
    await agent.login({ identifier: process.env.BLUESKY_USERNAME!, password: process.env.BLUESKY_PASSWORD!})
    await agent.post({
        text: getRandomMessage()
    });
    console.log("우희재 봇 정상 작동")
}

main();

// Run this on a cron job
// const scheduleExpressionMinute = '* * * * *'; // Run once every minute for testing
const scheduleExpression = '*/30 * * * *'; // Run once every 30min in prod

const job = new CronJob(scheduleExpression, main); // change to scheduleExpressionMinute for testing

job.start();