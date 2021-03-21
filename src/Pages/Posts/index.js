import React, { useEffect } from 'react';
import { Main, Info, Perfil, Comentario} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
function Posts(posts) {

    useEffect(() => {
        console.log(posts)
    }, []);

    return (
        <>
        <Main>
                <NavLink to={'/'}><FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg"/></NavLink>
            <Info key={posts.location.item.post.id}>
                <Perfil>
                    <img src={posts.location.item.post.user.picture}/>
                    <h1>{posts.location.item.post.user.name}</h1>
                </Perfil>   
                <h1>{posts.location.item.post.category}</h1>
                <p>{posts.location.item.post.body}</p>
               <Comentario>
                <h1>Comentarios</h1>
                {posts.location.item.post.comentarios.map(comentario => (
                    <h4>{comentario.content}</h4>
                    ))}
                </Comentario>
            </Info>
        </Main>
        </>
    )
}

export default Posts;
