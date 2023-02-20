const URL = "http://api.kcisa.kr/API_CNV_049/request";

const API_KEY = "e624d132-49af-45bb-a9db-ae1aba1a1b6f";

export const DATA = {
  numOfRows: "10",
  pageNo: "1",
  serviceKey: API_KEY,
};

async function getArtCollections(data) {
  // 옵션 기본 값은 *로 강조
  const response = await fetch(URL + "?" + new URLSearchParams(data));
  if (response.ok) {
    const value = await response.text(); // Get JSON value from the response body
    return Promise.resolve(value);
  } else {
    return Promise.reject("*** PHP file not found");
  }
}

export default getArtCollections;
