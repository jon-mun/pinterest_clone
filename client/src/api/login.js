const login = async (input) => {
  const response = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  
  if (!response.ok) {
    throw new Error("Bad request. Check server");
  }

  return response.json();
};
export default login;
