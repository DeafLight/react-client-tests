import * as React from 'react';
import * as ReactDom from 'react-dom';
import 'whatwg-fetch';
import {reposForUser} from './api';
import RepositoryList from './repository-list';

class HelloWorld extends React.Component<any, any>{
    render() {
        return <div>
            <h2>Repository List</h2>
            <RepositoryList />
        </div>;
    }
}

ReactDom.render(<div><p>Hello world</p><HelloWorld /></div>, document.getElementById("app"));
