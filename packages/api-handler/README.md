# API Handler Package

This package provides a robust API handling solution with error logging and environment configuration.

## Environment Setup

1. Create a `.env` file in the package root:

   ```bash
   cp .env.example .env
   ```

2. Configure your environment variables:

   ```env
   # Environment configuration
   NODE_ENV=development # or production

   # API Configuration
   API_BASE_URL=http://localhost:3000
   API_TIMEOUT=30000
   ```

## Environment Variables

| Variable     | Description                     | Default                 |
| ------------ | ------------------------------- | ----------------------- |
| NODE_ENV     | Current environment             | `development`           |
| API_BASE_URL | Base URL for API requests       | `http://localhost:3000` |
| API_TIMEOUT  | Request timeout in milliseconds | `30000`                 |

## Error Logging

The logger behavior changes based on the `NODE_ENV`:

- **Development** (`NODE_ENV=development`):

  - Detailed error logs with stack traces
  - Pretty-printed JSON output
  - Full error context

- **Production** (`NODE_ENV=production`):
  - Compact JSON logs
  - No stack traces
  - Suitable for log aggregation

## Usage

```typescript
import { logError } from './utils/logger';

try {
	// Your code
} catch (error) {
	logError(error);
}
```
