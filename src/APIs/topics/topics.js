export const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      // cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};


export const postTopic = async (data) => {  
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to create topic");
    }

    return res.json();
  } catch (error) {
    console.log("Error creating topic: ", error);
  }
}
// const res = fetch("http://localhost:3000/api/topics", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },

//   body: JSON.stringify(data),
// });