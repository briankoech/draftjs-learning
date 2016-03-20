import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({ editorState });
  }

  componentDidMount() {
    console.log('mounted');
  }

  render () {
    const {editorState} = this.state;
    return <Editor
        editorState={editorState}
        onChange={this.onChange}
        placeholder="Enter some text..."
        ref="editor"
      />;
  }
}
