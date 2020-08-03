import axios from "axios";

const WP_API = "https://authorspress.com/wp-json/wp/v2/posts";
const perPage = "?per_page=10";
const wpFetchHeaders = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Expose-Headers": "x-wp-total",
    },
};

function Bookstore({posts}) {
    return (
        <ul>
            {posts.map((post) => (
                <li>{post.title.rendered}</li>
            ))}
        </ul>
    );
}

export async function getStaticProps() {
   // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://authorspress.com/wp-json/wp/v2/posts");
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

async function getNumPosts() {
    const { headers } = await axios(
        `${state.baseUrl}${state.perPage}`,
        state.wpFetchHeaders
    );
    return headers["x-wp-totalpages"];
}

async function fetchPosts(numPages) {
    const posts = [];

    for (let page = 1; page <= numPages; page += 1) {
        const post = axios.get(
            `${state.baseUrl}${state.perPage}&page=${page}`,
            state.wpFetchHeaders
        );
        posts.push(post);
    }

    await axios
        .all(posts)
        .then((response) => {
            const postData = response.map((res) => res.data);
            state.posts = postData.flat();
        })
        .catch((e) => console.log("error fetching posts: ", e));

    return true;
}



export default Bookstore
