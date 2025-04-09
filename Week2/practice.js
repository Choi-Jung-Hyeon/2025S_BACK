const http = require('http'); // Node.js 내장 모듈인 'http'를 가져와 HTTP 서버를 생성한다.
const fs = require('fs'); // 파일 작업 처리를 위해 'fs' 모듈을 가져온다.
const { exec } = require('child_process'); // 시스템 명령어를 실행하기 위해 'child_process' 모듈의 exec 함수를 가져온다.

// HTTP 서버를 생성한다.
const server = http.createServer((req, res) => {
  // 클라이언트가 '/code' 경로로 POST 요청을 보낼 경우 실행된다.
  if (req.method === 'POST' && req.url === '/code') {
    let body = ''; // 요청 바디 데이터를 저장할 변수를 초기화한다.

    // 데이터가 조각(chunk) 단위로 전달될 때마다 body 변수에 추가한다.
    req.on('data', chunk => (body += chunk));

    // 데이터 수신이 완료된 후 실행된다.
    req.on('end', () => {
      try {
        const { command } = JSON.parse(body); // 요청 데이터를 JSON으로 파싱하고 'command' 필드를 추출한다.
        console.log('Received command:', command);

        // 'command' 필드가 없으면 에러 응답을 반환한다.
        if (!command) {
          res.writeHead(400, { 'Content-Type': 'application/json' }); // 상태 코드 400을 설정한다.
          res.end(JSON.stringify({ error: 'No code provided' })); // 에러 메시지를 JSON 형식으로 반환한다.
          return;
        }

        const filename = 'code.py'; // Python 코드를 저장할 파일 이름을 설정한다.

        // fs 모듈을 사용해 'code.py' 파일을 생성하고, 'command' 데이터를 저장한다.
        fs.writeFile(filename, command, (err) => {
          // 파일 생성 중 에러가 발생하면 처리한다.
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' }); // 상태 코드 500을 설정한다.
            res.end(JSON.stringify({ error: 'Error writing file' })); // 에러 메시지를 JSON 형식으로 반환한다.
            return;
          }

          // 생성된 Python 파일을 실행하기 위해 'python3' 명령어를 사용한다.
          exec(`python3 ${filename}`, (error, stdout, stderr) => {
            // 실행 완료 후 파일을 삭제한다.
            fs.unlink(filename, (unlinkErr) => {
              if (unlinkErr) {
                console.error('Error deleting file:', unlinkErr); // 파일 삭제 중 에러가 발생하면 로그를 출력한다.
              }
            });

            // Python 실행 결과를 클라이언트에 반환한다.
            res.writeHead(200, { 'Content-Type': 'application/json' }); // 상태 코드 200을 설정한다.
            res.end(
              JSON.stringify({
                stdout, // 표준 출력 결과를 반환한다.
                stderr, // 실행 중 표준 에러 내용을 반환한다.
                error: error ? error.message : null // 실행 실패 시 에러 메시지를 반환한다.
              })
            );
          });
        });
      } catch (e) {
        // JSON 파싱 중 에러가 발생한 경우 처리한다.
        res.writeHead(400, { 'Content-Type': 'application/json' }); // 상태 코드 400을 설정한다.
        res.end(JSON.stringify({ error: 'Invalid JSON format' })); // JSON 형식으로 에러 메시지를 반환한다.
      }
    });
  }
  // 클라이언트가 '/' 경로로 GET 요청을 보낼 경우 실행된다.
  else if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // 상태 코드 200을 설정하고 콘텐츠 타입을 HTML로 지정한다.
    res.end('<h1>Welcome to Judger!</h1><p>POST /code</p>'); // 클라이언트에 HTML 메시지를 반환한다.
  }
  // 정의되지 않은 경로 또는 요청 메서드를 처리한다.
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' }); // 상태 코드 404를 설정한다.
    res.end('Not Found'); // 클라이언트에 "Not Found" 메시지를 반환한다.
  }
});

// 서버를 포트 3000번에서 실행한다.
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000'); // 서버 실행 상태를 콘솔에 출력한다.
});