import FeedPost from "./Post"
export default function Feed (){
  const postsUser =[
    {
      userUrl: "assets/img/meowed.svg",
      username: "meowed",
      postUrl: "assets/img/gato-telefone.svg",
      postAlt: "gato-telefone",
      likeUrl: "assets/img/respondeai.svg",
      likeUser: "respondeai",
      likeCounter: "101.523"
    },
    {
      userUrl: "assets/img/barked.svg",
      username: "barked",
      postUrl: "assets/img/dog.svg",
      postAlt: "dog",
      likeUrl: "assets/img/adorable_animals.svg",
      likeUser: "adorable_animals",
      likeCounter: "99.159"
    }
  ]
    return(
        <div class="posts">
            {postsUser.map((post)=> <FeedPost userUrl={post.userUrl} username={post.username} postUrl={post.postUrl} postAlt={post.postAlt} likeUrl={post.likeUrl} likeUser={post.likeUser} likeCounter={post.likeCounter}/>)}
        </div>           
    )
}