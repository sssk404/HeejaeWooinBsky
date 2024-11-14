import { AtpAgent } from '@atproto/api';
import * as dotenv from 'dotenv';
import { CronJob } from 'cron';
import * as process from 'process';

dotenv.config();

// Create a Bluesky Agent 
const agent = new AtpAgent({
    service: 'https://bsky.social',
  })


// function getRandomInt(min: number, max: number): number {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

const messages: string[] = [
    "테스트를 해요",
    "이게 맞나",
    "저게 맞나",
    "모르겠어요"
];

// 무작위 메시지 출력
function getRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}




async function main() {
    // const
    // const randomInt = getRandomInt(1, 10);
    // console.log(randomInt);
    await agent.login({ identifier: process.env.BLUESKY_USERNAME!, password: process.env.BLUESKY_PASSWORD!})
    await agent.post({
        text: getRandomMessage()
    });
    console.log("리포봇이 움직였어요...")
}

main();


// Run this on a cron job
const scheduleExpressionMinute = '* * * * *'; // Run once every minute for testing
const scheduleExpression = '0 */3 * * *'; // Run once every three hours in prod

const job = new CronJob(scheduleExpressionMinute, main); // change to scheduleExpressionMinute for testing

job.start();