"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@atproto/api");
const dotenv = __importStar(require("dotenv"));
const cron_1 = require("cron");
const process = __importStar(require("process"));
dotenv.config();
// Create a Bluesky Agent 
const agent = new api_1.AtpAgent({
    service: 'https://bsky.social',
});
// function getRandomInt(min: number, max: number): number {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
const messages = [
    "콰직. 유리 조각들을 밟고 방 안으로 들어갔다. 밟은 유리 조각들이. 어째서인지 조금, 즐겁게 느껴졌다.",
    "\"정부와 한국마력연구소의 야심작이죠. 아직 시험 단계라 대한민국에는 단 두 개밖에 없는 물건이기도 하고요.\"",
    "\"다 제 잘못이었어요.\"",
    "\"제가 잘못한 겁니다. 제 고집 때문이니까요. 제가 그렇게 억지를 쓰지만 않았어도....\"",
    "원래 어린 시절 경험이 평생 가는 법이다.",
    "세상 잘난 맛에 살던 소장이 빌빌거리는 꼴을 보아라!"
];
// 무작위 메시지 출력
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // const
        // const randomInt = getRandomInt(1, 10);
        // console.log(randomInt);
        yield agent.login({ identifier: process.env.BLUESKY_USERNAME, password: process.env.BLUESKY_PASSWORD });
        yield agent.post({
            text: getRandomMessage()
        });
        console.log("리포봇이 움직였어요...");
    });
}
main();
// Run this on a cron job
// const scheduleExpressionMinute = '* * * * *'; // Run once every minute for testing
const scheduleExpression = '*/30 * * * *'; // Run once every 1 hr in prod
const job = new cron_1.CronJob(scheduleExpression, main); // change to scheduleExpressionMinute for testing
job.start();
