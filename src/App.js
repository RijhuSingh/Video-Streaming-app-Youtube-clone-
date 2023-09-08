// import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import {Provider} from 'react-redux';
import store from './utils/store';
import MainContainer from './Components/MainContainer'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import WatchPage from './Components/WatchPage';

const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body />,
  children:[
    {
      path:'/',
      element: <MainContainer />
    },
    {
      path:'watch',
      element: <WatchPage />
    }
  ]
}])

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>

    </Provider>
  );
}

export default App;
