import React from 'react';
import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-translucent-theme.css';
import GoldenLayout from 'golden-layout';

class MyLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setNode = this.setNode.bind(this);
  }
  componentDidMount() {
    var myLayout = new GoldenLayout({
      settings: { hasHeaders: false },
      dimensions: { borderWidth: 2 },
      content: [
        {
          isCloseable: false,
          type: 'row',
          content: [
            {
              isCloseable: false,
              type: 'react-component',
              component: 'test-component',
              props: { label: 'A' },
            },
            {
              type: 'column',
              content: [
                {
                  isCloseable: false,
                  type: 'react-component',
                  component: 'test-component',
                  props: { label: 'B' },
                },
                {
                  type: 'react-component',
                  component: 'test-component',
                  props: { label: 'C' },
                },
              ],
            },
          ],
        },
      ],
    });

    var TestComponent = React.createClass({
      render: function() {
        return <h1>{this.props.label}</h1>;
      },
    });

    myLayout.registerComponent('test-component', TestComponent);

    //Once all components are registered, call
    myLayout.init();
    /* you can pass config as prop, or use a predefined one */
    const instance = new GoldenLayout(this.props.config, this.node);
    /* register components or bind events to your new instance here */
    instance.init();
  }
  setNode(node) {
    this.node = node;
  }
  render() {
    return <div ref={this.setNode} />;
  }
}

export default MyLayout;
