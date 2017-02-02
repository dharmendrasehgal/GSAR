import React, {PropTypes} from 'react';

const TreeNode = React.createClass({
	propTypes: {
		collapsed: PropTypes.bool,
		defaultCollapsed: PropTypes.bool
	  },
	getInitialState: function(){
		return {
			collapsed: !this.props.defaultCollapsed
		}
	},
	render: function(){
		var childNodes;
		if(this.props.node.items != null){
			childNodes = this.props.node.items.map(
				function(node, index){
					if(node.items){
						return <li key={index} className="haveClildNodes"><TreeNode node={node} /></li>
					}
					else{
						return <li key={index}><TreeNode node={node} /></li>
					}
				}
			);
		}
		var style = {};
		if(!this.state.collapsed){
			style.display = 'none';
		}
		return (
			<div>
				<h5 className="nodeItem" onClick={this.toggle}>{this.props.node.label}</h5>
				<ul style={style}>
					{childNodes}
				</ul>
			</div>
		);
	},
	toggle: function(){
		this.setState({collapsed: !this.state.collapsed});
	}
});

export default TreeNode;