import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.sass'

const repositoryName = 'Lista de Repositórios';

const repository = {
    name: 'Nome Rep',
    description: 'Lorem Ipsum',
    link: 'https://github.com/welltrojan'
}

export function RepositoryList() {
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