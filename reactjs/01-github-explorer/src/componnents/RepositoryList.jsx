const repositoryName = 'Teste';

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Descrição</p>
                    <a href="">Ver Repositorio</a>
                </li>
            </ul>
        </section>
    )
}