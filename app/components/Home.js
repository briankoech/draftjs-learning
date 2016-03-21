import React from 'react';
import ReactDOM from 'react-dom';
import immutable from 'immutable';
import { Editor, EditorState, RichUtils } from 'draft-js';
import StyleButton from './StyleButton';

const styles = {
        root: {
          fontFamily: '\'Helvetica\', sans-serif',
          padding: 20,
          width: 600,
        },
        editor: {
          border: '1px solid #ccc',
          cursor: 'text',
          minHeight: 80,
          padding: 10,
        },
        button: {
          marginTop: 10,
          textAlign: 'center',
        },
};
const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'H5', style: 'header-five'},
  {label: 'H6', style: 'header-six'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];
const Controls = (props) => {
  return (
    <div className="RichEditor-controls">
      {
        BLOCK_TYPES.map((type) => {
          <>
        })
      }
    </div>
  );
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });
    this.logState = () => console.log(this.state.editorState.toJS());
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
  }

  handleKeyCommand (command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if(newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onBoldClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  render () {
    const {editorState} = this.state;
    return (
      <div style={styles.root}>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <div style={styles.editor} onClick={this.focus}>
         <Editor
            editorState={editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            placeholder="Enter some text..."
            ref="editor"
          />;
      </div>
      <input
        onClick={this.logState}
        style={styles.button}
        type="button"
        value="Log State"
      />
     </div>
   );
  }
}
