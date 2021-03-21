import React, { useState, useEffect } from 'react';
import { Post, Container, Infos, Main } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

import objeto from '../../Object.json';

function Dashboard() {
    const [posts, setPosts] = useState([]);


    function gerarDados() {
        let dados = objeto.posts.map(post => mergeDados(post))
        console.log(dados);
        ordenarComentarios(dados)
        ordenarData(dados);      
        setPosts(dados);
    }

    function mergeDados(post) {
        return { ...post, category: buscarCategoria(post), like: buscarLikes(post), user: buscarUsers(post), /*body: body(post)*/ comentarios:  buscarComments(post)}
    }

    function buscarCategoria(post) {
        return objeto.categories.find(categorie => categorie.id === post.category).name
    }

    function buscarLikes(post) {
        return objeto.comments.filter(comment => comment.post === post.id && comment.like === true).length
    }

    function buscarComments(post) {
        return objeto.comments.filter(comment => comment.post === post.id)
    }

    function buscarUsers(post) {
        return objeto.users.filter(user => user.id === post.postedBy)[0]
    }

    function ordenarComentarios(dados) {
        dados.forEach(element => {
            element.comentarios.sort((a,b) => a.postedAt > b.postedAt ? -1 : a.postedAt < b.postedAt ? 1 : 0);
        });
    }

    function ordenarData(dados) {
        dados.sort((a,b) => a.postedAt > b.postedAt ? -1 : a.postedAt < b.postedAt ? 1 : 0);
    }

    // function body(post){
    //     let description = post.body;
    //         description = description.substring(0, 200)+'...';
    //         return description
    // }

    

    useEffect(() => {
        gerarDados();
    }, []);

    return (
        <>
        <Main>
            <h1>Recents posts</h1>
            <Container>
                {
                    posts.map(post => (
                        <Post key={post.id}>
                            <img src={post.user.picture} />
                        <Infos>
                            <h2>{post.category}</h2>
                            <p>{(post.body.substring(0,300)) + '...'}</p>
                            <h4><FontAwesomeIcon icon={faThumbsUp} size="lg"/> {post.like} </h4>
                            <NavLink to={{pathname:'/posts', item: {post: post}}} >Mostrar mais detalhes +</NavLink>
                        </Infos>
                        </Post>
                    ))
                }
            </Container>
        </Main>
        </>
    )
}

export default Dashboard;
