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
    "콰직. 유리 조각들을 밟고 방 안으로 들어갔다. 밟은 유리 조각들이. 어째서인지 조금, 즐겁게 느껴졌다.",
    "\"정부와 한국마력연구소의 야심작이죠. 아직 시험 단계라 대한민국에는 단 두 개밖에 없는 물건이기도 하고요.\"",
    "\"다 제 잘못이었어요.\"",
    "\"제가 잘못한 겁니다. 제 고집 때문이니까요. 제가 그렇게 억지를 쓰지만 않았어도....\"",
    "원래 어린 시절 경험이 평생 가는 법이다.",
    "세상 잘난 맛에 살던 소장이 빌빌거리는 꼴을 보아라!"
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
// const scheduleExpressionMinute = '* * * * *'; // Run once every minute for testing
const scheduleExpression = '*/30 * * * *'; // Run once every 1 hr in prod

const job = new CronJob(scheduleExpression, main); // change to scheduleExpressionMinute for testing

job.start();