# API Reference

## Base URL
`http://localhost:3000/api`

## Authentication

Include JWT token in Authorization header:
```
Authorization: Bearer <token>
```

## Key Endpoints

### Accounts
- `POST /accounts/register` - Create account
- `POST /accounts/login` - Login user
- `GET /accounts/profile` - Get user profile
- `PUT /accounts/profile` - Update profile

### Payments
- `POST /payments/create-payment-intent` - Create payment
- `POST /payments/confirm-payment` - Confirm payment
- `GET /payments/transactions` - Get history

### Tournaments
- `GET /tournaments` - List tournaments
- `POST /tournaments` - Create tournament
- `POST /tournaments/:id/join` - Join tournament

### Leaderboards
- `GET /leaderboards/:tournamentId` - Get leaderboard

## Response Format

Success:
```json
{
  "success": true,
  "data": { ... }
}
```

Error:
```json
{
  "success": false,
  "message": "Error description"
}
```
