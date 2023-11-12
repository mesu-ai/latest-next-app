export const userRegister = async (data) => {
  try {

    const res = await fetch('http://localhost:3000/api/register', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (res.ok) {
      console.log("User created");
    } else {
      throw new Error("Failed to create user");
    }

    return res.json();

  } catch (error) {

    console.log("Error creating user: ", error);

  }

}