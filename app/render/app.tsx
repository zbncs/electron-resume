import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, HashRouter as Router, Route} from 'react-router-dom';
// 组件
import Title from './title';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <div>可视化简历平台</div>
                    <div>这是 Electron + React </div>
                    <Title text={'hhhhh'} />
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))


