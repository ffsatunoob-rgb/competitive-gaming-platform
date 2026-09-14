# Testing

## Run Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## Coverage

```bash
npm run test:coverage
```

## Performance Testing

```bash
# Using Apache Bench
ab -n 1000 -c 100 http://localhost:3000/health
```
