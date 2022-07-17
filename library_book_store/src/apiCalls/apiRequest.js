const apiRequest = async (endPoints, reqType, resType, body, token) => {
  console.log(body);
  const response = await fetch("http://localhost:3001/" + endPoints, {
    method: reqType,
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  });
  // console.log("response", response.json());
  return response.json();
};
export default apiRequest;
