# Deployment

## Docker Setup

```bash
# Create .env file
cp .env.example .env

# Edit .env with your configuration

# Start services
docker-compose up -d

# Check logs
docker-compose logs -f backend
```

## Environment Variables

```
NODE_ENV=production
DB_HOST=postgres
DB_PASSWORD=secure_password
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=sk_live_...
```

## Verification

```bash
# Check API health
curl http://localhost:3000/health
```

## Database Migrations

```bash
# Run migrations
npm run migrate
```

## Backup

```bash
# Backup database
pg_dump -h localhost -U postgres competitive_gaming > backup.sql

# Restore
psql -h localhost -U postgres competitive_gaming < backup.sql
```
