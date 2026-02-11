#!/bin/bash

# Lamu Medical System Sync to Server Script
# Syncs the project to the production server

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Configuration
SERVER_USER="lenox"
SERVER_IP="10.10.9.31"
SERVER_HOST="${SERVER_USER}@${SERVER_IP}"
PROJECT_NAME="lamu-medical"
REMOTE_DIR="/home/${SERVER_USER}/${PROJECT_NAME}"
LOCAL_DIR="/home/lnx/Desktop/redcross/lamu-medical"

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}Lamu Medical System Sync${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Test SSH connection
echo -e "${BLUE}[1/5] Testing SSH connection...${NC}"
if ssh -o BatchMode=yes -o ConnectTimeout=5 ${SERVER_HOST} "echo 'Connected'" > /dev/null 2>&1; then
    echo -e "${GREEN}✓ SSH connection successful${NC}"
else
    echo -e "${RED}✗ SSH connection failed${NC}"
    echo -e "${YELLOW}Please ensure SSH keys are set up${NC}"
    exit 1
fi
echo ""

# Create remote directory
echo -e "${BLUE}[2/5] Creating remote directory...${NC}"
ssh ${SERVER_HOST} "mkdir -p ${REMOTE_DIR}"
echo -e "${GREEN}✓ Directory created: ${REMOTE_DIR}${NC}"
echo ""

# Sync entire project
echo -e "${BLUE}[3/5] Syncing project files...${NC}"
echo -e "${YELLOW}This may take a few minutes...${NC}"
echo ""

rsync -avz --progress \
    --exclude 'node_modules' \
    --exclude '.git' \
    --exclude 'backup' \
    --exclude '*.tar.gz' \
    --exclude '*.csv' \
    --exclude '.env.local' \
    --exclude '.DS_Store' \
    --delete \
    ${LOCAL_DIR}/ ${SERVER_HOST}:${REMOTE_DIR}/

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Project synced successfully${NC}"
else
    echo -e "${RED}✗ Sync failed${NC}"
    exit 1
fi
echo ""

# Show sync summary
echo -e "${BLUE}[4/5] Sync Summary${NC}"
ssh ${SERVER_HOST} "cd ${REMOTE_DIR} && echo 'Files synced to:' && pwd && echo '' && echo 'Directory contents:' && ls -lh"
echo ""

# Build and restart container
echo -e "${BLUE}[5/5] Building and restarting container...${NC}"
echo -e "${YELLOW}This may take a few minutes...${NC}"
echo ""

ssh ${SERVER_HOST} "cd ${REMOTE_DIR} && docker compose build --no-cache && docker compose up -d"

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Container built and started successfully${NC}"
else
    echo -e "${RED}✗ Container build/start failed${NC}"
    exit 1
fi
echo ""

echo -e "${BLUE}================================================${NC}"
echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""
echo -e "${BLUE}Service Status:${NC}"
ssh ${SERVER_HOST} "cd ${REMOTE_DIR} && docker compose ps"
echo ""

echo -e "${BLUE}Network Info:${NC}"
echo -e "Container is connected to: ${YELLOW}cbsx_app-network${NC}"
echo -e "Accessible at: ${YELLOW}http://10.10.9.31:5000${NC}"
echo ""
