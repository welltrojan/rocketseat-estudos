import { Counter } from './componnents/Counter';
import { RepositoryList } from './componnents/RepositoryList';
import './styles/global.sass';

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}