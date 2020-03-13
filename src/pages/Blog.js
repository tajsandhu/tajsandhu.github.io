import React from 'react';

class Blog extends React.Component {

    componentDidMount = () => {
        this.props.updateTab('blog');
    }
    render() {
        return(
            <div>
                <label>Under Construction</label>
            </div>
        )
    }
}

export default Blog;