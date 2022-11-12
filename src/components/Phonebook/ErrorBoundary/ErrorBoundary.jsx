import React, { Component } from 'react';
import { StyledErrorBoundary } from 'components/Phonebook/ErrorBoundary/StyledErrorBoundary';

// На хуках аналогов componentDidCatch нет

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
        })
    }
    render() {
        const { hasError } = this.state;
        if (hasError) {
            return (
              <StyledErrorBoundary>
                Sorry, something went wrong. We are already working on it :(
              </StyledErrorBoundary>
            );
        }
        return this.props.children;
  }
}
