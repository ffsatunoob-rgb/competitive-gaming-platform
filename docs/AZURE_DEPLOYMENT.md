# Azure Deployment

Complete guide to deploy the Competitive Gaming Platform to Microsoft Azure.

## Quick Start

1. Create Azure account at https://azure.microsoft.com/free
2. Install Azure CLI
3. Run setup script
4. Configure GitHub secrets
5. Push to main (auto-deploys)

## Resources Created

- Azure Container Registry (ACR)
- App Service Plan (Linux)
- PostgreSQL Database
- Redis Cache
- Web Apps (Backend & Frontend)

## Setup Command

```bash
az login
bash azure/setup.sh
```

## GitHub Secrets Required

- AZURE_CREDENTIALS
- AZURE_REGISTRY_LOGIN_SERVER
- AZURE_REGISTRY_USERNAME
- AZURE_REGISTRY_PASSWORD
- DB_HOST, DB_USER, DB_PASSWORD
- REDIS_HOST, REDIS_PASSWORD
- JWT_SECRET, STRIPE keys
- API_URL

## Deployment URLs

- Backend: https://competitive-gaming-backend.azurewebsites.net
- Frontend: https://competitive-gaming-frontend.azurewebsites.net

## Cost Estimate

- App Service B2: ~$50/month
- PostgreSQL Basic: ~$30/month
- Redis Basic: ~$20/month
- **Total: ~$100-150/month**

## Monitoring

```bash
# View logs
az webapp log tail --name competitive-gaming-backend --resource-group competitive-gaming-rg

# Restart app
az webapp restart --name competitive-gaming-backend --resource-group competitive-gaming-rg
```

## Support

See docs/AZURE_DEPLOYMENT.md for detailed instructions.
