import getArtCollections, { DATA } from "./service.js";
import { parseXML, xmlToJson } from "./xmlLogic.js";
// 파일로서 import 하려고 하면 CORS 에러 발생 -> 브라우저 보안 옵션을 수정하거나, 웹 서버 띄워서 해결
// module로서 webserver에서 import 성공

const root = document.getElementById("root");

const element1 = document.createElement("div");

async function getData(value, element) {
  DATA.keyword = value;
  const data = await getArtCollections(DATA);
  const result =
    xmlToJson(parseXML(data)).response.body.items.item.title == undefined
      ? "검색 결과 없음"
      : xmlToJson(parseXML(data)).response.body.items.item.title["#text"];
  element.innerText = result;
  return result;
}

const text =
  "저는 JS를 통해 랜더된 동적인 데이터 입니다. 저는 JS에서 style 속성을 지정했습니다.";

element1.innerText = text + ` ⬅ 저는 ${text.length}글자로 이뤄져있습니다 👍`;
element1.style.width = `${text.length}%`;
element1.style.backgroundColor = "red";
element1.style.color = "white";
element1.style.fontWeight = "bold";

const element2 = document.createElement("p");
element2.innerText = "저는 css 파일을 통해 style이 적용된 오브젝트입니다.";
element2.className = "great-element";

const element3 = document.createElement("h1");
element3.innerText = "OpenAPI를 통해 데이터를 불러오고 표출하기";

const element4 = document.createElement("p");
element4.innerHTML =
  "CORS 에러를 피하기 위해서 가장 이상적인 방법은 API를 호출하는 Origin과 API 제공 Origin이 같아야 합니다. \
  <br/> 따라서 웹서버의 reverse proxy를 설정해 CORS 에러를 막고 아래 결과를 도출했습니다. \
  <br/> <br/> <b>참고한 API는 :</b> https://www.culture.go.kr/data/openapi/openapiView.do?id=552&category=B&gubun=A#/default/%EC%9A%94%EC%B2%AD%EB%A9%94%EC%8B%9C%EC%A7%80_Get";

const container = document.createElement("div");
container.className = "container";

const input = document.createElement("input");
input.style.width = "250px";
input.placeholder = "회화/청자";

const element5 = document.createElement("p");
element5.innerText = " ➡ ";

const element6 = document.createElement("p");
element6.className = "good-element";

const button = document.createElement("button");
button.onclick = () => getData(input.value, element6);
button.innerText = "OpenAPI 호출";
button.style.width = "200px";
button.style.height = "50px";
button.style.border = "solid 1px";
button.style.borderRadius = "5px";

container.appendChild(input);
container.appendChild(button);
container.appendChild(element5);
container.appendChild(element6);

root.appendChild(element1);
root.appendChild(element2);
root.appendChild(element3);
root.appendChild(element4);
root.appendChild(container);
