import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.sass'
import { useState, useEffect } from "react";

const repositoryName = 'Lista de Repositórios';

const repository = {
    name: 'Nome Rep',
    description: 'Lorem Ipsum',
    link: 'https://github.com/welltrojan'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/welltrojan/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>{repositoryName}</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}