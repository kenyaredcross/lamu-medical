#!/usr/bin/env node

const http = require('http');

function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: '127.0.0.1',
      port: 5000,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      family: 4,  // Use IPv4 only
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ status: res.statusCode, data: json });
        } catch {
          resolve({ status: res.statusCode, data: data });
        }
      });
    });

    req.on('error', (error) => {
      console.error('Request error details:', error);
      console.error('Error code:', error.code);
      reject(error);
    });

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function runTests() {
  console.log('🚀 Starting API Tests...\n');

  try {
    // 1. Health Check
    console.log('1️⃣ Testing Health Check...');
    let result = await makeRequest('GET', '/health');
    console.log(`   Status: ${result.status}`);
    console.log(`   Response: ${JSON.stringify(result.data)}\n`);

    // 2. Register Student
    console.log('2️⃣ Testing Student Registration...');
    result = await makeRequest('POST', '/api/auth/register', {
      name: 'John Doe',
      email: 'student@example.com',
      password: 'password123',
      userType: 'student',
    });
    console.log(`   Status: ${result.status}`);
    console.log(`   Response:`, result.data, '\n');
    
    let studentToken = result.data.token;
    let studentId = result.data.user?.id;

    // 3. Register Company
    console.log('3️⃣ Testing Company Registration...');
    result = await makeRequest('POST', '/api/auth/register', {
      name: 'Tech Company Inc',
      email: 'company@example.com',
      password: 'password123',
      userType: 'company',
    });
    console.log(`   Status: ${result.status}`);
    console.log(`   Response:`, result.data, '\n');
    
    let companyToken = result.data.token;

    // 4. Login
    console.log('4️⃣ Testing Login...');
    result = await makeRequest('POST', '/api/auth/login', {
      email: 'student@example.com',
      password: 'password123',
    });
    console.log(`   Status: ${result.status}`);
    console.log(`   Response:`, result.data, '\n');

    // 5. Get All Internships
    console.log('5️⃣ Testing Get All Internships...');
    result = await makeRequest('GET', '/api/internships');
    console.log(`   Status: ${result.status}`);
    console.log(`   Response: Found ${Array.isArray(result.data) ? result.data.length : 0} internships\n`);

    console.log('✨ All tests completed!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

runTests();
