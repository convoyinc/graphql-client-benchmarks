import * as dapper from '@convoy/dapper';

import { RawExample } from '../../Example';
// import { generatePartialExamples } from '../../partial';

// Values double as display strings.
enum Section {
  OPERATION = 'Query',
  RESPONSE = 'Response',
  SCHEMA = 'Schema',
}

interface EditorProps {
  example: RawExample;
  onCancel: () => void;
  onChange: (newExample: RawExample) => void;
}

interface EditorState {
  mounted: boolean;
  section: Section;
  example: RawExample; // Uncontrolled component.
}

const MODES: { [key: string]: (args: { state?: EditorState }) => boolean } = {
  mounted: ({ state }) => state && state.mounted,
};

const STYLES = dapper.compile({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    transition: 'opacity 350ms',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    opacity: 0.0,
    $mounted: {
      opacity: 1.0,
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#e6e8e9',
    color: '#0b2127',
  },
  header: {
    display: 'flex',
    fontSize: 20,
    lineHeight: '28px',
    marginBottom: 10,
    'button, input': {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      backgroundColor: 'transparent',
      color: 'inherit',
    },
    button: {
      marginLeft: 10,
      backgroundColor: '#f7f9fa',
      border: `1px solid #0b2127`,
    },
    input: {
      border: 'none',
    },
  },
  title: {
    flex: 1,
  },
  tabs: {
    display: 'flex',
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    appearance: 'none',
    outline: 'none',
    borderColor: '#0b2127',
    borderWidth: '1px 1px 1px 0',
    color: '#5b666b',
    backgroundColor: '#d6dadc',
    lineHeight: '40px',
    fontSize: 16,
    ':first-child': {
      borderLeftWidth: 1,
    },
  },
  activeTab: {
    backgroundColor: '#f7f9fa',
  },
  contentEditor: {
    fontFamily: `"Droid Sans Mono", "Menlo", "Monaco", monospace`,
    flex: 1,
    resize: 'none',
  },
});

export class ExampleEditor extends React.PureComponent<EditorProps, EditorState> {
  styles = dapper.reactTo(this, STYLES, MODES);

  _contentEditor: HTMLTextAreaElement;

  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      section: Section.OPERATION,
      example: { ...props.example },
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this._onKeyPress, false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({ mounted: true });
      });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this._onKeyPress, false);
  }

  render() {
    const { section, example } = this.state;

    let sectionContent;
    if (section === Section.OPERATION) {
      sectionContent = example.operation;
    } else if (section === Section.RESPONSE) {
      sectionContent = JSON.stringify(example.response, null, 2);
    } else if (section === Section.SCHEMA) {
      sectionContent = example.schema;
    }

    return (
      <div className={this.styles.root}>
        <div className={this.styles.content}>
          <div className={this.styles.header}>
            <input className={this.styles.title} value={example.title} onChange={this._onChangeTitle} />
            <button onClick={this._onCancel}>Cancel</button>
            <button onClick={this._onSave}>Save</button>
          </div>
          {this._renderSectionTabs()}
          <textarea
            ref={t => (this._contentEditor = t)}
            key={section}
            className={this.styles.contentEditor}
            defaultValue={sectionContent}
          />;
        </div>
      </div>
    );
  }

  private _renderSectionTabs() {
    const { section: activeSection } = this.state;

    return (
      <div className={this.styles.tabs}>
        {[Section.OPERATION, Section.RESPONSE, Section.SCHEMA].map(section => (
          <button
            key={section}
            className={`${this.styles.tab} ${section === activeSection ? this.styles.activeTab : ''}`}
            onClick={() => this._onSetSection(section)}
          >
            {section}
          </button>
        ))}
      </div>
    );
  }

  private _onChangeTitle = event => {
    const { example } = this.state;

    this.setState({
      example: { ...example, title: event.target.value },
    });
  };

  private _onSetSection = (nextSection: Section) => {
    const example = this._mergeActiveEdits();
    if (!example) return;
    this.setState({ section: nextSection, example });
  };

  private _onKeyPress = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      this._onCancel();
    }
  };

  private _onCancel = () => {
    this.props.onCancel();
  };

  private _onSave = () => {
    const example = this._mergeActiveEdits();
    if (!example) return;

    try {
      // example.partials = generatePartialExamples(example);
      // TODO-UPGRADE: diasble this for our purposes
      throw new Error("The query editing service is currently disabled");
    } catch (error) {
      alert(`Unable to process your query/response/schema: ${error.message}`);
      return;
    }

    this.props.onChange(example);
  };

  private _mergeActiveEdits = () => {
    const { section: prevSection, example } = this.state;
    const editorContent = this._contentEditor.value;

    const nextExample = { ...example };
    if (prevSection === Section.OPERATION) {
      nextExample.operation = editorContent;
    } else if (prevSection === Section.RESPONSE) {
      try {
        nextExample.response = JSON.parse(editorContent);
      } catch (error) {
        alert(`Invalid JSON in response: ${error.message}`);
        return;
      }
    } else if (prevSection === Section.SCHEMA) {
      nextExample.schema = editorContent;
    }

    return nextExample;
  };
}
