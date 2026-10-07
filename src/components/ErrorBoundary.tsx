import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert">
          <p className="error-boundary__code">Oops!</p>
          <h1 className="error-boundary__title">A page of the atlas tore.</h1>
          <p className="error-boundary__text">
            Something went wrong while drawing this view. Reload the page, or walk another path.
          </p>
          <div className="error-boundary__actions">
            <button type="button" className="btn btn-solid" onClick={() => window.location.reload()}>
              Reload the page
            </button>
            <a href="/" className="btn btn-outline">
              Back to home
            </a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
