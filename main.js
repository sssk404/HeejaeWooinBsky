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
const messages = [
    "콰직. 유리 조각들을 밟고 방 안으로 들어갔다. 밟은 유리 조각들이. 어째서인지 조금, 즐겁게 느껴졌다.",
    "\"정부와 한국마력연구소의 야심작이죠. 아직 시험 단계라 대한민국에는 단 두 개밖에 없는 물건이기도 하고요.\"",
    "\"다 제 잘못이었어요.\"",
    "\"제가 잘못한 겁니다. 제 고집 때문이니까요. 제가 그렇게 억지를 쓰지만 않았어도....\"",
    "원래 어린 시절 경험이 평생 가는 법이다.",
    "세상 잘난 맛에 살던 소장이 빌빌거리는 꼴을 보아라!",
    "물으면 당연히 설명해 줬지! 적당히 미성년자 버전으로!",
    "남은 가족한테 전하고 싶은 말이 뭐가 있겠는가. 사랑한다는 말 말고.",
    "내가 더 이상 어린아이가 아니라는 사실이 실감 났다.",
    "…아. \n이제 내가 이런 아이들을 도울 수 있는 처지가 되었구나. \n아버지가 내게 손을 뻗었던 것처럼. \n나도 누군가를….",
    "막을 수는 없더라도 최소한, 마지막으로 한 번만 더 형이라고 불러 봤을 텐데.",
    "결국 사람은 살아진다. 내가 과거로 와서 어떻게든 살아가고 있는 것처럼.",
    "그렇게 우희재는 홍석영의 아들이 되었다. \n그게 뭐라고 홍석영은 세상을 다 가진 것처럼 활짝 웃었다.",
    "하는 건 없는데 바쁘다. \n이게 요즘 내 기분이다.",
    "어쩔 수 없지. \n이게 다 아저씨 때문이다.",
    "\"누나라고 다시 불러 줄 테니까 닥쳐요….\"",
    "쇠를 얇게 펴서 만든 인식표에는 익숙한 이름 석 자가 새겨져 있었다. \n홍석영.",
    "시체 사이를 걷고 있는 기분이다.",
    "날씨가 더워서 그사이에 애들이 상한 건가?",
    "객관적으로 불행 대결을 하자고 한다면 나도 어디 가서 지지 않을 자신이 있다.",
    "저, 저저…. 기껏 키워 놨더니 형한테 하는 거 봐라.",
    "그렇게 말하면 내가 뭐라고 대꾸하든 나쁜 놈이 되지 않는가. 치사하게.",
    "뭔진 몰라도 행복한 시간을 보냈군….",
    "평생 걱정할걸. 내 동생인데 당연하잖아.",
    "\'우리가 형제라서?\' \n\'응. 우리가 형제라서.\' \n내가 내 이름을 받아들이기까지는 그 이유면 충분했다.",
    "그래도. \n아저씨는 그래야만 한다고 가르쳤다. \n그러니까… 그러니까.",
    "죽은 사람에게 붙들린 건 박서현뿐만이 아니니까. \n이것만큼은 나도 이해해 줘야지.",
    "부디 우정에서 끝나라. \n사랑으로 바뀔 거라면, 결혼할 각오로 해라.",
    "스포일러 들으면 재미없잖습니까.",
    "짜증 나. \n이 사람 어떻게 찔러 버릴 순 없나.",
    "바다 보고 싶다고 했잖니.",
    "애초에 내 부모는 한 명뿐이라고.",
    "결국 한 번도 불러 주지 못했잖아.",
    "최근에는 그래도 의젓하게 굴려고 어리광도 줄어들었던 녀석이 갑자기 왜 이래. 내가 나에 대해 너무 자신했나? 실망이다, 우이록···.",
    "\“누가 부끄러워한다는 거야!!\”",
    "하고 싶은 거 다 하며 살아온 나는 그런 부조리함을 견디지 못했다.",
    "빌어먹을 고양이. 빌어먹을 한태경.",
    "정신이 삐었다, 얘는.",
    "뭐라는 거야, 저 아저씨가?",
    "홍석영이라는 인간은 한 번도 자기가 하고 싶은 일을 마음 편히 하지 못했으니까.",
    "\"아무것도 안 하는 것도 선택이라고 말해 줬어요.\"",
    "한태경을 보면 위로가 되었다. 내가 아무리 격정의 사춘기를 보냈다고 하더라도 저 남자만큼은 아니다.",
    "그럼에도 불구하고 다시 만나지 못할 가족들에게 몇 번이고 반복해서 미련과 안녕을 고하는 것은 내가 인간이기 때문이겠지.",
    "어쩐지 불손한 기색이 느껴져서 고개를 살짝 들어 한태경을 내려다보았다. 이십 년 뒤 본인이 말하길, 내가 이렇게 보면 기분이 나쁘다고 했으니 지금도 통하겠지.",
    "도대체 그날 서울에선 무슨 일이 있었던 거지?",
    "이상하지. 난 저렇게… 짐승 같은 시절이 없었는데. 나는 언제나 문명인이었다.",
    "내 한달 월급보다 많군. 이래서 부잣집 도련님이란.",
    "사실 내가 두고 온 건 아니지. 오히려 내 쪽이 남겨졌다.",
    "다시 돌아갈 수 없기에 보고 싶었을 수도 있다. \n나는 다시 돌아갈 수 없기에 보고 싶지 않았다.",
    "이 모든 건 한태경 때문이다."
];
const api_1 = require("@atproto/api");
const dotenv = __importStar(require("dotenv"));
const cron_1 = require("cron");
const process = __importStar(require("process"));
dotenv.config();
// Create a Bluesky Agent 
const agent = new api_1.AtpAgent({
    service: 'https://bsky.social',
});
// 무작위 메시지 출력
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield agent.login({ identifier: process.env.BLUESKY_USERNAME, password: process.env.BLUESKY_PASSWORD });
        yield agent.post({
            text: getRandomMessage()
        });
        console.log("우희재 봇 정상 작동");
    });
}
main();
// Run this on a cron job
// const scheduleExpressionMinute = '* * * * *'; // Run once every minute for testing
const scheduleExpression = '*/30 * * * *'; // Run once every 1 hr in prod
const job = new cron_1.CronJob(scheduleExpression, main); // change to scheduleExpressionMinute for testing
job.start();
