import React from 'react';
import './App.css';

class StateDemo extends React.Component {
  state = {
    bgColor: 'whitesmoke',
    showArticles: false,
  };

  changeBGColorHandler = (event) => {
    const colors = ['#aec086', '#b9c5c7', '#d7d2cc', '#a08c7d', '#b3504b'];
    const index = Math.floor(Math.random() * colors.length);
    const color = colors[index];
    this.setState({
      bgColor: color
    });
  }

  toggleArticlesHandler = (event) => {
    this.setState((prevState) => {
      return {
        ...this.state,
        showArticles: !prevState.showArticles
      }
    });
  };

  render () {
    return (
    <div className="wrapper" style={{backgroundColor: this.state.bgColor}}>
      <h1>React Contacts</h1>
      <button onClick={this.changeBGColorHandler}>Change Background</button>

      <section>
        <h2>Articles</h2>

        <button onClick={this.toggleArticlesHandler}>{this.state.showArticles ? 'Hide Articles' : 'Show Articles'}</button>

        <div style={{display: this.state.showArticles ? 'block' : 'none'}}>
          <article>
            <h4>Article One</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio reiciendis odit id magnam, quas error voluptatem distinctio sunt quis culpa soluta dignissimos cumque recusandae aspernatur pariatur, quaerat in? Autem illum totam neque iure! Non similique laboriosam ut, veritatis reiciendis quas.</p>
          </article>
          <article>
            <h4>Article Two</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio reiciendis odit id magnam, quas error voluptatem distinctio sunt quis culpa soluta dignissimos cumque recusandae aspernatur pariatur, quaerat in? Autem illum totam neque iure! Non similique laboriosam ut, veritatis reiciendis quas.</p>
          </article>
        </div>
      </section>
    </div>
    );
  }
}

export default StateDemo;
