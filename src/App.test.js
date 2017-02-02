import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TreeNode from './TreeNode';
import Items from './treeData';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});
it('have root container', () => {
	const div = document.createElement("div", {"id": "root"});
	ReactDOM.render(<App />, div);
});
it('have tree nodes with data accessible', () => {
	const div = document.createElement("div", {"id": "root"});
	ReactDOM.render(<TreeNode node={Items} />, div);
});