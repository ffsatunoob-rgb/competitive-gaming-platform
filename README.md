# Competitive Gaming Platform

A full-featured competitive gaming platform with tournaments, matches, scoring, leaderboards, payments, and account management.

## Architecture

```
Android / iOS / Web
        │
        ▼
API Gateway + WAF
        │
        ├── Identity & Accounts
        ├── Tournament Engine
        ├── Match/Lobby Engine
        ├── Scoring Engine
        ├── Leaderboards
        ├── Notifications
        ├── Moderation
        └── Sandbox Payments
        │
        ▼
PostgreSQL ─── Redis
        │
        ├── Object Storage
        ├── Background Workers
        └── Audit/Event System
```

## Project Structure

```
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── services/       # Business logic
│   │   ├── routes/         # API endpoints
│   │   ├── models/         # Database models
│   │   ├── middleware/     # Auth, validation, etc.
│   │   ├── utils/          # Helpers
│   │   └── config/         # Configuration
│   ├── tests/
│   └── docker/
├── database/               # Database setup & migrations
│   ├── schema.sql
│   └── migrations/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── store/
│   └── public/
├── mobile/                 # React Native (iOS/Android)
├── docker-compose.yml      # Local development
├── .env.example            # Environment template
└── docs/                   # Documentation
```

## Features

- ✅ User Account Creation & Authentication
- ✅ Payment Processing (Stripe Integration)
- ✅ Tournament Management
- ✅ Match/Lobby System
- ✅ Real-time Scoring
- ✅ Dynamic Leaderboards
- ✅ Notifications System
- ✅ Moderation Tools
- ✅ Audit & Event Logging
- ✅ Background Job Processing

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 13+
- Redis 6+
- Docker & Docker Compose

### Quick Start

1. Clone the repository
```bash
git clone https://github.com/ffsatunoob-rgb/competitive-gaming-platform.git
cd competitive-gaming-platform
```

2. Setup environment
```bash
cp .env.example .env
```

3. Start services
```bash
docker-compose up -d
```

4. Install dependencies
```bash
cd backend && npm install
cd ../frontend && npm install
```

5. Run migrations
```bash
cd backend && npm run migrate
```

6. Start development servers
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm start
```

## API Documentation

See `/docs/API.md` for detailed API endpoints.

## Database Schema

See `/database/schema.sql` for the complete database structure.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and process.

## License

MIT License