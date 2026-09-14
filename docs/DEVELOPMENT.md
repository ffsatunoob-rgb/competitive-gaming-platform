# Competitive Gaming Platform - Development Guide

## Setup Instructions

### Prerequisites
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 13+
- Redis 6+

### Quick Start with Docker

```bash
# Clone repository
git clone https://github.com/ffsatunoob-rgb/competitive-gaming-platform.git
cd competitive-gaming-platform

# Start all services
docker-compose up -d

# Backend will be running at http://localhost:3000
# PostgreSQL at localhost:5432
# Redis at localhost:6379
```

### Manual Setup

1. **Setup Database**
```bash
cd database
psql -U postgres -h localhost < schema.sql
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Configure Environment**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start Backend**
```bash
npm run dev
```

## API Endpoints

### Account Management
- `POST /api/accounts/register` - Create new account
- `POST /api/accounts/login` - Login user
- `GET /api/accounts/profile` - Get user profile
- `PUT /api/accounts/profile` - Update profile
- `POST /api/accounts/logout` - Logout user

### Payments
- `POST /api/payments/create-payment-intent` - Create payment intent
- `POST /api/payments/confirm-payment` - Confirm payment
- `GET /api/payments/transactions` - Get transaction history

### Tournaments
- `GET /api/tournaments` - List all tournaments
- `POST /api/tournaments` - Create tournament
- `GET /api/tournaments/:id` - Get tournament details
- `POST /api/tournaments/:id/join` - Join tournament

### Matches
- `GET /api/matches` - List matches
- `POST /api/matches` - Create match
- `GET /api/matches/:id` - Get match details

### Scoring
- `POST /api/scoring/record-score` - Record score
- `GET /api/scoring/:matchId` - Get match scores

### Leaderboards
- `GET /api/leaderboards/:tournamentId` - Get tournament leaderboard
- `GET /api/leaderboards/user/:userId` - Get user's leaderboards

### Notifications
- `GET /api/notifications` - Get user notifications
- `POST /api/notifications/:id/read` - Mark notification as read

### Moderation
- `POST /api/moderation/report` - Report user/content
- `GET /api/moderation/reports` - Get reports (admin only)

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── index.js
│   │   ├── config/
│   │   │   ├── database.js
│   │   │   └── stripe.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   ├── errorHandler.js
│   │   │   └── validation.js
│   │   ├── services/
│   │   │   ├── accountService.js
│   │   │   ├── paymentService.js
│   │   │   ├── emailService.js
│   │   │   └── ...
│   │   └── routes/
│   │       ├── accounts.js
│   │       ├── payments.js
│   │       ├── tournaments.js
│   │       └── ...
│   ├── Dockerfile
│   └── package.json
├── database/
│   └── schema.sql
├── docker-compose.yml
└── README.md
```

## Development Tips

### Running Tests
```bash
cd backend
npm test
```

### Linting
```bash
npm run lint
npm run lint:fix
```

### Database Migrations
```bash
npm run migrate
```

### Seeding Database
```bash
npm run seed
```

## Deployment

### Docker Build
```bash
docker build -t competitive-gaming:latest ./backend
```

### Environment Variables for Production
Update `.env` with production values for:
- JWT_SECRET
- STRIPE_SECRET_KEY
- DATABASE credentials
- EMAIL credentials

## Support

For issues or questions, please create an issue on GitHub.
