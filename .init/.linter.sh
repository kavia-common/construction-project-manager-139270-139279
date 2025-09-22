#!/bin/bash
cd /home/kavia/workspace/code-generation/construction-project-manager-139270-139279/construction_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

