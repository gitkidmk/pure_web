# About Project

node-modules 없이 오직 html, js, css로만 구성된 프로젝트

# WHY

- React를 쓰지 않고 어디까지 구현할 수 있는가 확인
- fetch API를 사용할 때 CORS 에러를 막기 위해 proxy 설정이 필요했음

  - REACT와 같은 라이브러리를 사용하게 되면 nodeJS를 통해 JS 중심으로 프로젝트를 빌드하고, 그 결과물을 dev 웹 서버에 올리는 방식 <br/>
    ➡ package.json을 통해 proxy와 같은 웹 서버 설정이 가능했음 <br/>
    ➡ 웹 서버 설정이 안되어있는 이 프로젝트에서는 proxy 설정을 하지 못함 <br/>
    ➡ Docker를 통해 nginx 웹 서버를 구동하고 proxy 설정 완료

- 코드의 변화가 있을 때마다 docker-compose를 통해 nginx 구동해야하는 불편함
  <br/> ➡ docker container가 외부 소스를 바라보도록 설정하면...?
  <br/> ➡ 웹 서버가 있어야만 해결 가능한거라면 nodejs를 안쓰고 할 필요가 있나
  <br/> ➡ nodeJS를 적용해서 프로젝트 바꿔보기

# 고민할 점

- yarn vs npm
- reverse proxy
- js script type module
  - import, export를 하고 싶다면 module 타입이여야 함
- CORS
  - file 접근으로도 CORS 에러 발생, 웹 서버에서 동작 가능
