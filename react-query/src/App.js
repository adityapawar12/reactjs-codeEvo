import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHeroesDopplegangersPage } from "./components/RQSuperHeroesDopplegangers.page";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelQueriesPage from "./components/DynamicParallelQueries.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";
import InfiniteQueriesPage from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional SH</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ SH</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes-doppelgangers">RQ SH Dopple</Link>
              </li>
              <li>
                <Link to="/rq-parallel">RQ Parall</Link>
              </li>
              <li>
                <Link to="/rq-dynamic-parallel">RQ Dyn Parall</Link>
              </li>
              <li>
                <Link to="/rq-dependent">RQ Depend</Link>
              </li>
              <li>
                <Link to="/rq-paginated">RQ Paginate</Link>
              </li>
              <li>
                <Link to="/rq-infinite">RQ Infinite</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/super-heroes">
              <SuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes/:heroId">
              <RQSuperHeroPage />
            </Route>
            <Route path="/rq-super-heroes">
              <RQSuperHeroesPage />
            </Route>
            <Route path="/rq-super-heroes-doppelgangers">
              <RQSuperHeroesDopplegangersPage />
            </Route>
            <Route path="/rq-parallel">
              <ParallelQueriesPage />
            </Route>
            <Route path="/rq-dynamic-parallel">
              <DynamicParallelQueriesPage heroIds={[1, 3]} />
            </Route>
            <Route path="/rq-dependent">
              <DependentQueriesPage email={`adityapawar@example.com`} />
            </Route>
            <Route path="/rq-paginated">
              <PaginatedQueriesPage />
            </Route>
            <Route path="/rq-infinite">
              <InfiniteQueriesPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

export default App;
