import axios from "axios";
const getData = async (userID) => {
    const { data:user } = await axios("https://jsonplaceholder.typicode.com/users/"+userID);
    const { data:post } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userID);
    return { user, post };
};

export {getData};