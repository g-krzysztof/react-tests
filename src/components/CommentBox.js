import React from 'react';

class CommentBox extends React.Component {
    state = {}
    render() {
        return (
            <form>
                <h4>Add a comment</h4>
                <textarea></textarea>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;