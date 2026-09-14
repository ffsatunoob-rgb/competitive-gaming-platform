# FREE Hosting Guide

## Best FREE Options

### 1. Render - BEST (Completely Free Forever)
- No credit card needed
- Free PostgreSQL & Redis
- Auto-deploy from GitHub
- **Cost: $0/month** ✅
- Site: https://render.com

### 2. Railway - Good Alternative ($5/month credits)
- $5 free credits each month
- Usually covers small apps
- Better performance than Render
- **Cost: $0/month (from credits)** ✅
- Site: https://railway.app

### 3. AWS Free Tier (1 year free)
- More powerful resources
- Free for 12 months
- Then requires payment
- **Cost: $0/month for 1 year** ✅
- Site: https://aws.amazon.com/free

### 4. Heroku Alternative: Fly.io
- Free tier available
- Good performance
- **Cost: $0/month (limited)** ✅
- Site: https://fly.io

---

## Quick Comparison

| Platform | Cost | Time Limit | Ease |
|----------|------|-----------|------|
| Render | FREE | Forever | Easy |
| Railway | FREE | Forever | Easy |
| AWS | FREE | 1 Year | Hard |
| Fly.io | FREE | Forever | Medium |

---

## Recommended: Render (Takes 15 minutes)

### Step 1: Create Account
```
1. Go to https://render.com
2. Click "Get Started"
3. Sign up with GitHub
```

### Step 2: Deploy Backend
```
1. Dashboard → "New +" → "Web Service"
2. Connect your GitHub repo
3. Set Name: competitive-gaming-backend
4. Environment: Node
5. Build: npm install
6. Start: npm start
7. Plan: Free
8. Create
```

### Step 3: Deploy PostgreSQL
```
1. "New +" → "PostgreSQL"
2. Name: competitive-gaming-db
3. Plan: Free
4. Create
```

### Step 4: Deploy Redis
```
1. "New +" → "Redis"
2. Name: competitive-gaming-redis
3. Plan: Free
4. Create
```

### Step 5: Deploy Frontend
```
1. "New +" → "Web Service"
2. Select repo
3. Name: competitive-gaming-frontend
4. Build: npm install && npm run build
5. Start: npm start
6. Plan: Free
7. Create
```

### Step 6: Add Environment Variables

**Backend:**
```
DB_HOST=<from PostgreSQL>
DB_USER=postgres
DB_PASSWORD=<generated password>
DB_NAME=competitive_gaming
REDIS_URL=<from Redis>
JWT_SECRET=random-secret-key
STRIPE_SECRET_KEY=sk_live_...
NODE_ENV=production
```

**Frontend:**
```
REACT_APP_API_URL=https://competitive-gaming-backend.onrender.com
```

### Step 7: Run Database Schema

```bash
psql <connection-string> < database/schema.sql
```

---

## Cost Breakdown

**Render (Completely Free):**
- Backend Web Service: $0
- Frontend Web Service: $0
- PostgreSQL Database: $0
- Redis Cache: $0
- **Monthly Total: $0** ✅

---

## After You Outgrow Free Tier

**If you upgrade to paid:**
- Backend: $7/month
- Frontend: $7/month
- PostgreSQL: $15/month
- Redis: $15/month
- **Total: ~$44/month**

---

## Limitations of Free Tier

- 0.5 GB RAM (fine for MVP)
- Services spin down after 15 min inactivity
- Slower performance
- Good for development/testing

**Solution for spin-down:** Use free monitoring service (UptimeRobot) to ping your app every 5 minutes

---

## Start Now!

1. Go to https://render.com
2. Sign up
3. Follow the 5 steps above
4. Your app will be live in ~15 minutes!

**Total Cost: $0/month** ✅
