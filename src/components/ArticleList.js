// import blogData from "../data/blog"
import Article from "./Article"

function ArticleList({posts}) {
    // const posts = blogData.posts
    const article = posts.map(post => {
        return <Article 
        title={post.title} 
        date={post.date}
        preview={post.preview}
        key={post.id}
        />
    })
    console.log(article)
    
    return (
        <main>
            {article}
        </main>
    )
}

export default ArticleList