# layered-architecture-pattern
node.js 내배캠 layered-architecture-pattern


### 계층형 아키텍처 패턴
* Controller
* Service
* Repository

---

> 게시글 CRUD

---

#### API 및 코드 상세
[tistory_blog](https://pangeei-h.tistory.com/entry/Nodejs-%EC%8B%AC%ED%99%94-1%EC%A3%BC%EC%B0%A84%EA%B3%BC%EC%A0%9C)

### 실행(Terminal)

```bash
git clone https://github.com/godee95/node_2week_homework
npm i

```

### 다음과 같은 오류 발생 시
up to date, audited 152 packages in 834ms 9 packages are looking for funding run `npm fund` for details 2 vulnerabilities (1 moderate, 1 high) to address all issues, run: npm audit fix run `npm audit` for details


```bash
npm audit fix

```
그래도 오류 발생한다면, 경고성 오류 이므로 무시하고 진행.

---


### 본인 AWS RDS 계정과 연결

/config/config.json
```
  "development": {
    "username": "root",
    "password": "비밀번호",
    "database": "database_development",
    "host": "엔드포인트",
    "dialect": "mysql"
  },
```

### Terminal
```bash
npx sequelize db:create
npx sequelize db:migrate

node app.js
```
