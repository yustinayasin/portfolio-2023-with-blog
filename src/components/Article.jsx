import './../styles/article.css';
import { client } from '../../client';

const Article = ({ post }) => {
    return(
        <article className='article'>
            <h1 className="article-title">Best Resource to Learn Blender</h1>
            <ul className="article-tag">
                <li>
                    <h5>3D</h5>
                </li>
            </ul>
            <p className="article-content">{post}</p>
            <a href="" className="article-more">read more</a>
        </article>
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
      `*[_type == "post" && defined(slug.current)][].slug.current`
    )
  
    return {
      paths: paths.map((slug) => ({params: {slug}})),
      fallback: true,
    }
}
  
export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const post = await client.fetch(`
      *[_type == "post" && slug.current == $slug][0]
    `, { slug })

    console.log(post);
    
    return {
      props: {
        post
      }
    }
}

export default Article;