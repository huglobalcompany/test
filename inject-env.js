const fs = require('fs');

// Vercel 프로젝트 설정에 추가할 환경변수 이름입니다.
// 이 값은 공개 가능한 정보여야 합니다.
const envVarName = 'PUBLIC_GREETING_MESSAGE';
const message = process.env[envVarName];

if (!message) {
  console.error(`Error: Environment variable ${envVarName} is not set. Please set it in your Vercel project settings.`);
  // 환경변수가 없으면 빌드가 실패하도록 하여 잘못된 배포를 막습니다.
  process.exit(1);
}

// HTML에서 사용할 수 있도록 window 객체에 변수를 할당하는 JS 코드를 생성합니다.
const envJsContent = `window.MY_APP_CONFIG = {
  GREETING: "${message}"
};`;

// 프로젝트 루트에 env.js 파일로 저장합니다.
fs.writeFileSync('./env.js', envJsContent);

console.log('Successfully created env.js with environment variables.');
