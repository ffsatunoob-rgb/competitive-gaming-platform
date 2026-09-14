#!/bin/bash

# Azure Setup Script
# Creates all necessary Azure resources for deployment

set -e

echo "🚀 Setting up Azure resources for Competitive Gaming Platform"

# Variables
RESOURCE_GROUP="competitive-gaming-rg"
LOCATION="eastus"
APP_NAME="competitive-gaming"
ACR_NAME="competitivegamingacr"

echo "Resource Group: $RESOURCE_GROUP"
echo "Location: $LOCATION"
echo ""

# Check if logged in
if ! az account show > /dev/null 2>&1; then
    echo "Please login to Azure first"
    az login
fi

echo "Creating resource group..."
az group create --name $RESOURCE_GROUP --location $LOCATION

echo "Creating container registry..."
az acr create --resource-group $RESOURCE_GROUP --name $ACR_NAME --sku Basic

echo "Creating app service plan..."
az appservice plan create --name "${APP_NAME}-plan" --resource-group $RESOURCE_GROUP --sku B2 --is-linux

echo "Creating backend web app..."
az webapp create --resource-group $RESOURCE_GROUP --plan "${APP_NAME}-plan" --name "${APP_NAME}-backend"

echo "Creating frontend web app..."
az webapp create --resource-group $RESOURCE_GROUP --plan "${APP_NAME}-plan" --name "${APP_NAME}-frontend"

echo "Creating PostgreSQL database..."
az postgres server create --resource-group $RESOURCE_GROUP --name "${APP_NAME}-postgres" --location $LOCATION --admin-user pgadmin --admin-password "ChangeMe@123456" --sku-name B_Gen5_2 --storage-size 51200 --backup-retention 7 --geo-redundant-backup Enabled

echo "Creating Redis cache..."
az redis create --resource-group $RESOURCE_GROUP --name "${APP_NAME}-redis" --location $LOCATION --sku Basic --vm-size c0

echo ""
echo "✅ Azure resources created successfully!"
echo ""
echo "Next steps:"
echo "1. Go to Azure Portal to set database firewall rules"
echo "2. Add secrets to GitHub repository"
echo "3. Update .env with connection details"
echo "4. Push to main branch to trigger deployment"
echo ""
echo "To view resources:"
echo "az resource list --resource-group $RESOURCE_GROUP"
