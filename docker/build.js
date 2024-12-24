const { execSync } = require('child_process');
const path = require('path');

const USERNAME = 'auroraphtgrp';
const SERVICES = ['cme-bff', 'cme-main', 'cme-media', 'cme-app'];

// Get root directory path
const rootDir = path.resolve(__dirname, '..');

try {
    // Build and push each service
    SERVICES.forEach(service => {
        try {
            const servicePath = path.join(rootDir, service);
            const dockerfilePath = path.join(servicePath, 'Dockerfile');

            console.log(`\nBuilding ${service}...`);
            execSync(`docker build -t ${USERNAME}/${service}:latest -f ${dockerfilePath} ${servicePath}`, { 
                stdio: 'inherit',
                cwd: rootDir
            });

            console.log(`\nPushing ${service}...`);
            execSync(`docker push ${USERNAME}/${service}:latest`, { 
                stdio: 'inherit',
                cwd: rootDir
            });
        } catch (error) {
            console.error(`Error processing ${service}:`, error.message);
            process.exit(1);
        }
    });

    console.log('\nAll services have been built and pushed successfully! 🚀');
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
} 