/**
 * Using Async-Await with fetch api
 * fetch is an API provided by browser.
 * on call to fetch(), it's return a promise object, usually a request header string.
 * to read the data, it is required to convert it into readable format e.g., JSON using an
 *   response.json() promise call.
 */
const GITHUB_API = 'https://api.github.com/users/afirestriker';

async function githubUserInfo() {
    const data = await fetch(GITHUB_API);
    const res = await data.json();

    console.log(res);
}

githubUserInfo();
